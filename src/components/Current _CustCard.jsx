// //Screen 5

// import React, { Component } from 'react'
// import { Form, Button, Rating, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, } from 'semantic-ui-react'
// import Logo from '../assets/logo.png'
// import $ from 'jquery';
// import './components.css'

// const style = {
//     h1: {
//         marginTop: '3em',
//     },
//     h2: {
//         margin: '4em 0em 2em',
//     },
//     h3: {
//         marginTop: '2em',
//         padding: '2em 0em',
//     },
//     last: {
//         marginBottom: '300px',
//     },
// }

// class CurrentOrders extends React.Component {
//     constructor(props){
//         super(props)
//     this.state = {
//         orderData: {}
//       };
//       this.retreivData = this.retreivData.bind(this);
//     }
//     retreivData() {
//       var that = this;
//       $.ajax({
//         type: "GET",
//         url: "/api/customer/get_current_order",
//         headers: {
//           //'x-access-token': localStorage.getItem('usertoken')
//           'x-access-token': localStorage.getItem("usertoken")
//         },
//         success: function(collection) {
//           console.log(collection);
//           that.setState({
//             orderData: collection[0]
//           });
//         },
//         error: function(request, status, error) {
//           console.log(error);
//         }
//       });
//     }
//     componentDidMount() {
//       this.retreivData();
//     }
//     // state = {}
//     handleRate = (e, { rating, maxRating }) =>
//         this.setState({ rating, maxRating })

//     render() {
//         return (

//             <div className="surrentOrder">

//                 <Header as='h3' content='Your Orders' style={style.h3} textAlign='center' />

//                 {/* <Button animated>
//                     <Button.Content visible>
//                         <Icon name='arrow left' />
//                     </Button.Content>
//                     <Button.Content hidden> Back </Button.Content>
//                 </Button>

//                 <Button.Group>
//                     <Button>Current Orders</Button>
//                     <Button>History</Button>
//                 </Button.Group>

//                 <Button color='yellow' size='large'>
//                     Cancel
//                 </Button> */}

//                 <Image src={Logo} size='small' textAlign='center'/>

//                 <Container fluid>
//           <Header as="h2">OrderID: {this.state.orderData.user} </Header>
//           <Header as="h2">
//             Location:{this.state.orderData.location_start_lat}
//           </Header>
//           <Header as="h2">Status:{this.state.orderData.state}</Header>
//           <Header as="h2">Date:{this.state.orderData.date}</Header>
//           <Header as="h2">
//             order_notes:{this.state.orderData.order_notes}
//           </Header>
//           <Header as="h2">
//             reciver_name:{this.state.orderData.reciver_name}
//           </Header>
//           <Header as="h2">Price:{this.state.orderData.user}</Header>
//           <Header as="h2">Rating:{this.state.orderData.rate}</Header>
//           <Rating maxRating={5} onRate={this.handleRate} />
//           <Image src={Logo} size="small" />
//         </Container>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 <br></br>

//                 <Form size='small'>
//               {/* <Segment stacked>
//               <Header as='h2'>Order Status:</Header>
//               <Header as='h2'>Preparing</Header>
//               <Header as='h2'>On The Way</Header>
//               <Header as='h2'>Completed Order</Header>
//               </Segment> */}
//             </Form>

//             </div>
//         )
//     }
// }

// export default CurrentOrders

//----------------------------- Ola----------------------------------
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
  const [CuOrders, setCuOrders] = React.useState([]);
  const [userId, setUserId] = React.useState("");
  const [reciver_name, setReciver_name] = useState([]);

  ///------------------------ Get pending Orders ------------------------------------
  useEffect(() => {
    document.title = ` Customers Orders`;
    console.log("I'm inside use effect");
    axios
      .get(`/api/customer/get_current_order`, {
        headers: { "x-access-token": localStorage.getItem("usertoken") }
      })
      .then(res => {
        setCuOrders(res.data);
        console.log(
          "I'm inside axios to get current_order customer orders",
          res.data
        );
      })
      .catch(err => {
        console.log(
          "I'm error inside axios to get current_order customer orders",
          err
        );
      });
  }, []);
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
                        <LocationOnIcon className={classes.icons} />Driver Name:
                        {CuOrder.driver_name}
}
                      </p>
                    </Typography>
                    {/* ))} */}
                  </div>
                  <div className={classes.orderDetails}>
                    {/* {orders.map(order => ( */}
                    <Typography variant="body2">
                      <p>
                        <ScheduleIcon className={classes.icons} /> Order Details:
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
                  <p>
                       {CuOrder.price}
                     $
                  </p>
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
