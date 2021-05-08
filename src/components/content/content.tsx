import ContentHeader, { ContentHeaderProps } from "./content-header";
import ContentBody, { ContentBodyProps } from "./content-body";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Theme } from "@material-ui/core";

export type ContentProps = ContentHeaderProps & ContentBodyProps;

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    padding: theme.spacing(2),
  },
}));

const Content: React.FC<ContentProps> = ({
  title,
  subtitle,
  headerDivider,
  HeaderLeftIcon,
  HeaderRightIcon,
  children,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <ContentHeader
        title={title}
        subtitle={subtitle}
        headerDivider={headerDivider}
        HeaderLeftIcon={HeaderLeftIcon}
        HeaderRightIcon={HeaderRightIcon}
      />
      <ContentBody>{children}</ContentBody>
    </Box>
  );
};

export default Content;
