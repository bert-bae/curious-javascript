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
  const [searchValue, setSearchValue] = React.useState<string>("");
  const handleDrawerAction = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log("blur not implemented");
  };

  return (
    <Box className={classes.app}>
      <SearchNavigationBar
        searchValue={searchValue}
        drawerOpen={drawerOpen}
        onMenuClick={handleDrawerAction}
        onSearchChange={handleSearchChange}
        onSearchBlur={handleSearchBlur}
      />
      <Box display="flex">
        <MenuDrawer open={drawerOpen} onActionClick={handleDrawerAction} />
        <ArticleContainer drawerOpen={drawerOpen} articleId="someId" />
      </Box>
    </Box>
  );
};

export default App;
