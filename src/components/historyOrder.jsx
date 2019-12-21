import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SimpleRating from "./rating";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import PersonIcon from "@material-ui/icons/Person";
// import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import ScheduleIcon from "@material-ui/icons/Schedule";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import axios from "axios";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: "auto",
    textAlign: "left",
    marginBottom: "12px"
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "60%",
    maxHeight: "60%"
  },
  button1: {
    "& > *": {
      margin: theme.spacing(1),
      //   paddingTop: "10px",
      //   textAlign: "right"
      float: "right",
      marginRight: "35px"
    }
  },
  rate: {
    maxWidth: "auto",
    maxHeight: "auto"
  },
  view: {
    color: "#FFFFFF",
    backgroundColor: "#4CAF50",
    width: "130px",
    height: " 40px"
  },
  reject: {
    color: "#FFFFFF",
    backgroundColor: "#E53935"
  },
  details: {
    padding: "10px",
    marginTop: "15px"
  },
  icons: {
    color: "#BDBDBD",
    marginRight: "9px",
    marginTop: "5px"
  },
  orderDetails: {
    //   padding:"",
    marginBottom: "5px"
  }
}));
export default function ComplexGrid2() {
  const classes = useStyles();
  const [orders, setOrder] = React.useState([]);
  const [userId, setUserId] = React.useState("");
  const [reciver_name, setReciver_name] = useState([]);
  useEffect(() => {
    document.title = `Drivers Orders`;
    console.log("I'm inside use effect");
    axios
      .get(`/api/driver/previous_order_d`, {
        headers: {
          "x-access-token": localStorage.getItem("usertoken")
        }
      })
      .then(res => {
        setOrder(res.data);
        console.log("I'm inside history order axios", res.data);
      })
      .catch(err => {
        console.log("I'm error", err);
      });
  }, []);
  return (
    <div className={classes.root}>
      {orders.map(order => (
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase className={classes.image}>
                <img
                  className={classes.img}
                  alt="complex"
                  src="https://image.flaticon.com/icons/svg/713/713342.svg"
                />
              </ButtonBase>
            </Grid>
            <Grid className={classes.details} item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <div className={classes.orderDetails}>
                    <Typography gutterBottom variant="subtitle1">
                      <p>
                        {" "}
                        <LocalOfferIcon className={classes.icons} />
                        user_id : {order.user_id}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.orderDetails}>
                    <Typography variant="body2">
                      <p>
                        {" "}
                        <PersonIcon className={classes.icons} /> 
                        Name:
                        {order.name}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.orderDetails}>
                    <Typography variant="body2" gutterBottom>
                      <p>
                        {" "}
                        <LocationOnIcon className={classes.icons} /> Location :{" "}
                        {order.order_details}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.orderDetails}>
                    <Typography variant="body2">
                      <p>
                        {" "}
                        <ScheduleIcon className={classes.icons} /> Time:
                        {order.date}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.orderDetails}>
                    <Typography variant="body2">
                      <p>
                        <BeenhereIcon className={classes.icons} /> state :{" "}
                        {order.state}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.orderDetails}>
                    <Typography variant="body2"></Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <div style={{ marginBottom: "5px" }}>
              <SimpleRating />
              <div
                style={{
                  float: "right",
                  marginRight: "31px",
                  fontSize: "39px"
                }}
              >
                <Grid item>
                  <Typography
                    variant="subtitle1"
                    style={{ marginRight: "26px", fontSize: "25px" }}
                  >
                    $19.00
                  </Typography>
                </Grid>
              </div>
              <div className={classes.button1}>
                <Button
                  className={classes.accept}
                  variant="contained"
                  color="#4CAF50"
                  // onClick={() => setOrder((order.state: "onway"))}
                >
                  View Order <VisibilityIcon className={classes.iconTab} />
                </Button>
              </div>
            </div>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}











