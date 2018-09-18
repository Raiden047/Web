// This is for the opening popup
lightBoxClose = function() {
  document.querySelector(".lightbox").classList.add("closed");
  playVid("vidM");
  playVid("vid1");
  playVid("vid2");
  playVid("vid3");
  playVid("vid4");
}

function playVid(x) {
  var v = document.getElementById(x);
  v.autoplay = true;
  v.load();
}

var intro =
"Quick info:                     <br>\
This website is just a mock static design, not a final product<br>\
The aim of this prject is to eventauly produce a fully funcitonal web streaming platform<br>\
This web platform will follow a discord like minimalistic design theme<br>\
(though so far it looks more of a complete copy, please don't sue me Discord! ಠ_ಥ )<br>\
If you like this website, then I would greatly apprecicate your support by donating to my kickstarter.<br>\
If you would like to go a step further I could really use some help with the coding, being an ameture solo webdeveloper is not easy.<br>\
Last of all this website works best on chrome.<br>";

window.onload = (document.getElementsByClassName("pop_intro")[0].innerHTML = intro);
