import React from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@material-ui/core/Box";
import EditableBlock from "./editable-block";
import { EditableContentBlock } from "types";
export type EditablePageProps = {
  blocks: EditableContentBlock[];
};

const createBlankBlock = (): EditableContentBlock => {
  const id = uuidv4();
  return { id, html: `<div>${id}</div>`, tag: "p" };
};

const EditablePage: React.FC<EditablePageProps> = (props) => {
  const [blocks, setBlocks] = React.useState<EditableContentBlock[]>(
    props.blocks.length === 0 ? [createBlankBlock()] : props.blocks
  );
  const [blockInFocus, setBlockInFocus] = React.useState<any>();
  const [lastCommand, setLastCommand] = React.useState<string>("");

  const handleUpdatePageBlock = (updatedBlock: EditableContentBlock) => {
    const updatedBlocks = [...blocks];
    const index = updatedBlocks.findIndex((x) => x.id === updatedBlock.id);
    updatedBlocks[index] = updatedBlock;
    setBlocks(updatedBlocks);
  };

  React.useEffect(() => {
    if (lastCommand === "Add") {
      blockInFocus.nextElementSibling.focus();
    }
    if (lastCommand === "Delete") {
      const prev = blockInFocus.previousElementSibling;

      if (prev) {
        blockInFocus.previousElementSibling.focus();
      }
    }
    setLastCommand("");
  }, [blocks]);

  const handleAddPageBlock = (
    currentBlock: Pick<EditableContentBlock, "id" | "ref">
  ) => {
    const newBlock = createBlankBlock();
    const updatedBlocks = [...blocks];
    const index = updatedBlocks.findIndex((x) => x.id === currentBlock.id);
    updatedBlocks.splice(index + 1, 0, newBlock);
    setBlocks(updatedBlocks);
    setLastCommand("Add");
  };

  const handleDeletePageBlock = (
    currentBlock: Pick<EditableContentBlock, "id" | "ref">
  ) => {
    const prevBlock = currentBlock.ref.previousElementSibling;

    if (prevBlock) {
      const updatedBlocks = [...blocks];
      const index = updatedBlocks.findIndex((x) => x.id === currentBlock.id);
      updatedBlocks.splice(index, 1);
      setBlocks(updatedBlocks);
      setLastCommand("Delete");
    }
  };

  const handleBlockInFocus = (block: any) => {
    setBlockInFocus(block);
  };

  return (
    <Box>
      {blocks.map((block, i) => (
        <EditableBlock
          key={i}
          id={block.id}
          tag={block.tag}
          html={block.html}
          focusBlock={handleBlockInFocus}
          addBlock={handleAddPageBlock}
          deleteBlock={handleDeletePageBlock}
          updateBlock={handleUpdatePageBlock}
        />
      ))}
    </Box>
  );
};

export default EditablePage;
