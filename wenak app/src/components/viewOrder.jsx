import React, { Component } from "react";
import Geocode from "react-geocode"
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
Geocode.setApiKey("AIzaSyBuqgFsDLy0e_a-OaI-MwzZI6HXfMwigvc");
Geocode.enableDebug();

class viewOrder extends Component{

    constructor(props) {
        super(props);
    
        this.state = {
          stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
            {latitude: 47.359423, longitude: -122.021071},
            {latitude: 47.2052192687988, longitude: -121.988426208496}
          ]
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
     
  //     for (var i = 0; i < this.state.stores.length; i++) {
  //         // split this array element into another array, delimited on the *
  //         var subluxian = $luxian[i].split("*");

  //         for (var j = 0; j < subluxian.length; j++) {
  //             // now split it into the lat and lng
  //             var coords = subluxian[j].split(",");
  //             // add the coords into the path
  //             path.push(new google.maps.LatLng(parseFloat(coords[1]), parseFloat(coords[0])));
  //         }
  //     }
  //     var line = new google.maps.Polyline({
  //         path: path,
  //         strokeColor: "#FF0000",
  //         strokeOpacity: 1.0,
  //         strokeWeight: 1,
  //         geodesic: true,
  //         map: map
  //     });
  // }

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