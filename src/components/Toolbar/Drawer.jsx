import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SettingsIcon from "@material-ui/icons/Settings";
import PhoneIcon from "@material-ui/icons/Phone";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  list: {
    width: 200
  },
  fullList: {
    width: "auto"
  },
  sidIcon: {
    color: "#ffffff"
  }
});

export default function DrawerIcon() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
        >
          <br/>
         
          <Link to={"/"}>
        <List className="sidIcon">
          {["Home Page"].map((text, index) => (
            <ListItem className="sidIcon" button key={text}>
              <ListItemIcon className="sidIcon">
                {index % 2 === 0 ? <HomeIcon /> : <HomeIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Link>
      
      <br/>

      <Divider />
      
      <br/>

      <Link to={"/Settings"}>
        <List className="sidIcon">
          {["Settings"].map((text, index) => (
            <ListItem className="sidIcon" button key={text}>
              <ListItemIcon className="sidIcon">
                {index % 2 === 0 ? <SettingsIcon /> : <SettingsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Link>


      <Link to={"/About"}>
        <List>
          {["About Us"].map((text, index) => (
            <ListItem className="sidIcon" button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InfoIcon />
                ) : (
                  <Link to={"/About"}>
                    <InfoIcon />
                  </Link>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Link>


      <Link to={"/ContactForm"}>
        <List>
          {["Contact Us"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <PhoneIcon /> : <PhoneIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Link>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Link to={"/"}>
        <List className="sidIcon">
          {["Home Page"].map((text, index) => (
            <ListItem className="sidIcon" button key={text}>
              <ListItemIcon className="sidIcon">
                {index % 2 === 0 ? <HomeIcon /> : <HomeIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Link>
      <Divider />

      <Link to={"/Settings"}>
        <List>
          {["Settings"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <SettingsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Link>


      <Link to={"/About"}>
        <List>
          {["About Us"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <InfoIcon />
                ) : (
                  <Link to={"/About"}>
                    <InfoIcon />
                  </Link>
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Link>


      <Link to={"/ContactForm"}>
        <List>
          {["Contact Us"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <PhoneIcon /> : <PhoneIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Link>
    </div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("left", true)}>
        <MenuIcon />
      </Button>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {sideList("left")}
      </SwipeableDrawer>
    </div>
  );
}
