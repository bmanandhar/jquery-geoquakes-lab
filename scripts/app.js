console.log('Sanity..');

$(document).ready(function() {
  console.log("Sanity!");

let
  quakesPastWeek = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
  logo = "./images/earthquake.png";
  // $('.logo').append(`${logo}`); //This needs to correct 

  // Following the google-map documentation:
  map = new google.maps.Map(document.getElementById('map'), {
    
    center:
    {
      lat: 37.78,
      lng: -122.44
    },
    zoom: 8
  });

//AJAX call:
$.ajax({
  url: quakesPastWeek,
  success: onSuccess,
  error: onError, 
  method: "GET",

})//Main function:
function onSuccess(response) {
  console.log(response);

  var quake = response.features;
  console.log(quake);

  quake.forEach(function(features) {
    console.log(features);

    var quakeData = 
    `<p>
    ${features.properties.title},
     Type: <strong>${features.properties.type}</strong>,
      Lat/Lon: 
      ${features.geometry.coordinates[0]}/
      ${features.geometry.coordinates[1]}
      </p>
      <hr>`;
    $('#info').append(quakeData);
  });

}

//error function:
function onError(e1,e2,e3) {
  console.log('ERROR', e2);
}

});

// Google Map Geocode
// "https://maps.googleapis.com/maps/api/js?key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"
// "AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg"

// " https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View+CA&key=AIzaSyBHLett8djBo62dDXj0EjCimF8Rd6E8cxg "

let x =
{
  "type": "FeatureCollection",
  "metadata": {
      "generated": 1542400428000,
      "url": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
      "title": "USGS Significant Earthquakes, Past Week",
      "status": 200,
      "api": "1.5.8",
      "count": 2
  },
  "features": [{
      "type": "Feature",
      "properties": {
          "mag": 6.3,
          "place": "Southern East Pacific Rise",
          "time": 1542323341050,
          "updated": 1542339912820,
          "tz": -480,
          "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us1000hsfz",
          "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us1000hsfz.geojson",
          "felt": null,
          "cdi": null,
          "mmi": 0,
          "alert": "green",
          "status": "reviewed",
          "tsunami": 0,
          "sig": 611,
          "net": "us",
          "code": "1000hsfz",
          "ids": ",us1000hsfz,",
          "sources": ",us,",
          "types": ",geoserve,losspager,moment-tensor,origin,phase-data,shakemap,",
          "nst": null,
          "dmin": 27.207,
          "rms": 0.87,
          "gap": 16,
          "magType": "mww",
          "type": "earthquake",
          "title": "M 6.3 - Southern East Pacific Rise"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [-122.0421, -56.2373, 10]
      },
      "id": "us1000hsfz"
  }, {
      "type": "Feature",
      "properties": {
          "mag": 6.3,
          "place": "111km E of Visokoi Island, South Georgia and the South Sandwich Islands",
          "time": 1542312141960,
          "updated": 1542324449040,
          "tz": -120,
          "url": "https://earthquake.usgs.gov/earthquakes/eventpage/us1000hsaf",
          "detail": "https://earthquake.usgs.gov/earthquakes/feed/v1.0/detail/us1000hsaf.geojson",
          "felt": null,
          "cdi": null,
          "mmi": 3.85,
          "alert": "green",
          "status": "reviewed",
          "tsunami": 1,
          "sig": 611,
          "net": "us",
          "code": "1000hsaf",
          "ids": ",pt18319001,at00pi93o4,us1000hsaf,",
          "sources": ",pt,at,us,",
          "types": ",associate,geoserve,impact-link,losspager,moment-tensor,origin,phase-data,shakemap,",
          "nst": null,
          "dmin": 6.779,
          "rms": 0.97,
          "gap": 26,
          "magType": "mww",
          "type": "earthquake",
          "title": "M 6.3 - 111km E of Visokoi Island, South Georgia and the South Sandwich Islands"
      },
      "geometry": {
          "type": "Point",
          "coordinates": [-25.3862, -56.778, 10]
      },
      "id": "us1000hsaf"
  }]
}