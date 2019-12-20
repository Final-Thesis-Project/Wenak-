//screen 1

import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import $ from 'jquery';
import './signUp.css';
import NavBar from '../Toolbar/Toolbar';


export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    // Process form //
    let mobilenum = this.props.values.mobile;
    let password = this.props.values.password;
    let type = this.props.values.userType;
    let name = this.props.values.name;

    console.log("hi I'm from e function");
    console.log(mobilenum);
    console.log(type);
    console.log(name);

    $.ajax({
      type: "POST",
      url: "/api/auth/register",
      data: {
        mobilenum: mobilenum,
        password: password,
        type: type,
        name: name
      },
      datatype: "json",
      success: function() {
        console.log(this.data);
        console.log("sucess login the user");
        alert("Hello " + name);
        window.location = "./LoginForm";
      },
      error: function(request, status, error) {
        console.log(error);
        alert("Error in register or the user is exists");
        window.location = "./UserForm";
      }
    });

    this.props.nextStep();
  };

    render() {
        const { values: { mobile, password, userType,name } } = this.props;
        return (
 
            <MuiThemeProvider >
                            <NavBar />

                <React.Fragment>
                    {/* <AppBar title="Confirm User Data"/> */}
                    <List className="signUp">
                        <ListItem 
                            primaryText="Mobile Number"
                            secondaryText={ mobile }
                        />
                         <ListItem 
                            primaryText="Name"
                            secondaryText={ name }
                        />
                        <ListItem 
                            primaryText="Password"
                            secondaryText={ password }
                        />
                        <ListItem 
                            primaryText="User Type"
                            secondaryText={ userType }
                        />
                        
                    </List>
                    <br/>
                    <div className="signUp">
                     <RaisedButton 
                        label="Confirm & Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                        className="signUp"
                    />
                    <RaisedButton 
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
                        className="signUp"
                    />   
                    </div>
                    
                </React.Fragment>
            </MuiThemeProvider>
            
        )
    }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;
