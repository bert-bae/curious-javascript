import React from "react";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import BookIcon from "@material-ui/icons/Book";
import CodeIcon from "@material-ui/icons/Code";
import EditIcon from "@material-ui/icons/Edit";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import { MenuDrawerVariants } from "types";

export type MenuDrawerListGroupProps = {
  listItems: {
    label: string;
    variant?: MenuDrawerVariants;
    onListItemClick: () => void;
  }[];
  showDivider?: boolean;
};

const ListVariantIcon = {
  Authoring: <EditIcon />,
  Article: <BookIcon />,
  Code: <CodeIcon />,
};

const MenuDrawerListGroup: React.FC<MenuDrawerListGroupProps> = ({
  listItems,
  showDivider,
}) => {
  return (
    <>
      <List>
        {listItems.map((item) => (
          <ListItem button key={item.label} onClick={item.onListItemClick}>
            <ListItemIcon>
              {item.variant ? (
                ListVariantIcon[item.variant]
              ) : (
                <FiberManualRecordIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
      {showDivider && <Divider />}
    </>
  );
};

export default MenuDrawerListGroup;
