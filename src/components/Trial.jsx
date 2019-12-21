
import React, { Component } from 'react'
import { GoogleMap, withScriptjs, withGoogleMap, InfoWindow, Marker } from 'react-google-maps';
import Geocode from "react-geocode"
import Autocomplete from "react-google-autocomplete"
import  "../../src/App.css"
import $ from 'jquery';
import { Button, Input, Container, Grid, Header, Icon, Image, Item, Label, Menu, Segment, Step, Table, } from 'semantic-ui-react';
Geocode.setApiKey("AIzaSyBuqgFsDLy0e_a-OaI-MwzZI6HXfMwigvc");
Geocode.enableDebug();

class Trial extends Component{

	constructor( props ){
		super( props );
		this.state = {
			address: '',
			city: '',
			area: '',
			state: '',
			mapPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			},
			markerPosition: {
				lat: this.props.center.lat,
				lng: this.props.center.lng
			}

		}
	}
	/**
	 * Get the current address from the default map position and set those values in the state
	 */
	componentDidMount() {
		Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = this.getCity( addressArray ),
				      area = this.getArea( addressArray ),
				      state = this.getState( addressArray );

				console.log( 'city', city, area, state );

				this.setState( {
					address: ( address ) ? address : '',
					area: ( area ) ? area : '',
					city: ( city ) ? city : '',
					state: ( state ) ? state : '',
				} )
			},
			error => {
				console.error( error );
			}
		);
	};
	/**
	 * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
	 *
	 * @param nextProps
	 * @param nextState
	 * @return {boolean}
	 */
	shouldComponentUpdate( nextProps, nextState ){
		if (
			this.state.markerPosition.lat !== this.props.center.lat ||
			this.state.address !== nextState.address ||
			this.state.city !== nextState.city ||
			this.state.area !== nextState.area ||
			this.state.state !== nextState.state
		) {
			return true
		} else if ( this.props.center.lat === nextProps.center.lat ){
			return false
		}
	}
	/**
	 * Get the city and set the city input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getCity = ( addressArray ) => {
		let city = '';
		for( let i = 0; i < addressArray.length; i++ ) {
			if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
				city = addressArray[ i ].long_name;
				return city;
			}
		}
	};
	/**
	 * Get the area and set the area input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getArea = ( addressArray ) => {
		let area = '';
		for( let i = 0; i < addressArray.length; i++ ) {
			if ( addressArray[ i ].types[0]  ) {
				for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
					if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
						area = addressArray[ i ].long_name;
						return area;
					}
				}
			}
		}
	};
	/**
	 * Get the address and set the address input value to the one selected
	 *
	 * @param addressArray
	 * @return {string}
	 */
	getState = ( addressArray ) => {
		let state = '';
		for( let i = 0; i < addressArray.length; i++ ) {
			for( let i = 0; i < addressArray.length; i++ ) {
				if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
					state = addressArray[ i ].long_name;
					return state;
				}
			}
		}
	};
	/**
	 * And function for city,state and address input
	 * @param event
	 */
	onChange = ( event ) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	/**
	 * This Event triggers when the marker window is closed
	 *
	 * @param event
	 */
	onInfoWindowClose = ( event ) => {

	};

	/**
	 * When the marker is dragged you get the lat and long using the functions available from event object.
	 * Use geocode to get the address, city, area and state from the lat and lng positions.
	 * And then set those values in the state.
	 *
	 * @param event
	 */
	onMarkerDragEnd = ( event ) => {
		let newLat = event.latLng.lat(),
			newLng = event.latLng.lng();
			this.props.handleClick({newLat,newLng})

		Geocode.fromLatLng( newLat , newLng ).then(
			response => {
				const address = response.results[0].formatted_address,
				      addressArray =  response.results[0].address_components,
				      city = this.getCity( addressArray ),
				      area = this.getArea( addressArray ),
				      state = this.getState( addressArray );
				this.setState( {
					address: ( address ) ? address : '',
					area: ( area ) ? area : '',
					city: ( city ) ? city : '',
					state: ( state ) ? state : '',
					markerPosition: {
						lat: newLat,
						lng: newLng
					},
					mapPosition: {
						lat: newLat,
						lng: newLng
					},
				} )
			},
			error => {
				console.error(error);
			}
		);
        var data = {
			location_start_lng: newLng,
			location_start_lat:newLat,
			location_end_lng: "8888",
			location_end_lat:"89",
			order_notes:"rr",
			rate: 0,
			state:"pending",
			date: Date.now(),
			price:5
		  };
		  //event.preventDefault();
		//   console.log("hi I’m inside submit order");
		//   console.log(data);
	  
		//   $.ajax({
		// 	url: "/api/customer/send_latlng",
		// 	headers: {
		// 	  'x-access-token': localStorage.getItem("usertoken")
		// 	},
		// 	type: "POST",
		// 	data: data,
		// 	dataType:"json",
		// 	success: function() {
		// 	  console.log("The order has sent successfully");
		// 	  alert("The order sent successfully");
		// 	},
		// 	error: function() {
		// 	  console.log("error in order");
		// 	  alert("Error in order sending");
		// 	}
		//   });

	};

	/**
	 * When the user types an address in the search box
	 * @param place
	 */
	onPlaceSelected = ( place ) => {
		console.log( 'plc', place );
		const address = place.formatted_address,
		      addressArray =  place.address_components,
		      city = this.getCity( addressArray ),
		      area = this.getArea( addressArray ),
		      state = this.getState( addressArray ),
		      latValue = place.geometry.location.lat(),
		      lngValue = place.geometry.location.lng();
		// Set these values in the state.
		this.setState({
			address: ( address ) ? address : '',
			area: ( area ) ? area : '',
			city: ( city ) ? city : '',
			state: ( state ) ? state : '',
			markerPosition: {
				lat: latValue,
				lng: lngValue
			},
			mapPosition: {
				lat: latValue,
				lng: lngValue
			},
		})
	};


	render(){
		const AsyncMap = withScriptjs(
			withGoogleMap(
				props => (
          
					<GoogleMap className="mapStyle"  google={ this.props.google }
					defaultZoom={ this.props.zoom }
					defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
					>
						{/* InfoWindow on top of marker */}
						<InfoWindow
							onClose={this.onInfoWindowClose}
							position={{ lat: ( this.state.markerPosition.lat + 0.0018 ), lng: this.state.markerPosition.lng }}
						>
							<div>
								<span style={{ padding: 0, margin: 0 }}>{ this.state.address }</span>
							</div>
						</InfoWindow>
						{/*Marker*/}
						<Marker google={this.props.google}
						        name={'Dolores park'}
						        draggable={true}
						        onDragEnd={ this.onMarkerDragEnd }
						        position={{ lat: this.state.markerPosition.lat, lng: this.state.markerPosition.lng }}
						/>
						<Marker />
						{/* For Auto complete Search Box */}
						<Autocomplete className="mapStyle"
							style={{
								width: '100%',
								height: '40px',
								paddingLeft: '16px',
								marginTop: '2px',
                marginBottom: '500px',
                
							}}
							onPlaceSelected={ this.onPlaceSelected }
							types={['(regions)']}
						/>
					</GoogleMap>
				)
			)
		);
		let map;
		if( this.props.center.lat !== undefined ) {
			map = <div>
				<div>
     					<div className="form-group"   className="formDetails" >
						<label  className="maplable1" htmlFor="">City</label>
                        <Input  className="mapInput" name="city" onChange={ this.onChange } readOnly="readOnly" value={ this.state.city }placeholder='City' />
                		<label  className="maplable1" htmlFor="">Area</label>
                        <Input  className="mapInput" name="area" onChange={ this.onChange } readOnly="readOnly" value={ this.state.area } placeholder='Area' />
                  		<label  className="maplable1" htmlFor="">State</label>
                        <Input className="mapInput"  name="state" onChange={ this.onChange } readOnly="readOnly" value={ this.state.state } placeholder='State' />
                		<label  className="maplable1" htmlFor="">Address</label>
                        <Input  className="mapInput" name="address" onChange={ this.onChange } readOnly="readOnly" value={ this.state.address } placeholder='Address' />
                    </div>
                    
				</div>

				<AsyncMap className="mapStyle"
					googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBuqgFsDLy0e_a-OaI-MwzZI6HXfMwigvc&libraries=places"
					loadingElement={
						<div style={{ height: `100%` }} />
					}
					containerElement={
						<div style={{ height: this.props.height }} />
					}
					mapElement={
						<div style={{ height: `100%` }} />
					}
				/>
			</div>
			
		} else {
			map = <div  className="mapStyle"  style={{height: this.props.height}} />
		}	
		return( map )
		
	}
}
export default Trial