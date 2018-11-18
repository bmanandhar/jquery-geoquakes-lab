console.log('Sanity..');

$(document).ready(function() {
  console.log("Sanity!");

let
  quakesLastWeek = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
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
  url: quakesLastWeek,
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
     Type: ${features.properties.type},
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
