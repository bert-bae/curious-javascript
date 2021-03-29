import React from "react";
import { v4 as uuidv4 } from "uuid";
import Box from "@material-ui/core/Box";
import EditableBlock from "./editable-block";
import { EditableContentBlock } from "types";
export type EditablePageProps = {
  blocks: EditableContentBlock[];
};

const createBlankBlock = (): EditableContentBlock => {
  return { id: uuidv4(), html: "<div>hello world</div>", tag: "p" };
};

const EditablePage: React.FC<EditablePageProps> = (props) => {
  const [blocks, setBlocks] = React.useState<EditableContentBlock[]>(
    props.blocks.length === 0 ? [createBlankBlock()] : props.blocks
  );
  console.log(blocks);
  const handleUpdatePageBlock = (updatedBlock: EditableContentBlock) => {
    const updatedBlocks = [...blocks];
    const index = updatedBlocks.findIndex((x) => x.id === updatedBlock.id);
    updatedBlocks[index] = updatedBlock;
    setBlocks(updatedBlocks);
  };

  const handleAddPageBlock = (currentBlock: EditableContentBlock) => {
    const newBlock = createBlankBlock();
    const updatedBlocks = [...blocks];
    const index = updatedBlocks.findIndex((x) => x.id === currentBlock.id);
    updatedBlocks.splice(index + 1, 0, newBlock);
    setBlocks(updatedBlocks);
    currentBlock.ref.nextElementSibling.focus();
  };

  const handleDeletePageBlock = (currentBlock: EditableContentBlock) => {
    const prevBlock = currentBlock.ref.previousElementSibling;

    if (prevBlock) {
      const updatedBlocks = [...blocks];
      const index = updatedBlocks.findIndex((x) => x.id === currentBlock.id);
      updatedBlocks.splice(index, 1);
      setBlocks(updatedBlocks);
      prevBlock.focus();
    }
  };

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
          updatePage={handleUpdatePageBlock}
        />
      ))}
    </Box>
  );
};

export default EditablePage;
