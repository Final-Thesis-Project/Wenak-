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

export default function ComplexGrid() {
  const classes = useStyles();
  const [CuOrders, setCuOrders] = React.useState([]);
  const [userId, setUserId] = React.useState("");
  //   const [state, setState] = useState((order.state: "onway"));
  const [reciver_name, setReciver_name] = useState([]);
  //   const pending = "pending";
  //   const onWay = "onWay";
  //   const state = { pending, onWay };

  ///------------------------ Get pending Orders ------------------------------------
  useEffect(() => {
    document.title = ` CustomersOrders`;
    console.log("I'm inside use effect");

    axios
      .get(`/api/customer/get_previous`,{headers: {"x-access-token": localStorage.getItem("usertoken")}})
      .then(res => {
        setCuOrders(res.data);
        console.log("I'm inside axios to get previous customer orders", res.data);
      })
      .catch(err => {
        console.log("I'm error inside axios to get previous customer orders", err);
      });
  }, []);

  ///------------------------ Accept pending Orders ------------------------------------
//   const handleAccept = id => {
//     // useEffect(() => {
//     //   document.title = ` Drivers Orders`;
//     //   console.log("I'm inside use effect Accept");
//     const orderId = id;
//     axios
//       .post(
//         `/api/driver/accept_order`,{ _id: orderId },{headers: {"x-access-token": localStorage.getItem("usertoken")}
////
//       )
//       .then(res => {
//         setOrder(res.data);
//         console.log("accept the order", orderId);
//       })
//       .catch(err => {
//         console.log("error accept the order", err);
//       });
//   };
//---------------------------------------------------------------
  // const handleAccept = event => {
  //   set(event.target.value);
  // };

  // const handleAccept = event => {
  //   const orderId = orders._id;
  //   console.log(orderId)
  //   $.ajax({
  //     url: "/api/customer/send_order",
  //     headers: {
  //       "x-access-token": localStorage.getItem("usertoken")
  //     },
  //     type: "POST",
  //     data: { _id: orderId },
  //     datatype: "json",
  //     success: function() {
  //       console.log("The order has accepted");
  //       alert("accept the order  successfully");
  //     },
  //     error: function() {
  //       console.log("error in order");
  //       alert("Error in  accept sending");
  //     }
  //   });
  // };

  return (
    <div className={classes.root}>
      {CuOrders.map(CuOrder => (
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
                        OrderId: {CuOrder._id}
                      </p>
                    </Typography>
                  </div>
                  <div className={classes.orderDetails}>
                    {/* {orders.map(order => ( */}
                    <Typography variant="body2" gutterBottom>
                      <p>
                        {" "}
                        <LocationOnIcon className={classes.icons} /> Location :{" "}
                        {CuOrder.order_details}
                      </p>
                    </Typography>
                    {/* ))} */}
                  </div>

                  <div className={classes.orderDetails}>
                    {/* {orders.map(order => ( */}
                    <Typography variant="body2">
                      <p>
                        <ScheduleIcon className={classes.icons} /> Time:
                        {CuOrder.date}
                      </p>
                    </Typography>
                    {/* ))} */}
                  </div>

                  <div className={classes.orderDetails}>
                    {/* {orders.map(order => ( */}
                    <Typography variant="body2">
                      <p>
                        <BeenhereIcon className={classes.icons} /> state :{" "}
                        {CuOrder.state}
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
                >
                  <p>$ {CuOrders.price}</p>
                  {/* price */}
                </Typography>
              </Grid>
              {/* </div> */}

              
            </div>
          </Grid>
        </Paper>
      ))}
    </div>
  );
}
//
