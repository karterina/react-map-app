import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js';
import LocationsMenu from './LocationsMenu.js'
import * as MapAPI from './MapAPI.js'
import Markers from './Markers.js'


window.gm_authFailure = function() {
  alert('Oops, authentification filed. Check your Google Maps API key or try later!')
};

class App extends React.Component {

  state = {
    allLocations: [],
    selectedLocation: [],
    center: {lat: 59.9342802, lng: 30.3350986},
    zoom: 12,
    locationsInfo: [],
    category: 'None',
    filteredLocations: [],
    gotLocations: false,
    gotLocationsInfo: false
  }


  componentDidMount() {
    // get initial locations when component mounts
    MapAPI.getAllLocations().then((locations) => {
      this.setState({
        gotLocations: true,
        allLocations: locations,
        filteredLocations: locations
      })
    }).catch((error) => {
      // alert the user if something goes wrong
      console.log(error)
    });


  }


  // reset map to default when the reset button is pressed
  resetMap = () => {
    this.setState({
      selectedLocation: [],
      center: {lat: 59.9342802, lng: 30.3350986},
      zoom: 12,
      category: 'None',
      filteredLocations: this.state.allLocations
    });
  }

  // filter locations based on the chosen category
  filterLocations = () => {
    let filtered;
    if (this.state.category !== 'None') {
      filtered = this.state.allLocations.filter(location => (
        location.categories[0].name === this.state.category
      ))
    } else {
      filtered = this.state.allLocations;
    }
    this.setState({filteredLocations: filtered})
  }

  // updating category state on select
  changeCategory = (event) => {
    this.setState({category: event.target.value})
  }

  // call previous two functions to pass to onChange event of the select
  handleCategoryFilter = (event) => {
    this.changeCategory(event);
    setTimeout(() => (this.filterLocations()), 10)
  }

  // show/hide locatons menu
  toggleMenu = () => {
    let navContainer = document.querySelector('.locationsMenu');
    navContainer.classList.toggle('show')
  }

  // get information about a location using forsquare api
  getLocationInfo = (location) => {
    MapAPI.getLocationsInfo(location).then(info => {
      this.setState({
        gotLocationsInfo: true,
        locationsInfo: info
      })
    }).catch(error => {
      console.log('Something went wrong while fetching locations information', error);
    })
  }

  // selecting a location
  selectLocation = (location) => {
      this.setState({selectedLocation: location});
      this.setState({center: {lat: location.location.lat, lng: location.location.lng}});
      this.setState({zoom: 15});
      this.setState({showBox: true});
      this.getLocationInfo(location);

  }



  render() {

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={(event) => this.toggleMenu()} className='toggle-menu' aria-label='open menu'>☰</button>
          <div className='header-info'>
            <p className='app-name' aria-label='name of the app'>Places of Saint-Petersburg, Russia</p>
            <p className='api-info'>Built with Google Maps API and Foursquare API</p>
          </div>
        </header>
        <LocationsMenu   gotLocations={this.state.gotLocations}
                         resetMap={this.resetMap}
                         filteredLocations={this.state.filteredLocations}
                         handleCategoryFilter={this.handleCategoryFilter}
                         filterLocations={this.filterLocations}
                         changeCategory={this.changeCategory}
                         category={this.state.category}
                         allLocations={this.state.allLocations}
                         selectLocation={this.selectLocation}/>
        <Map   gotLocations={this.state.gotLocations}
               filteredLocations={this.state.filteredLocations}
               locationsInfo={this.state.locationsInfo}
               showBox={this.state.showBox}
               selectLocation={this.selectLocation}
               animation={this.state.markerAnimation}
               zoom={this.state.zoom}
               center={this.state.center}
               selectedLocation={this.state.selectedLocation}
               allLocations={this.state.allLocations} />
      </div>
    );
  }
}

export default App;

{/*https://maps.googleapis.com/maps/api/geocode/json?address=Saint-Petersburg,Russia&language=en&key=AIzaSyB6umOQ7xBfICOqPv88utt0TyVtZcHAN3Q */}

{/*https://api.foursquare.com/v2/venues/search?ll=59.9342802,30.3350986&intent=browse&radius=10000&query=museum&limit=10&client_id=HVUUSG5G0A1A1551QOVRPZKR1AT4USRLBDC2KAYKSQW4GETT&client_secret=TFXX01L4PCO5PU3M4CXGPHQQSOL53A504121D0TH2URO0I1I&v=20180705*/}
