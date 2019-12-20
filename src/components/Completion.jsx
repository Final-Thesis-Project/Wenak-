//Screen 3
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from "react";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Item,
  Label,
  Menu,
  Segment,
  Step,
  Table
} from "semantic-ui-react";
import axios from "axios";
import { InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Trial from "./Trial";
import "../App.css";
import $ from "jquery";
import jwt_decode from "jwt-decode";
const style = {
  marginTop: "2em",
  padding: "2em 0em"
};

class Completion extends React.Component {
  constructor(props) {
    super(props);
    //   continue = e => {
    //     e.preventDefault();
    //     this.props.nextStep();
    //   };
    //   back = e => {
    //     e.preventDefault();
    //     this.props.prevStep();
    // };

    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSend() {
    // event.preventDefault();
    console.log("I'm inside send function");
    var token = localStorage.getItem("usertoken");
    var userIdFromToken;
    if (token) {
      const decoded = jwt_decode(token);
      userIdFromToken = decoded._id;
      console.log(userIdFromToken);
    }
    var data = {
      //user_id:userIdFromToken,
      reciverName: $("#reciverName").val(),
      //reciverName:this.state.recieverName,
      Items: $("#Items").val(),
      reciverPhone: $("#recieverPhone").val(),
      //details: this.state.note,
      location_start_lng: "50.6",
      location_start_lat: "906",
      location_end_lng: "8888",
      location_end_lat: "89",
      order_notes: $("#details").val(),
      rate: 0,
      state: "pending",
      date: Date.now(),
      price: 5
    };
    //event.preventDefault();
    console.log("hi I’m inside submit order");
    console.log(data);

    $.ajax({
      url: "/api/customer/send_order",
      headers: {
        "x-access-token": localStorage.getItem("usertoken")
      },
      type: "POST",
      data: data,
      dataType: "json",
      success: function() {
        console.log("The order has sent successfully");
        alert("The order sent successfully");
      },
      error: function() {
        console.log("error in order");
        alert("Error in order sending");
      }
    });
  }
  //     axios
  //     .post(
  //       `/api/customer/send_order`,
  //       {data: data},
  //       {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           "x-access-token": localStorage.getItem("usertoken")
  //         }
  //       }
  //     )
  //     .then(res => {
  //       console.log("The order has sent successfully");
  //       alert("The order sent successfully");
  //     })
  //     .catch(err => {
  //       console.log("error in order");
  //       alert("Error in order sending");
  //     });
  // };

  render() {
    return (
      <div>
        <Grid>
          <div className="inputDetails">
            <Header
              as="h3"
              content="Details"
              style={style.h3}
              textAlign="left"
            />

            <Grid.Column computer={3} mobile={6} tablet={9}>
              <Header
                className="header1"
                as="h3"
                content="Enter Your Order/Item:"
                textAlign="left"
              />
              <input
                id="Items"
                type="text"
                placeholder="Enter Your Order/Item"
              ></input>
              <Header
                className="header1"
                as="h3"
                content="Reciever's Name:"
                style={style.h3}
                textAlign="left"
              />
              <input
                id="reciverName"
                type="text"
                placeholder="Reciever's Name"
              ></input>

              <Header
                className="header1"
                as="h3"
                content="Reciever's Phone:"
                style={style.h3}
                textAlign="left"
              />
              <input
                id="reciverPhone"
                type="text"
                placeholder="Reciever's Phone"
              ></input>
              {/* <Header className="header1"
              as="h3"
              content="Assign The Reciever's Location"
              style={style.h3}
              textAlign="left"
            /> */}

              {/* <div className="trial">
              <Trial
                google={this.props.google}
                center={{ lat: 31.9478, lng: 35.2296 }}
                height='450px'
                width="900px"
                zoom={7}
              />
            </div> */}
            </Grid.Column>
          </div>
          <Grid.Column computer={9} mobile={6} tablet={3}>
            <Header
              as="h3"
              content="Add More Details (Optional):"
              style={style.h3}
              textAlign="left"
            />
            <input
              id="details"
              type="text"
              placeholder="Add More Details (Optional)"
            ></input>
          </Grid.Column>

          {/* <Button  onClick={this.handleSend.bind(this)} className="butSend" color='yellow' size='large'>
            Send Your Order
          </Button>  */}
          <Button variant="contained" onClick={this.continue}>
            Continue
          </Button>
          <Button variant="contained" onClick={this.back}>
            Back
          </Button>
        </Grid>
      </div>
    );
  }
}

export default Completion;

// handleRate = (e, { rating, maxRating }) =>
//   this.setState({ rating, maxRating })
