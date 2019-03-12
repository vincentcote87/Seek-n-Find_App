let pos = -1;
let imgLocation = [];

class Image {
  constructor(loc) {
    this.location = loc;
  }
}

document.addEventListener("deviceready", init, false);

// Plugins init functions
function init() {
  var cameraOptions = {
    quality: 100,
    correctOrientation: true,
    saveToPhotoAlbum: false,
    allowEdit: true,
  };

  function cameraSuccess(imageURI) {
    // console.log('You got a photo');
    let img = new Image(imageURI);
    $(`#item${pos}`).attr('src', img.location);
    $('#itemList').find(`li:eq(${pos})`).attr('class', 'done');
    imgLocation.push(img);
    console.log(imgLocation);
  }

  function cameraFail(msg) {
    console.log(msg);
  }

  $(document).on('click', '.item', function () {
    pos = $(this).index();
    navigator.camera.getPicture(cameraSuccess, cameraFail, cameraOptions);
  });

};

$('#startBtn').on('click', () => {
  window.location.href = './setup.html';
});

$('#casualBtn').on('click', () => {
  window.location.href = './gamePage.html';
});

$('#timeAttackBtn').on('click', () => {
  window.location.href = './gamePage.html';
});

$(document).on('click', '.done', function () {
  pos = $(this).index();
  $('#fullScreen').fadeIn(200);
  $('#fullScreenImg').attr('src', $(`#item${pos}`).attr('src'));
});

$(document).on('click', '#fullScreen', function () {
  $('#fullScreen').fadeOut(200);
});