import React, {Component} from 'react';
import * as MapAPI from './MapAPI.js'
import InfoBox from "react-google-maps/lib/components/addons/InfoBox"

/* global google */


class LocationInfoBox extends Component {



  render() {
    return (
      <InfoBox
         defaultPosition={new google.maps.LatLng(this.props.location.location.lat, this.props.location.location.lng)}
         options={{ closeBoxURL: ``, enableEventPropagation: true }}
       >
         <div style={{ backgroundColor: `white`, padding: `12px` }}>
           <div style={{ fontSize: `16px`, fontColor: `black` }}>
             Name: {this.props.location.name}
             <hr/>
             Address: {this.props.location.location.address}
           </div>
         </div>
       </InfoBox>
    )
  }
}

export default LocationInfoBox;
