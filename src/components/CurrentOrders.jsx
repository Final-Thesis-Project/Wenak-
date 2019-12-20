import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CurrentGrid from "./Current _CustCard";
// import ComplexGrid2 from "./C";
import { width } from "@material-ui/system";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    // padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "1000px",
    marginLeft: "120px"
  }
}));

export default function NestedCustom2() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <CurrentGrid/>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={8} spacing={3}>
          <FormRow />
        </Grid>
 
      </Grid>
    </div>
  );
}
