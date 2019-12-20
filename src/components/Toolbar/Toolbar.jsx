import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import DrawerIcon from "./Drawer";
import { fontSize } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: "white"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white"
  },
  logIN: {
    textAlign: "right",
    float: "right",
    // color: "#ffffff",
    marginLeft: "1500px",
    marginRight: "20px",
    marginTop: "2px"
  },
  colorlog: {
    color: "#ffffff",
    // fontFamily:
    fontSize: "18px"
  },
  barColor: {
    backgroundColor: "#2F2E2E",
    height: "80px"
  },
  menu: {
    marginBottom: "7px"
  },
  title: {
    fontFamily: "Agency FB"
  },
  wenak: {
    // fontFamily: "Agency FB",
    fontFamily: "cairo",
    color: "#AED581",
    fontSize: "30px"
  },
  white: {
    color: "#fffff"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.barColor} position="static">
        <Toolbar className={classes.menu}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <DrawerIcon className={classes.white} />
          </IconButton>
          <Typography className={classes.wenak}>Wenak</Typography>
          {/* <Typography className={classes.logIN}>
            <Link to={"/LoginForm"}>
              <Button className={classes.colorlog} color="inherit">
                Login!
              </Button>
            </Link>
            <Link to={"/UserForm"}>
              <Button className={classes.colorlog} color="inherit">
                Sign Up
              </Button>
            </Link>
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
