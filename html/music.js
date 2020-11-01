//CRIADO POR GHOSTSBR TODOS OS DIREITOS RESERVADOS // CREATED BY GHOSTSBR ALL RIGHTS RESERVED // DISCORD: https://discord.gg/PfSr6GZ

// CONFIG

//volume inicial
let volume = 30;

//musicas
let musics = [
    "AINGJmnwMic", "sT_VcU_jOEM", "PVfjOjiBUkc", "vWdjWYhEONA",
    "HcJHr_8i-PY", "HCXW-Wbfn4U", "E1nBw1IwCI8", "wzAq_wbVT9A",
    "KeuPv9lN6zI", "IEZ6JHezCAw", "kGh7spYm2fs", "wLo2RvLU57c",
    "NYuhye3AYSY", "u3xqpu7v8jU", "UTBuH5ZNnJQ", "vWdjWYhEONA",
    "FYW1Y4EEA2Y", "E-4Dtd6mC-c", "zQnj66Xuajs", "8OgHDck_vT0",
    "kUdCNdd9n28", "qDUH3PUoYtw", "SoMeB4QBVug", "8sV6AT6jVuI",
    "tgbNymZ7vqY"
]

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let slider = document.getElementById("volume");
let info = document.getElementById("info");
let play = true
let selectedmusicid = Math.floor(Math.random() * musics.length)


let musicplayer;
function onYouTubeIframeAPIReady() {
    musicplayer = new YT.Player('musicplayer', {
    height: '1',
    width: '1',
    videoId: musics[selectedmusicid],
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}



function onPlayerReady(event) {
    event.target.playVideo();
    musicplayer.setVolume(volume);
}

let done = false;
function onPlayerStateChange(event) {
    if(event.data == YT.PlayerState.PLAYING)
    {
        title = event.target.getVideoData().title;
    }

    if (event.data == YT.PlayerState.ENDED) 
    {
        selectedmusicid++;
        musicplayer.loadVideoById(musics[selectedmusicid], 0, "tiny");
        musicplayer.playVideo();
    }
}

InitControls()
setInterval(UpdateMusicInfo, 1000);
function InitControls()
{
    slider.setAttribute("value", volume);
    slider.addEventListener("input", UpdateVolume, false);
}

function UpdateVolume()
{
    musicplayer.setVolume(slider.value-1);
}

function UpdateMusicInfo()
{

    if(title.length != 0)
    {   
        info.innerHTML = "Tocando: " + title;
    }
    else
    {
        info.innerHTML = "Tocando: nada";
    }
}

function clickplay() {
    if(play == true) {
        musicplayer.pauseVideo();
        document.getElementById("playbutton").src = "img/play.png";
        play = false
    } else {
        musicplayer.playVideo();
        document.getElementById("playbutton").src = "img/pause.png";
        play = true
    }
}

function clickback() {
    selectedmusicid--;
    musicplayer.loadVideoById(musics[selectedmusicid], 0, "tiny");
    musicplayer.playVideo();
}

function clickskip() {
    selectedmusicid++;
    musicplayer.loadVideoById(musics[selectedmusicid], 0, "tiny");
    musicplayer.playVideo();
}