//screen 1

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from 'material-ui/AppBar';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { Button } from "semantic-ui-react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "./signUp.css";
import NavBar from "../Toolbar/Toolbar";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <NavBar />
        <div className="signUp">
          <MuiThemeProvider>
            <div className="signForm">
              <React.Fragment>
                {/* <AppBar title="Enter User Details"/> */}

                <TextField
                  className=" inputSign"
                  hintText="Enter Your Mobile Number"
                  // floatingLabelText="Mobile"
                  onChange={handleChange("mobile")}
                  defaultValue={values.mobile}
                />
                <br />
                <TextField
                  className=" inputSign"
                  hintText="Enter Your Username"
                  // floatingLabelText="Name"
                  onChange={handleChange("name")}
                  defaultValue={values.name}
                />
                <br />
                <TextField
                  className=" inputSign"
                  // floatingLabelText="Password"
                  hintText="Enter password"
                  type="password"
                  onChange={handleChange("password")}
                  defaultValue={values.password}
                />
                <br />
                <div className="signUp">
                  <RadioGroup
                    className="radio"
                    aria-label="position"
                    name="position"
                    defaultValue={values.userType}
                    onChange={handleChange("userType")}
                    row
                  >
                    <FormControlLabel
                      value="Driver"
                      control={<Radio color="primary" />}
                      label="Driver"
                      labelPlacement="start"
                    />
                    <FormControlLabel
                      value="Customer"
                      control={<Radio color="primary" />}
                      label="Customer"
                      labelPlacement="start"
                    />
                  </RadioGroup>
                </div>
                <br />
                <Button
                  // className="butLog"
                  className="signbut"
                  fluid
                  size="large"
                  type="submit"
                  onClick={this.continue}
                >
                  Continue
                </Button>
              </React.Fragment>
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15,
    backgroundColor: "#aed581"
  }
};

export default FormUserDetails;
