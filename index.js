//
//
//
// NAV PLAYER and FOOTER
//
//
//
const body = document.querySelector("body");
//
const lButton = document.querySelector(".navButton");
const nav = document.getElementById("nav");
//
const rButton = document.querySelector(".playerButton");
const aside = document.getElementById("aside");
//
const ccButton = document.getElementById("ccButton")
const cc = document.getElementById("CC")

const shareButton = document.getElementById("shareButton")
const share = document.getElementById("share")

const mailButton = document.getElementById("mailButton")
const mail = document.getElementById("mail")

const facebookButton = document.getElementById("facebookButton")
const facebook = document.getElementById("facebook")

//
const reset1 = document.querySelector("h1");
const reset2 = document.querySelector("section");
const reset3 = document.querySelector("footer");
const reset4 = document.querySelector("header")
//
// show and hide navbar
//
function updateLeftButton() {
  if (nav.style.display != "none") {
    nav.style.display = "none";
  } else if (nav.style.display == "none") {
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
  if (aside.style.display != "none") {
    aside.style.display = "none";
  } else if (aside.style.display == "none") {
    aside.style.display = "block";
    nav.style.display = "none";
  } else {
    aside.style.display = "block";
    nav.style.display = "none";
  }
}
//
// show and hide CC
//
function updateCcButton() {
  if (cc.style.display != "none") {
    cc.style.display = "none";
  } else if (cc.style.display == "none") {
    cc.style.display = "block";
    share.style.display = "none";
    mail.style.display = "none";
    facebook.style.display = "none";
  } else {
    cc.style.display = "block";
    share.style.display = "none";
    mail.style.display = "none";
    facebook.style.display = "none";
  }
}
//
// show and hide share
//
function updateShareButton() {
  if (share.style.display != "none") {
    share.style.display = "none";
  } else if (share.style.display == "none") {
    share.style.display = "block";
    cc.style.display = "none";
    mail.style.display = "none";
    facebook.style.display = "none";
  } else {
    share.style.display = "block";
    cc.style.display = "none";
    mail.style.display = "none";
    facebook.style.display = "none";
  }
}
//
// show and hide mail
//
function updateMailButton() {
  if (mail.style.display != "none") {
    mail.style.display = "none";
  } else if (mail.style.display == "none") {
    mail.style.display = "block";
    cc.style.display = "none";
    share.style.display = "none";
    facebook.style.display = "none";
  } else {
    aside.style.display = "block";
    cc.style.display = "none";
    share.style.display = "none";
    facebook.style.display = "none";
  }
}
//
// show and hide facebook
//
function updatefacebookButton() {
  if (facebook.style.display != "none") {
    facebook.style.display = "none";
  } else if (aside.style.display == "none") {
    facebook.style.display = "block";
    cc.style.display = "none";
    share.style.display = "none";
    mail.style.display = "none";
  } else {
    facebook.style.display = "block";
    cc.style.display = "none";
    share.style.display = "none";
    mail.style.display = "none";
  }
}
//
// hide all header pop-up
//
function resetHeaderButtons() {
  if (screen.width < 1440) {
    nav.style.display = "none";
    aside.style.display = "none";
  }
}
//
// hide all footer pop-up
//
function resetFooterButtons() {
  cc.style.display = "none";
  share.style.display = "none";
  mail.style.display = "none";
  facebook.style.display = "none";
}
//
if (screen.width < 1440) {
  lButton.addEventListener("click", updateLeftButton);
  rButton.addEventListener("click", updateRightButton);
  reset1.addEventListener("click", resetHeaderButtons);
  reset2.addEventListener("click", resetHeaderButtons);
  reset2.addEventListener("click", resetFooterButtons);
  reset3.addEventListener("click", resetHeaderButtons);
  reset4.addEventListener("click", resetFooterButtons);
} else {
  reset2.addEventListener("click", resetFooterButtons);
  reset4.addEventListener("click", resetFooterButtons);
}
//
// adapt to resize
//
function view() {
  if (window.innerWidth >= 1440) {
    aside.style.display = "block";
    nav.style.display = "block";
  } else if (window.innerWidth < 1440) {
    lButton.addEventListener("click", updateLeftButton);
    rButton.addEventListener("click", updateRightButton);
    reset1.addEventListener("click", resetHeaderButtons);
    reset2.addEventListener("click", resetHeaderButtons);
    reset2.addEventListener("click", resetFooterButtons);
    reset3.addEventListener("click", resetHeaderButtons);
    reset4.addEventListener("click", resetFooterButtons);
  }
}
