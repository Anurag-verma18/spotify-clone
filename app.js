console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.querySelector('#masterPlay');
let myProgressBar = document.querySelector('#myProgressBar');
let gif = document.querySelector('#gif');
let songItems = document.querySelectorAll('.songItem');
let songItemPlay = document.querySelectorAll('.songItemPlay');
let masterSongName = document.querySelector('#masterSongName');


let songs = [
    {songName: "Suno Na Sangmarmar", filePath: "songs/1.mp3", coverPath: "covers/cover1.jpg"},
    {songName: "Tera Mera Rishta", filePath: "songs/2.mp3", coverPath: "covers/cover2.jpg"},
    {songName: "Tune Jo Na Kaha", filePath: "songs/3.mp3", coverPath: "covers/cover3.jpg"},
    {songName: "Kashmir Mai Tu Kanyakumari", filePath: "songs/4.mp3", coverPath: "covers/cover4.jpg"},
    {songName: "Raabta - Siyaah Raatein", filePath: "songs/5.mp3", coverPath: "covers/cover5.jpg"},
    {songName: "Darkhaast", filePath: "songs/6.mp3", coverPath: "covers/cover6.jpg"},
    {songName: "Janib", filePath: "songs/7.mp3", coverPath: "covers/cover7.jpg"},
    {songName: "Jug Jug Jeeve", filePath: "songs/8.mp3", coverPath: "covers/cover8.jpg"},
    {songName: "Rasiya", filePath: "songs/9.mp3", coverPath: "covers/cover9.jpg"},
    {songName: "Tera Hua", filePath: "songs/10.mp3", coverPath: "covers/cover10.jpg"},
]

songItems.forEach((element, i) => {
    element.querySelector('img').src = songs[i].coverPath;
    element.querySelector('.songName').innerText = songs[i].songName;
})

//listening to events on play/pause
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); 
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

        gif.style.opacity = 0;
    }
})

//listening to events on audioElement
audioElement.addEventListener('timeupdate', () => {
    //updating progressbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

//listening to events on progressBar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}


songItemPlay.forEach((element) => {
    element.addEventListener('click', () => {
        makeAllPlay();
        songIndex = parseInt(element.id);
        console.log(songIndex);
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.querySelector('#next').addEventListener('click', () => {
    if(songIndex >= 9) 
    {
        songIndex = 0;
    }
    else {
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.querySelector('#previous').addEventListener('click', () => {
    if(songIndex <= 0)
    {
        songIndex = 0;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
