import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

export type ContentHeaderProps = {
  title: string;
  subtitle?: string;
  headerDivider?: boolean;
  HeaderLeftIcon?: React.ReactNode;
  HeaderRightIcon?: React.ReactNode;
};

const useStyles = makeStyles((theme) => ({
  contentHeaderContainer: {
    marginBottom: theme.spacing(2),
  },
  leftIconContainer: {
    marginRight: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  rightIconContainer: {
    marginLeft: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  divider: {
    borderColor: theme.palette.divider,
    borderWidth: "2px",
    borderStyle: "solid",
    borderRadius: theme.shape.borderRadius,
    marginTop: 0,
  },
}));

const ContentHeader: React.FC<ContentHeaderProps> = ({
  title,
  subtitle,
  headerDivider,
  HeaderLeftIcon,
  HeaderRightIcon,
}) => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.contentHeaderContainer}>
      <Box>
        <Box display="flex">
          {HeaderLeftIcon && (
            <Box className={classes.leftIconContainer}>{HeaderLeftIcon}</Box>
          )}
          <Typography variant="h6" noWrap>
            {title}
          </Typography>
          {HeaderRightIcon && (
            <Box className={classes.rightIconContainer}>{HeaderRightIcon}</Box>
          )}
        </Box>
        {subtitle && (
          <Typography variant="subtitle1" noWrap>
            {subtitle}
          </Typography>
        )}
      </Box>
      {headerDivider && <hr className={classes.divider}></hr>}
    </Box>
  );
};

export default ContentHeader;
