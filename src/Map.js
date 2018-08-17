import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, InfoWindow } from 'react-google-maps';
import Markers from './Markers.js'


class Map extends Component {


  render() {

    // from https://medium.com/@yelstin.fernandes/render-a-map-component-using-react-google-maps-5f7fb3e418bb
    const TheMap = withGoogleMap(props => (
      <GoogleMap
        center = {this.props.center}
        zoom = {this.props.zoom}
      >
        {this.props.gotLocations ?
          this.props.filteredLocations.map(location => (
            location.id === this.props.selectedLocation.id ?
              <Markers locationsInfo={this.props.locationsInfo} selectedLocation={this.props.selectedLocation} selectLocation={this.props.selectLocation} animation={1} location={location} key={location.id} /> : <Markers locationsInfo={this.props.locationsInfo} selectedLocation={this.props.selectedLocation} selectLocation={this.props.selectLocation} animation={2} location={location} key={location.id} />
          )) : null }


      </GoogleMap>
    ));


    return (

      <div>
        <TheMap
          containerElement={<div className='map-container' style={{height:'90vh', width:'100%'}} />}
          mapElement={ <div style={{height:'100%'}} />}>
        </TheMap>

      </div>
    );
    }
};

export default Map;
