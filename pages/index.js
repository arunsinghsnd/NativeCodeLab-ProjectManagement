import React from "react";
import { Grid, makeStyles, Typography, useTheme } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  //
}));

const ProjactManager = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction="column">
      <Typography variant="h1">Project </Typography>
    </Grid>
  );
};

export default ProjactManager;
