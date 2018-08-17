import React, { Component } from 'react';

class LocationsMenu extends React.Component {

  render() {
    return (
      <nav>
          <div className='locationsMenu'>
            <div className='filterBarContainer'>
              <label id='select-label'>Choose a category:
                <select name='select a category' onChange={event => (this.props.handleCategoryFilter(event))} id='museum-category' value={this.props.category}>
                  <option>None</option>
                  <option>Art Museum</option>
                  <option>Art Gallery</option>
                  <option>Arcade</option>
                  <option>Boutique</option>
                  <option>Candy Store</option>
                  <option>Cruise</option>
                  <option>Coffee Shop</option>
                  <option>College History Building</option>
                  <option>Gift Shop</option>
                  <option>History Museum</option>
                  <option>Internet Cafe</option>
                  <option>Museum</option>
                </select>
              </label>
              <button onClick={event => (this.props.resetMap())} id='reset-button' aria-label='reset map to default'>Reset</button>
            </div>
            <hr/>
            <div className='locationsContainer'>
              {this.props.allLocations !== undefined ? <ul aria-label='list of locations'>
                                                        {this.props.filteredLocations.map(location => (
                                                            <li id={`a${location.id}`}
                                                                key={location.id}
                                                                className={location.categories.id}
                                                                onClick={(event) => this.props.selectLocation(location)}
                                                                onKeyPress={(event) => this.props.selectLocation(location)}
                                                                tabIndex='0'
                                                            >
                                                              {location.name}, {location.location.address}
                                                            </li>))}
                                                      </ul> : (<p className='error'>Sorry, something went wrong while fetching locations. Check console for more info or try again later.</p>)}

            </div>
          </div>
        </nav>
    )

  }
}

export default LocationsMenu;
