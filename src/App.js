import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js';
import LocationsMenu from './LocationsMenu.js'
import * as MapAPI from './MapAPI.js'
import Markers from './Markers.js'

class App extends React.Component {
  state = {
    allLocations: [],
    selectedLocation: [],
    center: {lat: 59.9342802, lng: 30.3350986},
    zoom: 12,
    marker: [],
    locationsInfo: [],
    locationsPhotos: [],
    category: 'None',
    filteredLocations: []
  }

  componentDidMount() {
    // get initial locations when component mounts
    MapAPI.getAllLocations().then((locations) => {
      this.setState({allLocations: locations});
      this.setState({filteredLocations: locations})
    }).catch((error) => {
      alert('Sorry, something went wrong while fetching locations. Try again later!');
      console.log('Something went wrong while fetching locations', error);
    });
  }

  filterLocations = () => {
    let filtered;
    if (this.state.category !== 'None') {
      filtered = this.state.allLocations.filter(location => (
        location.categories[0].name === this.state.category
      ))
    } else {
      filtered = this.state.allLocations;
    }
    console.log(filtered);
    this.setState({filteredLocations: filtered})
  }

  changeCategory = (event) => {
    this.setState({category: event.target.value})
  }

  handleCategoryFilter = (event) => {
    this.changeCategory(event);
    setTimeout(() => (this.filterLocations()), 1000)
  }


  toggleMenu = () => {
    let navContainer = document.querySelector('.locationsMenu');
    navContainer.classList.toggle('show')
  }


  selectLocation = (location) => {
      this.setState({selectedLocation: location});
      this.setState({center: {lat: location.location.lat, lng: location.location.lng}});
      this.setState({zoom: 15});
      this.setState({showBox: true});
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <button onClick={(event) => this.toggleMenu()} className='toggle-menu' aria-label='open menu'>☰</button>
          <p>Museums of Saint-Petersburg, Russia</p>
        </header>
        <LocationsMenu filteredLocations={this.state.filteredLocations} handleCategoryFilter={this.handleCategoryFilter} filterLocations={this.filterLocations} changeCategory={this.changeCategory} category={this.state.category} allLocations={this.state.allLocations} selectLocation={this.selectLocation}/>
        <Map filteredLocations={this.state.filteredLocations} locationsInfo={this.state.locationsInfo} showBox={this.state.showBox} selectLocation={this.selectLocation} animation={this.state.markerAnimation} zoom={this.state.zoom} center={this.state.center} selectedLocation={this.state.selectedLocation} allLocations={this.state.allLocations} />
        <footer className='footer'>
          <div className='footerInfo'>
            <p>This app is build with GoogleMapsAPI and ForsquareAPI</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

{/*https://maps.googleapis.com/maps/api/geocode/json?address=Saint-Petersburg,Russia&language=en&key=AIzaSyB6umOQ7xBfICOqPv88utt0TyVtZcHAN3Q */}

{/*https://api.foursquare.com/v2/venues/search?ll=59.9342802,30.3350986&intent=browse&radius=10000&query=museum&limit=10&client_id=HVUUSG5G0A1A1551QOVRPZKR1AT4USRLBDC2KAYKSQW4GETT&client_secret=TFXX01L4PCO5PU3M4CXGPHQQSOL53A504121D0TH2URO0I1I&v=20180705*/}
