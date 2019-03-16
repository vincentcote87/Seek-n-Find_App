let pos = -1;
let imgLocation = [];
let amount = 0;
const outdoorItems = ['Tree', 'Yellow Door', 'Stop Sign', 'Red Car',
  'Playground', 'Garbage Can', 'Dog', 'Lake',
  'Rock', 'Fire Hydrant', 'Yeild Sign', 'Crosswalk',
  'Playground Zone', 'Fence', 'Bicycle', 'Mailbox',
  'Bird', 'City Bus', 'Flag', 'Bricks', 'Basket Ball Net',
  'Bench', 'Letter "E"', 'Picket Fence', 'Police Car',
  'Ladder', 'Bumper Sticker', 'Cat', 'Newspaper'
];

class Image {
  constructor(loc) {
    this.location = loc;
  }
};

$.getScript('./app.js', function () {
  amout = amt;
});

console.log(amount);

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

function initList() {
  console.log(amt);
  // let itemList = getItems();
  // console.log(itemList[2]);
  console.log($('#itemList'));
  setTimeout(function () {
    console.log("fuck");
    $('#itemList').append("<li>Hello</li>");
  }, 500);
  $('#itemList').append("<li>Hello</li>");
  $(body).append("FUCKYUOU");
  // for (let i = 0; i < amt; ++i) {
  //   $('#itemList').append(`<li class="item"><h2><img id="item${i}" class="camIcon" src="./imgs/camIcon.png" alt="cam" align="middle">${itemList[i]}</h2></li>`);
  // }
};

function getItems() {
  let list = [];
  let num = 16;
  while (true) {
    let item = outdoorItems[Math.floor(Math.random() * outdoorItems.length)];
    if (!list.includes(item)) {
      list.push(item);
      num--;
    }
    if (num >= 0)
      break;
  }
  return list;
}