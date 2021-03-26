import React from "react";
import clsx from "clsx";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuDrawerListGroup from "./menu-drawer-list-group";

export const drawerWidth = 240;
export type MenuDrawerProps = {
  open: boolean;
  onActionClick: () => void;
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerHidden: {
    width: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
}));

const MenuDrawer: React.FC<MenuDrawerProps> = (props) => {
  const { open, onActionClick } = props;
  const classes = useStyles();
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.up("sm"));

  const listItemExample = ["Inbox", "Starred", "Send email", "Drafts"].map(
    (item) => {
      return {
        label: item,
        onListItemClick: () => alert(`Action for ${item} not implemented`),
      };
    }
  );
  return (
    <Drawer
      className={clsx(classes.drawer, {
        [classes.drawerHidden]: !open || !mobileView,
      })}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onActionClick}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <MenuDrawerListGroup listItems={listItemExample} showDivider />
    </Drawer>
  );
};

export default MenuDrawer;
