//
//
//
// NAV AND PLAYER
//
//
//
const lButton = document.querySelector(".navButton");
const nav = document.getElementById("nav");
//
const rButton = document.querySelector(".playerButton");
const aside = document.getElementById("aside");
//
const reset1 = document.querySelector("h1");
const reset2 = document.querySelector("section");
const reset3 = document.querySelector("footer");
//
// show and hide navbar
//
function updateLeftButton() {
  if (getComputedStyle(nav).display != "none") {
    nav.style.display = "none";
  } else if (getComputedStyle(nav).display == "none") {
    nav.style.display = "block";
    aside.style.display = "none";
  } else {
    nav.style.display = "block";
    aside.style.display = "none";
  }
}
//
// show and hide player
//
function updateRightButton() {
  if (getComputedStyle(aside).display != "none") {
    aside.style.display = "none";
  } else if (getComputedStyle(aside).display == "none") {
    aside.style.display = "block";
    nav.style.display = "none";
  } else {
    aside.style.display = "block";
    nav.style.display = "none";
  }
}
//
// hide all pop-up
//
function resetButtons() {
  if (screen.width < 1440) {
    nav.style.display = "none";
    aside.style.display = "none";
  }
}
//
if (screen.width < 1440) {
  lButton.addEventListener("click", updateLeftButton);
  rButton.addEventListener("click", updateRightButton);
  reset1.addEventListener("click", resetButtons);
  reset2.addEventListener("click", resetButtons);
  reset3.addEventListener("click", resetButtons);
  //
}
//
// adapt to resize
//
function view() {
  if (screen.width >= 1440) {
    aside.style.display = "block";
    nav.style.display = "block";
  } else if (screen.width < 1440) {
    nav.style.display = "none";
    aside.style.display = "none";
    lButton.addEventListener("click", updateLeftButton);
    rButton.addEventListener("click", updateRightButton);
    reset1.addEventListener("click", resetButtons);
    reset2.addEventListener("click", resetButtons);
    reset3.addEventListener("click", resetButtons);
  }
}
