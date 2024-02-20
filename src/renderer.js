// audio var src
var song = new Audio('assets/girl.mp3');
song.loop = true;
song.volume = 1

// html var src
var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var ppb = document.getElementById('ppb');
var mm = document.getElementById('mm');
var h3 = document.querySelector('h3');

//script
pp = true;
song.play();

function play_pause() {
   if (pp === true) {
      song.pause();
      ppb.className = "bi bi-play-circle-fill";
      pp = false;
   } else {
      song.play();
      ppb.classList = "bi bi-pause-circle-fill";
      pp = true;
   }
}

function switch_mode(x) {
   if (x.id === 'b1') {
      b1.style.backgroundColor = "#fe5163";
      b2.style.backgroundColor = "transparent";
      h3.style.color = "#fe5163";
      mm.src = "assets/lofigirl.webp";
      song.src = "assets/girl.mp3";
      song.play();
   } else if (x.id === 'b2') {
      b1.style.backgroundColor = "transparent";
      b2.style.backgroundColor = "#67e8f9";
      h3.style.color = "#67e8f9";
      mm.src = "assets/lofiboy.webp";
      song.src = "assets/boy.mp3";
      song.play();
   }
}

//volume function
v_string = 100;
v_text = document.getElementById('v_text');

function v_plus() {
   if (song.volume < 1) {
      song.volume = Math.min(1, song.volume + 0.1);
      v_string += 10;
      v_text.innerHTML = String(v_string) + "%";
   }
}
function v_moins() {
   if (song.volume > 0) {
      song.volume = Math.max(0, song.volume - 0.1);
      v_string -= 10;
      v_text.innerHTML = String(v_string) + "%";
   }
}
//avant arrière audio
function vb() {
   song.currentTime -= 30;
}
function vf() {
   song.currentTime += 30;
}