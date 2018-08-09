import React, { Component } from "react";
import { Marker } from "react-google-maps"

class Markers extends Component {
  render() {
    return (
      <Marker
          onClick={(event) => this.props.selectLocation(this.props.location)}
          animation={this.props.animation}
          id={this.props.location.id}
          title={this.props.location.name}
          position={{lat: this.props.location.location.lat, lng: this.props.location.location.lng}}
      />
    )
  }
}

export default Markers;
