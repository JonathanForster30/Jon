window.onload = function() {
  showImages();
}
console.log("hello");
var page = 0;
var images = [




  "img/Basketball.jpg",
  "img/download (1).jpg",
  "img/download (2).jpg",
  "img/download (3).jpg",
  "img/download (4).jpg",
  "img/download (5).jpg",
  "img/download (6).jpg",
  "img/download (7).jpg",
  "img/download (8).jpg",
  "img/download (9).jpg",
  "img/download (10).jpg",
  "img/download (11).jpg",
  "img/download (12).jpg",
  "img/download (13).jpg",
  "img/download (14).jpg",
  "img/download.jpg",
  "img/images (1).jpg",
  "img/images (2).jpg",
  "img/images.jpg"
];


var increase = function() {
   httpGetAsync('/api/increase', callbackFunc);
}

var decrease = function() {
   httpGetAsync('/api/decrease', callbackFunc);
}

function callbackFunc(res) {
  console.log(res);
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

var update = function() {
  removeImages();
  showImages();
}
var pageBack = function() {
  if(page > 0) {
    page -= 1;
  }
  update();
}
var pageBack = function() {
  if(page > 0) {
    page -= 1;
  }
update();
}

var pageForward = function() {
  if(page < (images.length / 8)) {
    page += 1;
  }
}

var showImages = function() {
  var element = document.getElementById("images");
  var start = page * 8;
  var end = start + 8;
  if(end >= images.length) {
    end += images.length - 1;
  }
  for(var i = start; i < end; i++) {
    var path = images[i];
    var img = document.createElement("img");
    img.src = path;
    img.className ="thumbnail";
    element.appendChild(img);
  }
}
var removeImages = function() {
  var element = document.getElementById("images");
  while(element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
