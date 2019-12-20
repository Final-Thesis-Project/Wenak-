import PropTypes from "prop-types";
import React, { Component } from "react";
import Slider from "../slider.jsx";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-router-dom";

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility
} from "semantic-ui-react";

import "../../App.css";

// Heads up!
// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.

const fadeImages = [logo2];

const getWidth = () => {
  const isSSR = typeof window === "undefined";
  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth;
};

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container size="massive">
    <Slider />
    {/* <Image  className="imgHome"  src='https://pbs.twimg.com/media/D8xwNH_W4AIgLyo.jpg'/> */}

    {/* <Header
      className="headerHome"
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em"
      }}
    /> */}
    {/* <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em"
      }}
    /> */}
    {/* <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button> */}
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive
        className="slidecolor "
        getWidth={getWidth}
        //  minWidth={Responsive.onlyTablet.minWidth}
      >
        {/* <Slider/> */}
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            className="headerHome"
            inverted
            textAlign="center"
            style={{ minHeight: 530, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container className="headerBar">
                {/* <Menu.Item as="a" active>
                  Home
                </Menu.Item> */}
                {/* <Menu.Item as="a">Work</Menu.Item> */}
                {/* <Menu.Item as="a">Company</Menu.Item> */}
                <Menu.Item id="backButton">Wenak</Menu.Item>
                <Menu.Item position="right">
                  {/* <Button as="a" inverted={!fixed}>
                    Log in
                  </Button> */}
                  <Link to="/LoginForm">
                    <Button className="backButton" animated>
                      <Button.Content visible>Go To Site</Button.Content>
                      <Button.Content hidden>
                        <Icon name="arrow right" />
                      </Button.Content>
                    </Button>
                  </Link>

                  {/* <Button
                    as="a"
                    inverted={!fixed}
                    primary={false}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Go To Site
                  </Button> */}
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

class MobileContainer extends Component {
  state = {};

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Work</Menu.Item>
          <Menu.Item as="a">Company</Menu.Item>
          <Menu.Item as="a">Careers</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  {/* <Button as="a" inverted>
                    Log in
                  </Button> */}
                  <Button as="a" inverted style={{ marginLeft: "0.5em" }}>
                    Go To Site
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    );
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

const HomepageLayout = () => (
  <ResponsiveContainer style={{ fontSize: "2em", textAlign: "left" }}>
    <Segment style={{ padding: "8em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "2em", textAlign: "left" }}>
              Wenak can be used to order anything in mind
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Wenak is a palestinian WebApp created to help solve a wide range
              problem that we have in palestine.
            </p>
            <br></br>
            <br></br>
            <Header as="h3" style={{ fontSize: "2em", textAlign: "left" }}>
              Advantages of Wenak
            </Header>
            <p style={{ fontSize: "1.33em" }}>
              Yes that's right, you thought it was the stuff of dreams, but even
              delivery apps can vary in advantages.<br></br>Our WebApp
              fascilitates a lot of advantages that we can't say it's avilable
              in Palestine. Some of these advantages are delivering anything
              that the customer desires whether it was a mobile charger or food
              or a gift etc..., in a fast but safe way because customer
              satisfaction is our top priority.
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Image rounded size="medium" src={fadeImages[0]} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign="center"></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "0em" }} vertical></Segment>

    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3} style={{ marginLeft: "200px" }}>
              <Header className="footer" inverted as="h4" content="About" />
              <List link inverted>

              
             
              <Link to="/About">
                <List.Item className="footer" as="a">
                  About
                </List.Item>
                </Link>
                <br/>
                

                <Link to="/ContactForm">
                <List.Item className="footer" as="a">
                  Contact Us
                </List.Item>
                </Link>
                {/* <List.Item as="a">Religious Ceremonies</List.Item> */}
                {/* <List.Item as="a">Gazebo Plans</List.Item> */}
              </List>
            </Grid.Column>
            <Grid.Column width={3} style={{ marginLeft: "320px" }}>
              <Header className="footer" inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item className="footer" as="a">
                  Food Delivery
                </List.Item>
                <List.Item className="footer" as="a">
                  Gadget Delivery
                </List.Item>
                <List.Item className="footer" as="a">
                  People Transportation
                </List.Item>
                <List.Item className="footer" as="a">
                  Gifts Delivery
                </List.Item>
              </List>
            </Grid.Column>
            {/* <Grid.Column width={7}> */}
            {/* <Header as="h4" inverted>
                Footer Header
              </Header> */}
            {/* <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p> */}
            {/* </Grid.Column> */}
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
);
export default HomepageLayout;
