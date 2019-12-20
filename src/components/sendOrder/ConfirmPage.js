import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
export class ConfirmPage extends Component {


  degreesToRadians(degrees){
    return degrees * Math.PI / 180;
  }

 getDistanceBetweenPoints(lat1, lng1, lat2, lng2){
    // The radius of the planet earth in meters
    let R = 6378137;
    let dLat =this.degreesToRadians(lat2 - lat1);
    let dLong =this.degreesToRadians(lng2 - lng1);
    let a = Math.sin(dLat / 2)
            *
            Math.sin(dLat / 2) 
            +
            Math.cos(this.degreesToRadians(lat1)) 
            * 
            Math.cos(this.degreesToRadians(lat1)) 
            *
            Math.sin(dLong / 2) 
            * 
            Math.sin(dLong / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let distance = R * c;
    return distance;
}
 
  continue = e => {
     const { values } = this.props;
    console.log("finale values : ", values)
    e.preventDefault();
    var lat1=this.props.values.location_start_lat
    var lang1=this.props.values.location_start_lng;

    var lat2=this.props.values.location_end_lat
    var lang2=this.props.values.location_end_lng;
       

    var distanceInMeters =this.getDistanceBetweenPoints(lat1,lang1,lat2,lang2);
    var price = distanceInMeters *  0.001 * 3;
    // PROCESS FORM //
    var data = {
      reciverName:this.props.values.recieverName,
       Items: this.props.values.item,
       reciverPhone :this.props.values.recieverPhone,
      location_start_lng: this.props.values.location_start_lng,
      location_start_lat:this.props.values.location_start_lat,
      location_end_lng: this.props.values.location_end_lng,
      location_end_lat:this.props.values.location_end_lat,
      order_notes:this.props.values.note,
      rate: 0,
      state:"pending",
      date: Date.now(),
      price:price
    };
    //event.preventDefault();
    console.log("hi I’m inside submit order");
    console.log(data);

    $.ajax({
      url: "/api/customer/send_order",
      headers: {
        'x-access-token': localStorage.getItem("usertoken")
      },
      type: "POST",
      data: data,
      dataType:"json",
      success: function() {
        console.log("The order has sent successfully");
        alert("The order sent successfully");
      },
      error: function() {
        console.log("error in order");
        alert("Error in order sending");
      }
    });
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {item,location_start_lng,location_start_lat,location_end_lng,location_end_lat,recieverName,recieverPhone,state,note,price}
    } = this.props;
 
    return (
      <MuiThemeProvider >
        <React.Fragment>
          <Dialog
            open="true"
            fullWidth="true"
            maxWidth='sm'
          >
          <AppBar title="Confirm User Data" />
          <List>
            <ListItem>
              <ListItemText primary="Item" secondary={item} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="PickupLng" secondary={location_start_lng} /> 
              <ListItemText primary="PickupLat" secondary={location_start_lat} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="DropOffLng" secondary={location_end_lng} /> 
              <ListItemText primary="DropOffLat" secondary={location_end_lat} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Receiver Name" secondary={recieverName} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Receiver Phone" secondary={recieverPhone} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Order status" secondary={state} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="Additional details" secondary={note} /> 
            </ListItem>
            <ListItem>
              <ListItemText primary="price" secondary={this.getDistanceBetweenPoints(location_start_lat,location_start_lng,location_end_lat,location_end_lng)*  0.001 * 3} /> 
            </ListItem>
          </List>
          <br />
        
          <Button
            color="secondary"
            variant="contained"
            onClick={this.back}
          >Back</Button>

          <Button
            color="primary"
            variant="contained"
            onClick={this.continue}
          >Confirm & Continue</Button>
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default ConfirmPage;
