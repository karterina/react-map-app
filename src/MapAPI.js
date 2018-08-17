// based on the BooksAPI from Udacity project 7 'MyReads'

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

// get locations from Forsquare using the ForsquareAPI
// the locations are 20 results of "museum" query
export const getAllLocations = () =>
  fetch(`https://api.foursquare.com/v2/venues/search?ll=59.9342802,30.3350986&intent=browse&radius=10000&query=museum&limit=20&locale=en&client_id=HVUUSG5G0A1A1551QOVRPZKR1AT4USRLBDC2KAYKSQW4GETT&client_secret=TFXX01L4PCO5PU3M4CXGPHQQSOL53A504121D0TH2URO0I1I&v=20180805`)
    .then(res => res.json())
    .then(data => data.response.venues)

// get information about a selected location
export const getLocationsInfo = (location) =>
  fetch(`https://api.foursquare.com/v2/venues/${location.id}?client_id=HVUUSG5G0A1A1551QOVRPZKR1AT4USRLBDC2KAYKSQW4GETT&client_secret=TFXX01L4PCO5PU3M4CXGPHQQSOL53A504121D0TH2URO0I1I&v=20180705`)
    .then(res => res.json())
    .then(data => data.response.venue)
