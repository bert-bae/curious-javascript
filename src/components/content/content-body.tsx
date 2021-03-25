import React from "react";
import Typography from "@material-ui/core/Typography";

export type ContentBodyProps = {
  children?: React.ReactNode;
};

const ContentBody: React.FC<ContentBodyProps> = ({ children }) => {
  return (
    <Typography variant="body1" component="div">
      {children}
    </Typography>
  );
};

export default ContentBody;
