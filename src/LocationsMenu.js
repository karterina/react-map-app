import React, { Component } from 'react';

class LocationsMenu extends React.Component {
  render() {
    return (
      <nav>
        <div className='locationsMenu'>
          <div className='filterBarContainer'>
            <input type='text' placeholder='Filter locations' />
          </div>
          <div className='locationsContainer'>
            <ul>
              {this.props.allLocations.map(location => (
                <li key={location.id} onClick={(event) => this.props.selectLocation(location)}>
                  {location.name}, {location.location.address}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default LocationsMenu;
