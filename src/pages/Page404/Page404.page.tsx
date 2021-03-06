import { Grid } from "@material-ui/core";
import React from "react";

const Page404 = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "80vh" }}
    >
      <Grid item xs={3}>
        <h1>Error 404</h1>
      </Grid>
    </Grid>
  );
};

export default Page404;
