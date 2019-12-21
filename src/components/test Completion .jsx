//Screen 3
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import React, { Component } from "react";
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
import { InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import Trial from "./Trial";
import  "../../src/App.css";
import $ from 'jquery';
const style = {
  h1: {
    marginTop: "3em"
  },
  h2: {
    margin: "4em 0em 2em"
  },
  h3: {
    marginTop: "2em",
    padding: "2em 0em"
  },
  last: {
    marginBottom: "300px"
  }
};


class Completion extends React.Component {
constructor(props){
  super(props)
  this.state = {
    order_details:"",
    location_start_lng:35.5,
    location_start_lat: 30.55,
    location_end_lat: 98.33,
    location_end_lng:88.32,
    reciver_name: '',
    recieverPhone:'',
    order_notes:'',
    rate:0,
    state:"pending",
    date: Date.now()

}
}
  
 handleSend(){
  // event.preventDefault();
  var order_details = this.state.order_details;
  var location_start_lng= this.state.location_start_lng;
  var location_start_lat= this.state.location_start_lat;
  var location_end_lng= this.state.location_end_lng;
  var location_end_lat= this.state.location_end_lat;
  var reciver_name= this.state.reciver_name;
  var recieverPhone= this.state.recieverPhone;
  var order_notes= this.state.order_notes;
  var rate= this.state.rate;
  var state= this.state.state;
  var date=this.state.date;
  var that = this;
   console.log("Hi I'm inside send orders")
 $.ajax({
   type: "POST",
   url: "/api/customer/send_order",
   headers: 
   {"x-access-token": localStorage.getItem("usertoken")},
   data:{
    order_details:order_details,
    location_start_lng:location_start_lng,
    location_start_lat: location_start_lat,
    location_end_lat: location_end_lat,
    location_end_lng:location_end_lng,
    reciver_name:reciver_name,
    recieverPhone:recieverPhone,
    order_notes:order_notes,
    rate:rate,
    state:state,
    date:date
   }, 
   datatype: "json",
   success:function(res){
       console.log("sucess send the order");
     },
   error: function(request, status, error) {
         console.log("error in mobilenumor password");
         alert("Error in send ordr")}
       });
     }
    

  render() {
    return (
      <div >
  
        <Grid >
        <div className="inputDetails">
        <Header
          as="h3"
          content="Details"
          style={style.h3}
          textAlign="left"
        />

          <Grid.Column computer={3} mobile={6} tablet={9}>
            <Header className="header1"
              as="h3"
              content="Enter Your Order/Item:"
              textAlign="left"
            />
            <input   type="text" placeholder="Enter Your Order/Item">{this.state.order_details}</input>
            <Header className="header1"
              as="h3"
              content="Reciever's Name:"
              style={style.h3}
              textAlign="left" 
            />
            <input   type="text" placeholder="Reciever's Name">{this.state.reciver_name}</input>
         
            <Header className="header1" 
              as="h3"
              content="Reciever's Phone:"
              style={style.h3}
              textAlign="left"
            />
            <input  type="text" placeholder="Reciever's Phone">{this.state.recieverPhone}</input>
            <Header className="header1"
              as="h3"
              content="Assign The Reciever's Location"
              style={style.h3}
              textAlign="left"
            />
          
          
            <div className="trial">
              <Trial
                google={this.props.google}
                center={{ lat: 31.9478, lng: 35.2296 }}
                height='450px'
                width="900px"
                zoom={7}
              />
            </div>
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
              type="text"
              placeholder="Add More Details (Optional)"
            >{this.state.order_notes}</input>
          </Grid.Column>

          <div className="butSend">

     
<Button  onClick={this.handleSend.bind(this)} className="butSend" color='yellow' size='large'>
            Send Your Order
          </Button> 
          </div>
        </Grid>
      </div>
    );
  }
}

export default Completion;

// handleRate = (e, { rating, maxRating }) =>
//   this.setState({ rating, maxRating })
