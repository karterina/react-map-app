import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
  render() {

    // from https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
    const TheMap = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = {{ lat: 59.9342802, lng: 30.3350986 }}
        defaultZoom = { 12 }
      >
      </GoogleMap>
    ));

    return (
      <div>
        <TheMap
          containerElement={<div style={{height:'650px', width:'100%'}} />}
          mapElement={ <div style={{height:'100%'}} />}
        />
      </div>
    );
    }
};

export default Map;
