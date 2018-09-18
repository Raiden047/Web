// For side bars
var cssLeftSideMove = "-webkit-transition: left 0.5s; \
                      -ms-transition: left 0.5s; \
                      -moz-transition: left 0.5s; \
                      left: -317px;";

var cssRightSideMove = "-webkit-transition: right 0.5s; \
                      -ms-transition: right 0.5s; \
                      -moz-transition: right 0.5s; \
                      right: -384px;";

var cssLColMove =  "-webkit-transition: width 0.5s; \
                  -ms-transition: width 0.5s; \
                  -moz-transition: width 0.5s; \
                  width: 70px;";

var cssRColMove =  "-webkit-transition: width 0.5s; \
                  -ms-transition: width 0.5s; \
                  -moz-transition: width 0.5s; \
                  width: 0;";

var cssFlip = "transition: transform 0.5s; \
              transform: rotateY(180deg);";

function openLNav() {
  if(getNumber(window.getComputedStyle(document.getElementsByTagName("body")[0]).width) > 1040){
    if(window.getComputedStyle(document.getElementById("left_sidebar")).left.localeCompare("-317px") !== 0) {
      document.getElementById("left_sidebar").style.cssText = cssLeftSideMove;
      document.getElementById("left_column").style.cssText = cssLColMove;
      document.getElementById("arrow_left").style.cssText = cssFlip;
    }
    else {
      document.getElementById("left_sidebar").style.left = "0px";
      document.getElementById("left_column").style.width = "384px";
      document.getElementById("arrow_left").style.transform = "rotateY(0deg)";
    }

    if(getNumber(window.getComputedStyle(document.getElementsByTagName("body")[0]).width) > 1290) {
      stream();
    }
    else {
      if(window.getComputedStyle(document.getElementById("right_sidebar")).right.localeCompare("-384px") !== 0) {
        document.getElementById("right_sidebar").style.cssText = cssRightSideMove;
        document.getElementById("right_column").style.cssText = cssRColMove;
        document.getElementById("arrow_right").style.cssText = cssFlip;
      }
      else {
        document.getElementById("right_sidebar").style.right = "0px";
        document.getElementById("right_column").style.width = "384px";
        document.getElementById("arrow_right").style.transform = "rotateY(0deg)";
      }
    }
  }

}

function openRNav(){
  if(getNumber(window.getComputedStyle(document.getElementsByTagName("body")[0]).width) > 1040) {
    if(window.getComputedStyle(document.getElementById("right_sidebar")).right.localeCompare("-384px") !== 0) {
      document.getElementById("right_sidebar").style.cssText = cssRightSideMove;
      document.getElementById("right_column").style.cssText = cssRColMove;
      document.getElementById("arrow_right").style.cssText = cssFlip;
    }
    else {
      document.getElementById("right_sidebar").style.right = "0px";
      document.getElementById("right_column").style.width = "384px";
      document.getElementById("arrow_right").style.transform = "rotateY(0deg)";
    }

    if(getNumber(window.getComputedStyle(document.getElementsByTagName("body")[0]).width) > 1290) {
      stream();
    }
    else {
      if(window.getComputedStyle(document.getElementById("left_sidebar")).left.localeCompare("-317px") !== 0) {
        document.getElementById("left_sidebar").style.cssText = cssLeftSideMove;
        document.getElementById("left_column").style.cssText = cssLColMove;
        document.getElementById("arrow_left").style.cssText = cssFlip;
      }
      else {
        document.getElementById("left_sidebar").style.left = "0px";
        document.getElementById("left_column").style.width = "384px";
        document.getElementById("arrow_left").style.transform = "rotateY(0deg)";
      }
    }
  }

}

function getNumber(element) {
  var e = element.slice(0,-2);
  return e;
}

function streamBoxWidth() {
  if(document.getElementById("left_sidebar").style.left !== "-317px") {
    if(document.getElementById("right_sidebar").style.right !== "-384px"){
      document.getElementsByClassName("streamBox")[0].style.width = "90%";
    }
    else{
      document.getElementsByClassName("streamBox")[0].style.width = "75%";
    }
  }
  else {
    document.getElementsByClassName("streamBox")[0].style.width = "80%";
  }
}


