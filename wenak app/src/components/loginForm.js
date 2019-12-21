import React, { Component } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Flag,
  Dropdown
} from "semantic-ui-react";
import Logo2 from "../assets/logo2.png";
import $ from "jquery";
import { Link } from "react-router-dom";
import NavBar from "./Toolbar/Toolbar";
import "../App.css";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: "",
      password: "",
      type: ""
    };
    //this.getUserType();
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  //update the user
  updateState(data) {
    this.setState({
      type: data
    });
  }

  //login user
  login() {
    // event.preventDefault();
    var mobilenum = this.state.mobile;
    var password = this.state.password;
    var that = this;
    console.log("Hi I'm inside login post");
    $.ajax({
      type: "POST",
      url: "/api/auth/login",
      data: {
        mobilenum: mobilenum,
        password: password
      },
      datatype: "json",
      success: function(res) {
        console.log("sucess login the user");
        console.log("Hi I'm inside login post");
        alert("Hello " + mobilenum);
        var type = res.type;
        var token = localStorage.setItem("usertoken", res.token);
        localStorage.setItem("usertoken", res.token);
        console.log(localStorage.getItem("usertoken"));
        console.log(type);
        if (type === "Customer") {
          window.location = "/NavbarUser";
        } else {
          window.location = "/DriverOrd";
        }
      },
      error: function(request, status, error) {
        console.log("error in mobile number or password");
        alert("Error in mobilenum or password");
      }
    });
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Grid
          textAlign="center"
          style={{ height: "100vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" className="loginTitle" textAlign="center">
              <Image src={Logo2} /> <div>Login to your account </div>
            </Header>
            <Form size="large">
              {/* <Form size='large' onSubmit={this.handleSubmit}> */}
              <Segment stacked>
                <Form.Input
                  name="mobile"
                  fluid
                  icon="phone"
                  iconPosition="left"
                  placeholder="+970"
                  // type='number'
                  value={this.state.mobile}
                  onChange={this.handleChange}
                />
                <Form.Input
                  name="password"
                  className="input"
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <Button
                  className="butLog"
                  fluid
                  size="large"
                  type="submit"
                  onClick={this.login}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message className="gray">
              <Link className="white" to={"/UserForm"}>
                Sign Up
              </Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default LoginForm;
