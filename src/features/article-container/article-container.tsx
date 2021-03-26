import React from "react";
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Content from "components/content";
import CodeBlock from "components/code-block";

const useStyles = makeStyles((theme) => ({
  articleContainer: {
    margin: "0 auto",
    boxSizing: "border-box",
    maxWidth: "1280px",
    width: "100%",
    height: "calc(100% - 64px)",
    padding: theme.spacing(3),
    overflowY: "auto",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export type ArticleContainerProps = {
  articleId: string;
  drawerOpen?: boolean;
};

const ArticleContainer: React.FC<ArticleContainerProps> = ({
  articleId,
  drawerOpen,
}) => {
  const classes = useStyles();
  return (
    <Box
      className={clsx(classes.content, classes.articleContainer, {
        [classes.contentShift]: drawerOpen,
      })}
    >
      <div className={classes.drawerHeader} />
      <Content title="Hello" subtitle="world" headerDivider={true}>
        <Box>hello world</Box>
      </Content>

      <CodeBlock
        syntax={"javascript"}
        code={`console.log('hello')`}
      ></CodeBlock>
    </Box>
  );
};

export default ArticleContainer;
