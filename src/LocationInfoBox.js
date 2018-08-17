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
         <div tabIndex='0' aria-label='information about location' style={{ backgroundColor: `white`, padding: `12px`, minWidth: `200px`, maxWidth: `400px`, border: `3px solid black` }}>
            <div style={{ fontSize: `16px`, fontColor: `black` }}>
              <span className='info-name info-header'>Name:</span> {this.props.location.name}
              <hr/>
              <span className='info-address info-header'>Address:</span> {this.props.location.location.address ? this.props.location.location.address : 'not available' }}
              <hr/>
              <span className='info-phone info-header'>Phone number:</span> {this.props.locationsInfo.contact && this.props.locationsInfo.contact.formattedPhone ? this.props.locationsInfo.contact.formattedPhone : 'not available'}
              <hr/>
              <span className='info-website info-header'>Website:</span> {this.props.locationsInfo.url ? <a target='_blank' href={this.props.locationsInfo.url}>{this.props.location.name}</a> : 'not available'}}
            </div>
         </div>
       </InfoBox>
    )
  }
}

export default LocationInfoBox;
