//screen 1

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import NavBar from "../Toolbar/Toolbar";

export class Success extends Component {
  continue = e => {
    e.preventDefault();
    // Process form //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <NavBar />
        <React.Fragment>
          {/* <AppBar title="Registeration was Successful!"/> */}
          <h1 className="signUp1">Thank You For Your Submission</h1>
          <p className="Radio">
            You will get an email with further instructions
          </p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Success;
