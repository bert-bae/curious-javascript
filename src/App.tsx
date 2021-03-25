import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SearchNavigationBar from "components/search-navigation-bar";
import Content from "components/content";

import ArrowIcon from "@material-ui/icons/ArrowDownward";

const useStyles = makeStyles((theme) => ({
  app: {
    height: "100%",
    width: "100%",
  },
  mainWebContainer: {
    boxSizing: "border-box",
    maxWidth: "1280px",
    width: "100%",
    height: "calc(100% - 64px)",
    padding: theme.spacing(3),
    overflowY: "auto",
  },
}));

const App: React.FC<any> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.app}>
      <SearchNavigationBar
        searchValue={"123123"}
        onMenuClick={() => console.log("clicked")}
        onSearchChange={() => console.log("change")}
        onSearchBlur={() => console.log("blur")}
      />
      <Box className={classes.mainWebContainer}>
        <Content
          title="Hello"
          subtitle="world"
          headerDivider={true}
          HeaderRightIcon={<ArrowIcon />}
        >
          <Box>hello world</Box>
        </Content>
      </Box>
    </Box>
  );
};

export default App;
