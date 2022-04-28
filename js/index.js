// more popup
let icon = document.getElementById("link-icon");
let block = document.getElementById("prof--ics");
block.style.display = "none";
icon.addEventListener("click", function () {
  block.style.display = "block";
});
window.addEventListener("mouseup", function (e) {
  if (!block.contains(e.target)) {
    block.style.display = "none";
  }
});
// tweet popup
let tweet = document.getElementById("blue-btn");
let tweetBig = document.getElementById("blue-button");
let popbox = document.getElementById("popup");
let totalwin = document.getElementById("main-icons");
tweet.addEventListener("click", function () {
  popbox.style.display = "block";
  totalwin.style.backgroundColor = "rgb(40, 39, 39)";
});
tweetBig.addEventListener("click", function () {
  popbox.style.display = "block";
  totalwin.style.backgroundColor = "rgb(40, 39, 39)";
});
window.addEventListener("mouseup", function (e) {
  if (!popbox.contains(e.target)) {
    popup.style.display = "none";
    totalwin.style.backgroundColor = "#000";
  }
});
//edit profile

let editBtn = document.getElementById("edit__p");
let editBlock = document.getElementById("edit-profile");
//total block
editBtn.addEventListener("click", function () {
  editBlock.style.display = "block";
  totalwin.style.backgroundColor = "rgb(40, 39, 39)";
});
window.addEventListener("mouseup", function (e) {
  if (!editBlock.contains(e.target)) {
    editBlock.style.display = "none";
    totalwin.style.backgroundColor = "#000";
  } else {
    totalwin.style.backgroundColor = "rgb(40, 39, 39)";
  }
});
