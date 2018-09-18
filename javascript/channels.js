
var chan1 = {
  name: "Dread_Files",
  chan_img: "images/chan1_stuff/blacklight_logo.png",
  chan_banner: "images/chan1_stuff/chan_banner_1.jpg",
  lobby_title: "Just Keep Swimming!",
  game_title: "Rainbow Six Siege",
  game_img: "images/chan1_stuff/siege_img.jpeg",
  background_img: "images/chan1_stuff/r6_back.jpg",
  bios: "",
  sub: "BENIFITS !!! : <br>\
        1. Literaly Nothing! <br>\
        2. Then again can u blame me. <br>\
        3. Are u seriously still reading this?",
  schedule: "Morning Stream - 10:30 AM to 05:00 PM EST <br>\
             JK, this isn't for real",
  connect: "social media links would go here but.... honestly this is just a test webpage.",
  discord: "Sorry nothing here.... yet.",
  rules: "1. No toxic behavoir.<br>\
          2. Trolling 9 year olds is only limited to LIGMA jokes. <br>\
          3. "
}

var chan2 = {
  name: "Ronin_th3_1",
  chan_img: "images/chan2_stuff/dead_space.jpg",
  chan_banner: "images/chan2_stuff/chan_banner_2.gif",
  lobby_title: "The One Ronin",
  game_title: "Garry's Mod",
  game_img: "images/chan2_stuff/gmod_logo.png",
  background_img: "images/chan2_stuff/gmod_back.jpg",
  bios: "",
  sub: "I am sorry, were u expecting something?",
  schedule: "I an't got time to play video games.",
  connect: "I value my privacy.",
  discord: "Just enjoy this text image <br>\
                <br>\
                <br>\
    │▒│ /▒/     <br>\
    │▒│/▒/      <br>\
    │▒ /▒/─┬─┐  <br>\
    │▒│▒|▒│▒│   <br>\
    ┌┴─┴─┐-┘─┘   <br>\
    │▒┌──┘▒▒▒│   <br>\
    └┐▒▒▒▒▒▒     <br>\
                 <br>    ",
  rules: "Just don't breack the website and we should be good."
}

var chan3 = {
  name: "IT'S_YA_BOI",
  chan_img: "images/chan3_stuff/creepy_terry.jpg",
  chan_banner: "images/chan3_stuff/chan_banner_3.jpg",
  lobby_title: "Squad Dubs",
  game_title: "Fortnite",
  game_img: "images/chan3_stuff/fortnite_logo.jpg",
  background_img: "images/chan3_stuff/fortnite_back.jpg",
  bios: "",
  sub: "",
  schedule: "",
  connect: "",
  discord: "",
  rules: ""
}

var followChan = false;
var note = false;

window.onload = load_chan(chan1);

function load_chan(chan) {
  document.getElementsByClassName("chan_name")[0].innerHTML = chan.name;
  document.getElementById("chan_logo").src = chan.chan_img;
  document.getElementById("content_img").src = chan.chan_banner;
  document.getElementsByClassName("chan_stuff_info")[0].innerHTML = chan.sub;
  document.getElementsByClassName("chan_stuff_info")[1].innerHTML = chan.schedule;
  document.getElementsByClassName("chan_stuff_info")[2].innerHTML = chan.rules;
  document.getElementsByClassName("chan_stuff_info")[3].innerHTML = chan.connect;
  document.getElementsByClassName("chan_stuff_info")[4].innerHTML = chan.discord;
  document.getElementById("title").innerHTML = chan.lobby_title;
  document.getElementById("g_name").innerHTML = chan.game_title;
  document.getElementById("img_game").src = chan.game_img;
  document.getElementById("img_game").title = chan.game_title;
  document.getElementById("img_back").src = chan.background_img;
}

function follow(x) {
  if(!followChan){
    x.src = "images/icons/follow_icon2.png";
    followChan = true;
  }
  else{
    x.src = "images/icons/follow_icon1.png";
    followChan = false;
  }
}

function notify(x) {
  if(!note){
    x.src = "images/icons/bell_icon2.png";
    note = true;
  }
  else{
    x.src = "images/icons/bell_icon1.png";
    note = false;
  }
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showContent() {
    document.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// this is for showing the info of channael clickable rows
var cssShowInfo = "transition: height 1s; \
                  height: 0; ";

var cssShowInfo2 = "transition: height 1s; \
                  height: auto;";

function showContentInfo(i) {
  if(document.getElementsByClassName("chan_stuff_info")[i].style.height !== "auto"){
    document.getElementsByClassName("chan_stuff_info")[i].style.cssText = cssShowInfo2;
  }
  else{
    document.getElementsByClassName("chan_stuff_info")[i].style.cssText = cssShowInfo;
  }
}

// Lobby stuff
var mU = {
  name: "SargentHell",
  image: "images/lobby_stuff/host.png"
}

var over = '<div class="user_overlay" onclick="">   \
              <img class="guest_img" src="" alt=""> \
              <div class="guest_name">????</div>    \
            </div>';

var guests = [
  {
    name: "ITS_YA_BOI",
    image: "images/lobby_stuff/guest1.jpg"
  },
  {
    name: "th3_1_Ronin",
    image: "images/lobby_stuff/guest2.jpg"
  },
  {
    name: "soy_Main",
    image: "images/lobby_stuff/guest4.jpg"
  },
  {
    name: "Lowko",
    image: "images/lobby_stuff/guest3.jpg"
  }
];

window.onload = load_M_over();
window.onload = load_overlay();

function load_M_over() {
  document.getElementsByClassName("m_user_name")[0].innerHTML = mU.name;
  document.getElementsByClassName("m_user_img")[0].src = mU.image;
}

function load_overlay() {
  for (var i = 0; i < guests.length; i++) {
    document.getElementsByClassName("s_box")[i].innerHTML += over;
    document.getElementsByClassName("guest_name")[i].innerHTML = guests[i].name;
    document.getElementsByClassName("guest_img")[i].src = guests[i].image;
  }
}


/*stuff that doesn't work
var selected1 = true;
var selected2 = false;
var selected3 = false;

var css_chan_select = "border-radius: 10px; \
                  border: 2px solid rgb(209, 75, 90);";

var css_chan_unSelect = "border-radius: 0px; \
                  border: none;";

function selectChan1(x) {
    x.style.cssText = css_chan_select;
    document.getElementsByClassName("chan_img")[1].style.cssText = css_chan_unSelect;
    document.getElementsByClassName("chan_img")[2].style.cssText = css_chan_unSelect;
}*/
