import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow } from 'react-google-maps';
import Markers from './Markers.js'


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
        {this.props.allLocations.map(location => (
          location.id === this.props.selectedLocation.id ?
            <Markers selectedLocation={this.props.selectedLocation} showBox={this.props.showBox} selectLocation={this.props.selectLocation} animation={1} location={location} key={location.id} /> : <Markers selectedLocation={this.props.selectedLocation} showBox={this.props.showBox} selectLocation={this.props.selectLocation} animation={2} location={location} key={location.id} />

        ))}

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
