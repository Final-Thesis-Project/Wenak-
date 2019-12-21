import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Radio,
  Segment,
  Button
} from "semantic-ui-react";
import NavBar from "./Toolbar/Toolbar";
import "../App.css";

const languageOptions = [
  { key: "Arabic", text: "Arabic", value: "Arabic" },
  { key: "English", text: "English", value: "English" }
];

const LanguageDropdown = () => (
  <Dropdown
    button
    className="icon"
    floating
    labeled
    icon="world"
    options={languageOptions}
    search
    text="Select Language"
    style={{
      margin: 15,
      backgroundColor: "#aed581",
      fontFamily: "cairo",
      color: "white"
    }}
  />
);
// export default LanguageDropdown

const NotificationsToggle = () => (
  <Radio style={{ margin: 15 }} toggle label="On" />
);

// export default NotificationsToggle

const Settings = () => (
  <div>
    <NavBar />

    <Container className="signForm3" textAlign="center">
      <b>Settings</b>
      <Divider />
      {/* language */}
      Language:
      <LanguageDropdown className="greenSetting" />
      <Divider hidden />
      {/* notifications */}
      Notifications:
      <NotificationsToggle />
      <Divider hidden />
      {/* logout */}
      <Button className="greenSetting">Log out</Button>
      <Divider hidden />
    </Container>
  </div>
);

export default Settings;
