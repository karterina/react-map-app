import React from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './Map.js';
import LocationsMenu from './LocationsMenu.js'
import * as MapAPI from './MapAPI.js'

class App extends React.Component {
  state ={
    allLocations: []
  }

  componentDidMount() {
    // get initial locations when component mounts
    MapAPI.getAllLocations().then((locations) => {
      this.setState({allLocations: locations})
    }).catch((error) => {
      console.log('Something went wrong', error);
    })
  }

  toggleMenu = (event) => {
    let navContainer = document.querySelector('.locationsMenu');
    navContainer.classList.toggle('show')
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={(event) => this.toggleMenu()} className='toggle-menu' aria-label='open menu'>☰</button>
          <p>Museums of Saint-Petersburg, Russia</p>
        </header>
        <LocationsMenu allLocations={this.state.allLocations}/>
        <Map />
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
