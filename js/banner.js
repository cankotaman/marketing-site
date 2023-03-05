var slideImg = document.getElementById("slideImg");

var images = new Array(
  "../img/dükkan2.jpg",
  "../img/dükkan3.jpg",
  "../img/dükkan4.jpg",
  "../img/dükkan5.jpg",
  "../img/dükkan6.jpg"
);

var len = images.length;
var i = 0;

function slider() {
  if (i > len - 1) {
    i = 0;
  }
  slideImg.src = images[i];
  i++;
  setTimeout("slider()", 3000);
}
