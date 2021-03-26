import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SearchNavigationBar from "components/search-navigation-bar";
import MenuDrawer from "components/menu-drawer";
import ArticleContainer from "features/article-container";

const useStyles = makeStyles((theme) => ({
  app: {
    height: "100%",
    width: "100%",
  },
}));

const App: React.FC<any> = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(true);

  const handleDrawerAction = () => {
    setDrawerOpen((prev) => !prev);
  };

  return (
    <Box className={classes.app}>
      <SearchNavigationBar
        searchValue={"123123"}
        drawerOpen={drawerOpen}
        onMenuClick={handleDrawerAction}
        onSearchChange={() => console.log("change")}
        onSearchBlur={() => console.log("blur")}
      />
      <Box display="flex">
        <MenuDrawer open={drawerOpen} onActionClick={handleDrawerAction} />
        <ArticleContainer drawerOpen={drawerOpen} articleId="someId" />
      </Box>
    </Box>
  );
};

export default App;