// for stream box style change
var vid_2 = "position: absolute;";
var mContainer2 = "overflow-y: hidden;";
var streamB2 = "flex-direction: row;";
var mainStream2 = "width: 83%; \
                  padding-bottom: 46.7%;";
var streamW2 = "width: 17%; \
              flex-direction: column;";
var sbox2 = "width: auto; \
            height: 20%;";

var vid1 = "position: absolute";
var mContainer1 = "overflow-y: auto;";
var streamB1 = "flex-direction: column;";
var mainStream1 = "width: 100%; \
                  padding-bottom: 56.25%;";
var streamW1 = "width: auto; \
              flex-direction: row;";
var sbox1 = "width: 20%; \
            height: auto;";

function vidLoop(array, text) {
  for (var i = 0; i < array.length; i++) {
    array[i].style.cssText = text;
  };
}

function stream() {
  if(document.getElementById("left_sidebar").style.left == "-317px" && document.getElementById("right_sidebar").style.right == "-384px") {
    vidLoop(document.getElementsByTagName("video"), vid_2);
    document.getElementById("m_container").style.cssText = mContainer2;
    document.getElementsByClassName("streamBox")[0].style.cssText = streamB2;
    document.getElementsByClassName("main_stream")[0].style.cssText = mainStream2;
    document.getElementsByClassName("stream_wheel")[0].style.cssText = streamW2;
    vidLoop(document.getElementsByClassName("s_box"), sbox2);
    document.getElementsByClassName("streamBox")[0].style.width = "80%";
    //document.getElementById("styleAddress").setAttribute("href", "styles2.css");
  }
  else {
    vidLoop(document.getElementsByTagName("video"), vid1);
    document.getElementById("m_container").style.cssText = mContainer1;
    document.getElementsByClassName("streamBox")[0].style.cssText = streamB1;
    document.getElementsByClassName("main_stream")[0].style.cssText = mainStream1;
    document.getElementsByClassName("stream_wheel")[0].style.cssText = streamW1;
    vidLoop(document.getElementsByClassName("s_box"), sbox1);
    streamBoxWidth();
    //document.getElementById("styleAddress").setAttribute("href", "styles.css");
  }
}

// for video adress change
var vidM = "videos/titanfall1.mp4";
var vid1 = "videos/zelda2.mp4";
var vid2 = "videos/gMod2.mp4";
var vid3 = "videos/rainbow2.mp4";
var vid4 = "videos/witchers1.mp4";

var vM = document.getElementById("vidM");

var vids = [
  {
    id: "vid1",
    src: "videos/zelda2.mp4"
  },
  {
    id: "vid2",
    src: "videos/gMod2.mp4"
  },
  {
    id: "vid3",
    src: "videos/rainbow2.mp4"
  },
  {
    id: "vid4",
    src: "videos/witchers1.mp4"
  }
];

function switchVid(v) {
  var timeM = vM.currentTime;
  var timeS = v.currentTime;
  for (var i = 0; i < vids.length; i++) {
    if(v.id.localeCompare(vids[i].id) == 0) {
      vid = vids[i].src;
      vM.src = vids[i].src;
      v.src = vidM;
      var temp = vidM;
      vidM = vids[i].src;
      vids[i].src = temp;
      //for info switching
      temp = document.getElementsByClassName("guest_name")[i].innerHTML;
      document.getElementsByClassName("guest_name")[i].innerHTML = document.getElementsByClassName("m_user_name")[0].innerHTML;
      document.getElementsByClassName("m_user_name")[0].innerHTML = temp;
      temp = document.getElementsByClassName("guest_img")[i].src;
      document.getElementsByClassName("guest_img")[i].src = document.getElementsByClassName("m_user_img")[0].src;
      document.getElementsByClassName("m_user_img")[0].src = temp;
    }
  }
  vM.currentTime = timeS;
  v.currentTime = timeM;
}

// counter for live viewers
function live_counter() {
      var counter =   document.getElementsByClassName("live_viewers")[0];
      var count = 0;
      count = parseInt(counter.innerHTML);
      count = count + 1;
      counter.innerHTML = count;
}
window.onload = live_counter();
