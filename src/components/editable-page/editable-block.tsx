import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { EditableContentBlock } from "types";

export type EditableBlockProps = {
  id: string;
  html: string;
  tag: string;
  updatePage(block: EditableContentBlock): void;
  addBlock(block: EditableContentBlock): void;
  deleteBlock(block: EditableContentBlock): void;
};

const useStyles = makeStyles((theme: Theme) => ({
  block: {
    padding: theme.spacing(1),
    margin: 0,
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      background: "#F5F5F5",
      outlineColor: "#F5F5F5",
    },
    "&:focus": {
      background: "#E8E8E8",
      outlineColor: "#E8E8E8",
    },
  },
}));

const EditableBlock: React.FC<EditableBlockProps> = (props) => {
  const classes = useStyles();
  const [html, setHtml] = React.useState<string>(props.html);
  const [tag, setTag] = React.useState<string>(props.tag);
  const contentEditable = React.useRef<HTMLElement>(null);

  const handleContentChange = (e: ContentEditableEvent) => {
    setHtml(e.target.value);
  };

  return (
    <ContentEditable
      className={classes.block}
      innerRef={contentEditable}
      html={html}
      tagName={tag}
      onChange={handleContentChange}
    />
  );
};

export default EditableBlock;
