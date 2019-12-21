import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from 'material-ui/AppBar';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
//
import "../../App.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export class OrderDetails extends Component {
  continue = e => {
    const { values } = this.props;
    console.log("my values in order   :", values);
    e.preventDefault();
    this.props.nextStep();
  };
  previous = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <div className="signUp">
          <MuiThemeProvider>
            <React.Fragment>
              {/* <AppBar title="Enter User Details"/> */}
              <TextField
                hintText="Enter Your Item"
                floatingLabelText="Item"
                onChange={handleChange("item")}
                defaultValue={values.item}
              />
              <br />
              <TextField
                hintText="Enter The Reciever Name"
                floatingLabelText="Reciever name"
                onChange={handleChange("recieverName")}
                defaultValue={values.recieverName}
              />
              <br />
              <TextField
                hintText="Enter The Reciever Phone"
                floatingLabelText="Reciever Phone"
                onChange={handleChange("recieverPhone")}
                defaultValue={values.recieverPhone}
              />
              <br />
              <br />
              <TextField
                hintText="Additional Notes"
                floatingLabelText="Notes"
                onChange={handleChange("note")}
                defaultValue={values.note}
              />
              <br />
              {/* <div className="signUp">
                     <RadioGroup className="radio" aria-label="position" name="position" defaultValue={values.userType} onChange={handleChange('userType')} row>                    
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
                    
                    <br/> */}

              <RaisedButton
                label="Previous"
                className="accept"
                onClick={this.previous}
              />
              <RaisedButton
                className="accept"
                label="Continue"
                onClick={this.continue}
              />
            </React.Fragment>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default OrderDetails;
