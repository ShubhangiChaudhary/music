let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let recent_vol = document.querySelector("#volume");
let vol_show = document.querySelector("#vol_show");
let slider = document.querySelector("#slider");
let show_duration = document.querySelector("#duration_slider");
let image = document.querySelector("#image");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");

let timer;
let autoplay = 0;

let index_no = 0;
let playing_song = false;

// created a audio element

let track = document.createElement("audio");

// all songs lists

let All_song = [
  {
    name: "first song",
    path: "songs/Night-Changes.mp3",
    img: "images/arijit.jpg",
    singer: "Arijit Singh",
  },
  {
    name: "second song",
    path: "songs/Night-Changes.mp3",
    img: "images/arijit.jpg",
    singer: "Arijit Singh",
  },
  {
    name: "third song",
    path: "songs/Night-Changes.mp3",
    img: "images/arijit.jpg",
    singer: "Arijit Singh",
  },
  {
    name: "fourth song",
    path: "songs/Night-Changes.mp3",
    img: "images/arijit.jpg",
    singer: "Arijit Singh",
  },
  {
    name: "fifth song",
    path: "songs/Night-Changes.mp3",
    img: "images/arijit.jpg",
    singer: "Arijit Singh",
  },
];

// function load track

function load_track(index_no) {
  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();
}
load_track(index_no);

// checking if the song is playing or not

function justplay() {
  if (playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

// play songs

function playsong() {
  track.play();
  playing_song = true;
  play.innerHTML = '<i class="fa fa-pause"></i>';
}

// pause song

function pausesong() {
  track.pause();
  playing_song = false;
  play.innerHTML = '<i class="fa fa-play"></i>';
}

// next song

function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

//
