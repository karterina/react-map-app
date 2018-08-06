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
        center = {{ lat: 59.9342802, lng: 30.3350986 }}
        defaultZoom = { 12 }
      >
        {this.props.allLocations.map(location =>
          (<Marker
              key={location.id}
              position={{lat: location.location.lat, lng: location.location.lng}}
            />
          ))}
      </GoogleMap>
    ));

    {/*const markers = this.props.allLocations.map(location =>
      <Marker key={location.id}
              position={{lat: this.location.location.lat, lng: this.location.location.lng}}
      />)*/}

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
