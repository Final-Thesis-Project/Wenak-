import React, { Component } from "react";
import {
  Input,
  Form,
  Button,
  Rating,
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
import ProfilePicture from "../assets/ProfilePicture.png";
import Toolbar2 from "./Toolbar/Toolbar2";
import "../components/signUpForm/signUp.css";
import "../App.css";

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

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: "",
      email: "",
      password: ""
    };
    //bind methods here
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //methods
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    //  console.log("mobile ",this.state.mobile, 'pw', this.state.password)
    //Requests go here
  }

  // state = {}
  handleRate = (e, { rating, maxRating }) =>
    this.setState({ rating, maxRating });

  render() {
    return (
      <div>
        <Toolbar2 />
        <div className="signForm3">
          <Header as="h3" content="Profile" style={style.h3} textAlign="left" />
          <Image src="ProfilePicture" size="medium" circular />

          <Button animated>
            <Button.Content visible>
              <Icon name="arrow left" />
            </Button.Content>
            <Button.Content hidden> Back </Button.Content>
          </Button>

          <Button icon labelPosition="right">
            Change Profile Picture
            <Icon name="camera" />
          </Button>

          <Header as="h2">Wallet</Header>
          <Header as="h2">Points</Header>
          <Header as="h2">Credit</Header>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <Header
            as="h3"
            content="Name is written here"
            style={style.h3}
            textAlign="left"
          />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

          <Input
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Name"
          />
          <Input
            name="phoneNumber"
            onChange={this.handleChange}
            value={this.state.phoneNumber}
            placeholder="Phone Number"
          />
          <Input
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            placeholder="email"
          />
          <Input
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            placeholder="Password"
          />
          <br></br>

          <Button onClick={this.handleSubmit} color="yellow" size="large">
            Update
          </Button>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }
}

export default Profile;
