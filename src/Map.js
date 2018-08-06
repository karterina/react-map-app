import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends Component {

  state = {
    markers: []
  }



  render() {

    // from https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
    const TheMap = withGoogleMap(props => (
      <GoogleMap
        center = {this.props.center}
        zoom = {this.props.zoom}
      >
        {this.props.allLocations.map((location) =>
          (location.id === this.props.selectedLocation.id ? <Marker animation={1} key={location.id} position={{lat: location.location.lat, lng: location.location.lng}}/> : <Marker key={location.id} position={{lat: location.location.lat, lng: location.location.lng}}/>))}
      </GoogleMap>
    ));

    return (
      <div>
        <TheMap
          containerElement={<div style={{height:'650px', width:'100%'}} />}
          mapElement={ <div style={{height:'100%'}} />}>

        </TheMap>

      </div>
    );
    }
};

export default Map;
