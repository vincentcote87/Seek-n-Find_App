document.addEventListener("deviceready", init, false);


// Plugins init functions
function init() {
  var cameraOptions = {
    quality: 100,
    correctOrientation: true,
    saveToPhotoAlbum: true,
    allowEdit: true,
  };

  $('#cameraBtn').on('click', function () {
    navigator.camera.getPicture(cameraSuccess, cameraFail, cameraOptions);
  });

  $('#btn').on('click', function () {
    $("#content").append("clicked");
    navigator.geolocation.watchPosition(geoSuccess, geoError);
  });

  function cameraSuccess(imageURI) {
    console.log('You got a photo');
    $('#cameraBtn').after(`<img src="${imageURI}">`);
  }

  function cameraFail(msg) {
    console.log(msg);
  }

  var geoSuccess = function (position) {
    $("#content").append('Latitude: ' + position.coords.latitude + '<br>' +
      'Longitude: ' + position.coords.longitude + '<br>' +
      'Altitude: ' + position.coords.altitude + '<br>' +
      'Accuracy: ' + position.coords.accuracy + '<br>' +
      'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '<br>' +
      'Heading: ' + position.coords.heading + '<br>' +
      'Speed: ' + position.coords.speed + '<br>' +
      'Timestamp: ' + position.timestamp + '<br><br>');
  };

  // onError Callback receives a PositionError object
  //
  function geoError(error) {
    alert('code: ' + error.code + '\n' +
      'message: ' + error.message + '\n');
  }
};