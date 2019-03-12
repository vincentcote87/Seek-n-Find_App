document.addEventListener("deviceready", init, false);


// Plugins init functions
function init() {
  var cameraOptions = {
    quality: 100,
    correctOrientation: true,
    saveToPhotoAlbum: false,
    allowEdit: true,
  };

  $(document).on('click', '.item', () => {
    console.log($(this).attr('class'));
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
