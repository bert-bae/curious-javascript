import React from "react";
import Box from "@material-ui/core/Box";
import EditablePage from "components/editable-page";

export type AuthoringContainerProps = {};

const AuthoringContainer: React.FC<AuthoringContainerProps> = (props) => {
  return <EditablePage blocks={[]} />;
};

export default AuthoringContainer;
