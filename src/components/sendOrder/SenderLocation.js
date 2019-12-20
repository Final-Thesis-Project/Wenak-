import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Trial from "../Trial";
import Home from "../home";
import Typography from "@material-ui/core/Typography";
import "../../App.css";
import {
  Input,
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
export class SenderLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  continue = e => {
    const { values } = this.props;
    e.preventDefault();
    console.log("my values  :", values);
    this.props.nextStep();
  };
  handleClick(data) {
    const { values } = this.props;
    console.log("home Amall here ", data);

    this.setState({
      data: data
    });
    values.location_start_lng = this.state.data["newLng"];
    console.log("mayas", this.state.data["newLng"]);
    console.log("input values", values);
  }
  render() {
    // var location_start_lat = this.props.lang_start_lat;
    // var lang_start_lng=this.props.lang_start_lng;
    // const values = {location_start_lat,lang_start_lng} =  this.props;
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Header as="h2" size="medium" color="grey" textAlign="center">
          Assign your DropOff point
        </Header>
        <Home handleClick={this.handleClick.bind(this)} />
        ,
        <TextField
          className="contino"
          hintText="Enter The location_start_lng"
          floatingLabelText="location_start_lng"
          onChange={handleChange("location_start_lng")}
          defaultValue={values.location_start_lng}
          value={this.state.data["newLng"]}
        />
        <br />
        <br />
        <TextField
          className="contino"
          hintText="location_start_lat"
          floatingLabelText="location_start_lat"
          onChange={handleChange("location_start_lat")}
          defaultValue={values.location_start_lat}
          value={this.state.data["newLat"]}
        />
        <br />
        <Button
          className="accept"
          color="primary"
          variant="contained"
          onClick={this.continue}
        >
          Continue
        </Button>
      </React.Fragment>
    );
  }
}

export default SenderLocation;
