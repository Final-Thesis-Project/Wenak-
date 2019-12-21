import React, { Component } from "react";
import Geocode from "react-geocode"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
Geocode.setApiKey("AIzaSyBuqgFsDLy0e_a-OaI-MwzZI6HXfMwigvc");
Geocode.enableDebug();

class viewOrder extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          stores: [{lat: 31.5, lng: 34.46667},
                  {latitude:31.898043, longitude: 35.204269}]

        }
      }
    
    
      displayMarkers = () => {
        return this.state.stores.map((store, index) => {
          return <Marker key={index} id={index} position={{
           lat: store.latitude,
           lng: store.longitude
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }
    
      render() {
        let mapStyles = {
            width: '100%',
            height: '100%',
          }
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
              {this.displayMarkers()}
            </Map>
        );
      }

}
export default GoogleApiWrapper({
  apiKey:"AIzaSyBuqgFsDLy0e_a-OaI-MwzZI6HXfMwigvc"
})(viewOrder);
//  export default viewOrder;
// App = GoogleApiWrapper({
//   apiKey: "AIzaSyBuqgFsDLy0e_a-OaI-MwzZI6HXfMwigvc"

// })(App);

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);