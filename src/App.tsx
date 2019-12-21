import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar.jsx";
import Sidebar from "./components/Toolbar/Sidebar.jsx";
import Home_map2 from "./components/home_map2";
import Completion from "./components/Completion";
import "./app.scss";
import LoginForm from "./components/loginForm";
import UserForm from "./components/signUpForm/UserForm";
import CustomerOrd from "./components/CustomerOrd";
import CurrentOrders from "./components/CurrentOrders";
import Profile from "./components/Profile";
import DriverOrd from "./components/DriverOrd";
import NavBar from "./components/Toolbar/Toolbar.jsx";
import Toolbar2 from "./components/Toolbar/Toolbar2.jsx";
import NavbarUser from "./components/Toolbar/NavbarUser";
import { BrowserRouter, Route } from "react-router-dom";
import DrawerIcon from "./components/Toolbar/Drawer";
import Settings from "./components/Settings";
import About from "./components/About";
import ContactForm from "./components/contactForm/ContactForm";
import Trial from "./components/Trial";
import Splash from "./components/splash/Splash";
import Checkout from "./components/Checkout";
import SendOrder from "./components/sendOrder/SendOrder";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path={"/"} component={Splash} />
        <Route exact path={"/LoginForm"} component={LoginForm} />
        <Route exact path={"/UserForm"} component={UserForm} className="signUp" />
        <Route exact path={"/DrawerIcon"} component={DrawerIcon} />
        {/* <Route exact path={"/LoginForm"} component={LoginForm} /> */}
        {/* <Route exact path={"/Trial"} component={Trial} /> */}
        {/* <Route exact path={"/Home"} component={Home} /> */}
        <Route exact path={"/Home_map2"} component={Home_map2} />
        <Route exact path={"/CustomerOrd"} component={CustomerOrd} />
        <Route exact path={"/DriverOrd"} component={DriverOrd} />
        <Route exact path={"/CurrentOrders"} component={CurrentOrders} />
        <Route exact path={"/Settings"} component={Settings} />
        <Route exact path={"/About"} component={About} />
        <Route exact path={"/ContactForm"} component={ContactForm} />
        <Route exact path={"/Profile"} component={Profile} />
        <Route exact path={"/Toolbar2"} component={Toolbar2} />
        <Route exact path={"/SendOrder"} component={SendOrder} />
        <Route exact path={"/NavbarUser"} component={NavbarUser} />
        <Route exact path={"/Checkout"} component={Checkout} />
        {/* <Profile />
    <DriverOrders /> */}
      </div>
    </BrowserRouter>
  );
};
export default App;
