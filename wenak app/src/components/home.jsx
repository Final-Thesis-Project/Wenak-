//Screen 2


import React, { Component } from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import Logo2 from '../assets/logo2.png'
import Trial from "./Trial"
import  "../../src/App.css"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
class home extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  

  render() {
    return (
      <div>
         {/* <Image src={Logo2} size='small'/> */}
          <div   className="mapStyle">
          {/* <Header as='h2' size='medium' color='grey' textAlign='center'>
              Assign your Pickup point
            </Header> */}
          <Trial
        google={this.props.google}
        handleClick= {this.props.handleClick}
        center={{lat: 31.9478, lng: 35.2296}}
        height='450px'
        zoom={7}
      />
      </div>
      <div>
        {/* <Grid textAlign='center' style={{ height: '10vh' }} verticalAlign='bottom'>
               <Grid.Column style={{ maxWidth: 450 },{marginTop:30}}>

               <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>

          
          </Grid.Column>
        </Grid> */}
</div>


      
      </div>
    )
  }
}

export default home
 




