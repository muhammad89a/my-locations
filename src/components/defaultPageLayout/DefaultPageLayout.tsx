import React, { ReactElement } from "react";
import Container from "@material-ui/core/Container";

export interface Props {
  children: React.ReactNode;
}

const DefaultPageLayout = (props: any): ReactElement => {
  return (
    <Container maxWidth="lg">
      {!props.children != null ? props.children : ""}
    </Container>
  );
};

export default DefaultPageLayout;
