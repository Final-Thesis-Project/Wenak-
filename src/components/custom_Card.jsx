// import React from "react";
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
import DoneIcon from "@material-ui/icons/Done";
import VisibilityIcon from "@material-ui/icons/Visibility";
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
  accept: {
    color: "#FFFFFF",
    backgroundColor: "#4caf50",
    width: "130px",
    height: " 40px"
  },
  view: {
    color: "#FFFFFF",
    backgroundColor: "#cddc39",
    width: "130px",
    height: " 40px"
  },
  details: {
    padding: "10px",
    marginTop: "15px"
  },
  icons: {
    color: "#bdbdbd",
    marginRight: "9px",
    marginTop: "5px"
  },
  orderDetails: {
    //   padding:"",
    marginBottom: "5px"
  },
  iconTab: {
    color: "#fafafa",
    textAlign: "right",
    marginLeft: "15px"
  }
}));

export default function CustomGrid() {
  const classes = useStyles();
  const [orders, setOrder] = React.useState([]);
  const [userId, setUserId] = React.useState("");
  //   const [state, setState] = useState((order.state: "onway"));
  const [reciver_name, setReciver_name] = useState([]);
   const handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating })
  //   const pending = "pending";
  //   const onWay = "onWay";
  //   const state = { pending, onWay };

  ///------------------------ Get previous Orders ------------------------------------
  useEffect(() => {
    document.title = ` CustomerOrders`;
    console.log("I'm inside use effect");

    axios
      .get(`/api/customer/get_previous`)
      .then(res => {
        setOrder(res.data);
        console.log("I'm inside axios to get previous customer orders", res.data);
      })
      .catch(err => {
        console.log("I'm error inside axios to get previous customerorders", err);
      });
  }, []);

  ///-------------------------------- return ------------------------------------
  
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
                        <PersonIcon className={classes.icons} />
                        _id : {order._id}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.orderDetails}>
                    {/* {orders.map(order => ( */}
                    <Typography variant="body2" gutterBottom>
                      <p>
                        {" "}
                        <LocationOnIcon className={classes.icons} /> Location :{" "}
                        {order.order_details}
                      </p>
                    </Typography>
                    {/* ))} */}
                  </div>

                  <div className={classes.orderDetails}>
                    {/* {orders.map(order => ( */}
                    <Typography variant="body2">
                      <p>
                        <ScheduleIcon className={classes.icons} /> Time:
                        {order.date}
                      </p>
                    </Typography>
                    {/* ))} */}
                  </div>

                  <div className={classes.orderDetails}>
                    {/* {orders.map(order => ( */}
                    <Typography variant="body2">
                      <p>
                        <BeenhereIcon className={classes.icons} /> state :{" "}
                        {order.state}
                      </p>
                    </Typography>
                    {/* ))} */}
                  </div>
                  <div className={classes.orderDetails}>
                    <Typography variant="body2">
                      {/* <DirectionsBikeIcon /> */}
                    </Typography>
                  </div>
                </Grid>
                {/* <Grid item>
              <Typography variant="body2" style={{ cursor: "pointer" }}>
                Remove
              </Typography>
            </Grid> */}
              </Grid>
            </Grid>
            {/* <div style={{ marginBottom: "10px" }}>
          <SimpleRating /> */}

            <div
              style={{ float: "right", marginRight: "31px", fontSize: "39px" }}
            >
              <Grid item>
                <Typography
                  variant="subtitle1"
                  style={{
                    paddingTop: "20px",
                    marginRight: "26px",
                    fontSize: "25px"
                  }}
                >{order.price}
                  <p> </p>
               
                </Typography>
              </Grid>
              {/* </div> */}

              <div className={classes.button1}>
                <Button
                  // type="submit"
                  variant="contained"
                  color="#4caf50"
                  // onSubmit={this.handleSubmit}
                  // onClick={() => handleAccept(order._id)}
                >
                  Accept <DoneIcon className={classes.iconTab} />
                </Button>
                <Button
                  className={classes.view}
                  variant="contained"
                  color="#cddc39"
                  // onClick={() => setOrder((order.state: "onway"))}
                >
                  View <VisibilityIcon className={classes.iconTab} />
                </Button>
                {/* <Button
          className={classes.reject}
          variant="contained"
          color="#e53935"
        >
          Reject
        </Button> */}
              </div>
            </div>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
//
