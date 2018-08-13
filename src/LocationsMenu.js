import React, { Component } from 'react';

class LocationsMenu extends React.Component {


  render() {
    return (
      <nav>
        <div className='locationsMenu'>
          <div className='filterBarContainer'>
            <label id='select-label'>Choose a category:
              <select onChange={event => (this.props.handleCategoryFilter(event))} id='museum-category'>
                <option>None</option>
                <option>Art Museum</option>
                <option>History Museum</option>
                <option>Science Museum</option>
              </select>
            </label>
          </div>
          <div className='locationsContainer'>
            <ul>
              {this.props.filteredLocations.map(location => (
                <li id={`a${location.id}`}
                    key={location.id}
                    className={location.categories.id}
                    onClick={(event) => this.props.selectLocation(location)}

                >
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
