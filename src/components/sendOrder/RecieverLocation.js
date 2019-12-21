import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
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

import Home from "../home";
import "../../App.css";
export class RecieverLocation extends Component {
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
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <Header as="h2" size="medium" color="grey" textAlign="center">
          Assign your DropOff point
        </Header>
        <Home handleClick={this.handleClick.bind(this)} />
        <div className="lat">
          <TextField
            className="contino"
            hintText="Enter The location_End_lng"
            floatingLabelText="location_start_lng"
            onChange={handleChange("location_end_lng")}
            defaultValue={values.location_end_lng}
            value={this.state.data["newLng"]}
          />
          <TextField
            className="contino"
            hintText="Enter the location_End_lat"
            floatingLabelText="location_end_lat"
            onChange={handleChange("location_end_lat")}
            defaultValue={values.location_end_lat}
            value={this.state.data["newLat"]}
          />
        </div>
        <div>
          <Button
            className="accept"
            color="primary"
            variant="contained"
            onClick={this.continue}
          >
            Continue
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

export default RecieverLocation;
