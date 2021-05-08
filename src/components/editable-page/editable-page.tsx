import React from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@material-ui/core/Box";
import EditableBlock from "./editable-block";
import { setCaretToEnd } from "./carat-helper";
import { EditableContentBlock } from "types";
export type EditablePageProps = {
  blocks: EditableContentBlock[];
};

const createBlankBlock = (): EditableContentBlock => {
  const id = uuidv4();
  return { id, html: "", tag: "p" };
};

const EditablePage: React.FC<EditablePageProps> = (props) => {
  const [blocks, setBlocks] = React.useState<EditableContentBlock[]>(
    props.blocks.length === 0 ? [createBlankBlock()] : props.blocks
  );
  const [
    blockInFocus,
    setBlockInFocus,
  ] = React.useState<EditableContentBlock>();

  const handleUpdatePageBlock = (updatedBlock: EditableContentBlock) => {
    const updatedBlocks = [...blocks];
    const index = updatedBlocks.findIndex((x) => x.id === updatedBlock.id);
    updatedBlocks[index] = updatedBlock;
    setBlocks(updatedBlocks);
  };

  const handleAddPageBlock = (
    currentBlock: Pick<EditableContentBlock, "id" | "ref">
  ) => {
    const newBlock = createBlankBlock();
    const updatedBlocks = [...blocks];
    const index = updatedBlocks.findIndex((x) => x.id === currentBlock.id);
    updatedBlocks.splice(index + 1, 0, newBlock);
    setBlocks(updatedBlocks);
    setBlockInFocus(newBlock);
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
      setBlockInFocus(prevBlock);
    }
  };

  React.useEffect(() => {
    if (blockInFocus) {
      document.getElementById(blockInFocus.id)?.focus();
      setCaretToEnd(blockInFocus.id);
    }
  }, [blockInFocus]);

  return (
    <Box>
      {blocks.map((block, i) => (
        <EditableBlock
          key={i}
          id={block.id}
          tag={block.tag}
          html={block.html}
          addBlock={handleAddPageBlock}
          deleteBlock={handleDeletePageBlock}
          updateBlock={handleUpdatePageBlock}
        />
      ))}
    </Box>
  );
};

export default EditablePage;
