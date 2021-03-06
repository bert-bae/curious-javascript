import React from "react";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme, fade } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Theme } from "@material-ui/core";
import { drawerWidth } from "components/menu-drawer";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

export type SearchNavigationBarProps = {
  searchValue: string;
  drawerOpen: boolean;
  onMenuClick(): void;
  onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  onSearchBlur?(
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
};

const SearchNavigationBar: React.FC<SearchNavigationBarProps> = ({
  searchValue,
  drawerOpen,
  onSearchBlur,
  onSearchChange,
  onMenuClick,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(
          classes.appBar,
          mobileView && {
            [classes.appBarShift]: drawerOpen,
          }
        )}
      >
        <Toolbar>
          {!drawerOpen && (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={onMenuClick}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography className={classes.title} variant="h6" noWrap>
            CuriousJavascript
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search???"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              value={searchValue}
              onChange={onSearchChange}
              onBlur={onSearchBlur}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default SearchNavigationBar;
