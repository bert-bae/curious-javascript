import React from "react";
import clsx from "clsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import SearchNavigationBar from "components/search-navigation-bar";
import MenuDrawer from "components/menu-drawer";
import ArticleContainer from "features/article-container";
import AuthoringContainer from "features/authoring-container";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  app: {
    height: "100%",
    width: "100%",
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
        <Box
          className={clsx(classes.content, {
            [classes.contentShift]: drawerOpen,
          })}
        >
          <div className={classes.drawerHeader} />
          <BrowserRouter>
            <Switch>
              <Route path="/articles">
                <ArticleContainer drawerOpen={drawerOpen} articleId="someId" />
              </Route>
              <Route path="/authoring">
                <AuthoringContainer />
              </Route>
            </Switch>
          </BrowserRouter>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
