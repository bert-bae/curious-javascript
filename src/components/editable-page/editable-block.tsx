import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { EditableContentBlock } from "types";

export type EditableBlockProps = {
  id: string;
  html: string;
  tag: string;
  addBlock(block: Pick<EditableContentBlock, "id" | "ref">): void;
  deleteBlock(block: Pick<EditableContentBlock, "id" | "ref">): void;
  updateBlock(block: EditableContentBlock): void;
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
  const { addBlock, deleteBlock } = props;
  const classes = useStyles();
  const [htmlBackup, setHtmlBackup] = React.useState<string>("");
  const [html, setHtml] = React.useState<string>(props.html);
  const [tag, setTag] = React.useState<string>(props.tag);
  const [previousKey, setPreviousKey] = React.useState<any>(null);
  const contentEditable = React.createRef<any>();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "/") {
      setHtmlBackup(html);
    }

    if (e.key === "Enter") {
      if (previousKey !== "Shift") {
        e.preventDefault();
        addBlock({
          id: props.id,
          ref: contentEditable.current,
        });
      }
    }

    if (e.key === "Backspace" && !html) {
      e.preventDefault();
      deleteBlock({
        id: props.id,
        ref: contentEditable.current,
      });
    }

    setPreviousKey(e.key);
  };

  const handleContentChange = (e: ContentEditableEvent) => {
    setHtml(e.target.value);
  };

  return (
    <ContentEditable
      id={props.id}
      className={classes.block}
      innerRef={contentEditable}
      html={html}
      tagName={tag}
      onChange={handleContentChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default EditableBlock;
