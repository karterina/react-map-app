import React, {Component} from 'react';
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
           <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
             Hello!
           </div>
         </div>
       </InfoBox>
    )
  }
}

export default LocationInfoBox;
