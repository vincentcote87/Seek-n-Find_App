let fadeTime = 200;
let pos = -1;
let imgLocation = [];
let itemList = [];
let itemAmount = 0;

const outdoorItems = ['Tree', 'Yellow Door', 'Stop Sign', 'Red Car',
  'Playground', 'Garbage Can', 'Dog', 'Lake',
  'Rock', 'Fire Hydrant', 'Yeild Sign', 'Crosswalk',
  'Playground Zone', 'Fence', 'Bicycle', 'Mailbox',
  'Bird', 'City Bus', 'Flag', 'Bricks', 'Basketball Net',
  'Bench', 'Letter "E"', 'Picket Fence', 'Police Car',
  'Ladder', 'Bumper Sticker', 'Cat', 'Newspaper'
];

class Image {
  constructor(loc) {
    this.location = loc;
  }
};

// Navigation
$('#startBtn').on('click', function () {
  $('#splashScreen').fadeOut(fadeTime, function () {
    $('#setupScreen').fadeIn(fadeTime);
  });
});

$('#helpBtn').on('click', function () {
  $('#splashScreen').fadeOut(fadeTime, function () {
    $('#helpScreen').fadeIn(fadeTime);
  });
});

$('#closeHelp').on('click', function () {
  $('#helpScreen').fadeOut(fadeTime, function () {
    $('#splashScreen').fadeIn(fadeTime);
  });
});

$('#casualBtn').on('click', function () {
  itemAmount = $("input[name='itemAmount']:checked").val();
  initList(itemAmount);
  $('#setupScreen').fadeOut(fadeTime, function () {
    $('#gameScreen').fadeIn(fadeTime);
  });
});

$(document).on('click', '.done', function () {
  pos = $(this).index();
  $('#fullScreen').fadeIn(200);
  $('#fullScreenImg').attr('src', $(`#item${pos}`).attr('src'));
});

$(document).on('click', '#fullScreen', function () {
  $('#fullScreen').fadeOut(200);
});

$('#exitBtn').on('click', function () {
  if (confirm("Are you sure?")) {
    goHome('gameScreen');
  }
});

$('#endBtn').on('click', function () {
  goHome('winningScreen');
})


// Helper Functions
function getItems() {
  let list = [];
  let num = 16;
  while (true) {
    let item = outdoorItems[Math.floor(Math.random() * outdoorItems.length)];
    console.log(item);
    if (!list.includes(item)) {
      list.push(item);
      num--;
    }
    if (num <= 0)
      break;
  }
  return list;
};

function initList(amt) {
  for (let i = 0; i < amt; ++i) {
    $('#itemList').append(`<li class="item"><h2><img id="item${i}" class="camIcon" src="./imgs/camIcon.png" alt="cam" align="middle">${itemList[i]}</h2></li>`);
  }
};

function initWin() {
  alert("You found all the items!! Well done!");
  addToGrid();
  $('#gameScreen').fadeOut(fadeTime, function () {
    $('#winningScreen').fadeIn(fadeTime);
  });
};

function goHome(from) {
  $(`#${from}`).fadeOut(fadeTime, function () {
    $('#splashScreen').fadeIn(fadeTime);
  });
  itemList = [];
  itemList = getItems();
  imgLocation = [];
  $('#itemList').empty();
}

function addToGrid() {
  for (let i = 0; i < imgLocation.length; ++i) {
    $('#galleryDiv').append(`<img src=${imgLocation[i].location} class="done gridImg">`);
  }
}

itemList = getItems();

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
    let img = new Image(imageURI);
    $(`#item${pos}`).attr('src', img.location);
    $('#itemList').find(`li:eq(${pos})`).attr('class', 'done');
    imgLocation.push(img);
    itemAmount--;
    if (itemAmount <= 0)
      initWin();
  }

  function cameraFail(msg) {
    console.log(msg);
  }

  $(document).on('click', '.item', function () {
    pos = $(this).index();
    navigator.camera.getPicture(cameraSuccess, cameraFail, cameraOptions);
  });

};