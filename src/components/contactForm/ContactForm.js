// Dependencies
import React, { Component } from "react";
// Externals
import Field from "./Field";
import Button from "./Button";
import NavBar from ".././Toolbar/Toolbar";
import "../../components/signUpForm/signUp.css";
import "../../App.css";
// /Users/rbk-9/Desktop/Project/Wenak-/src/App.css
class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: ""
    };
    // To ensure 'this' when calling 'this.updateField' refers to ContactForm and not Field, we do:
    this.updateField = this.updateField.bind(this);
  }

  // Field could be 'name', 'email', or 'message'
  // Value is whatever the user types into the input field.
  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div>
        <NavBar />
        {/* Name field */}
        <div className="signForm3">
          <Field
            label="Name"
            onChange={event => this.updateField("name", event.target.value)}
            value={this.state.name}
          />
          {/* Email field */}
          <Field
            label="Email"
            onChange={event => this.updateField("email", event.target.value)}
            value={this.state.email}
          />
          {/* Message textarea */}
          <Field
            label="Message"
            onChange={event => this.updateField("message", event.target.value)}
            /* This should be written like 'textarea' */
            textarea={true}
            value={this.state.message}
          />
          {/* Submit button */}
          {/* <div className="contact">
            <Button
              className=""
              email="thesis.project.rbk@gmail.com"
              formValues={this.state}
            /> */}
          <br />
          <br />
          <div>
            <Button
              className="signbut2"
              fluid
              size="large"
              type="submit"
              primary={true}
              email="thesis.project.rbk@gmail.com"
              formValues={this.state}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
