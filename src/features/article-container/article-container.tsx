import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Content from "components/content";
import CodeBlock from "components/code-block";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  articleContainer: {
    margin: "0 auto",
    boxSizing: "border-box",
    maxWidth: "1280px",
    width: "100%",
    height: "calc(100% - 64px)",
    padding: theme.spacing(3),
    overflowY: "auto",
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
    <Box className={classes.articleContainer}>
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
