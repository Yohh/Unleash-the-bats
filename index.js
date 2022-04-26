const lButton = document.querySelector(".navButton");
const nav = document.getElementById("nav");

lButton.addEventListener("click", updateLeftButton);

function updateLeftButton() {
  if (getComputedStyle(nav).display != "none") {
    nav.style.display = "none";
  } else if (getComputedStyle(nav).display == "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "block";
  }
}

const rButton = document.querySelector(".playerButton");
const aside = document.getElementById("aside");

rButton.addEventListener("click", updateRightButton);

function updateRightButton() {
  if (getComputedStyle(aside).display != "none") {
    aside.style.display = "none";
  } else if (getComputedStyle(aside).display == "none") {
    aside.style.display = "block";
  } else {
    aside.style.display = "block";
  }
}

const reset = document.querySelector("#about");

reset.addEventListener("click", resetButtons);

function resetButtons() {
  nav.style.display = "none";
  aside.style.display = "none";
}
