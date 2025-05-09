const songs = [
  {
    title: "Love - Cursed",
    url: "https://files.catbox.moe/5gwhrj.mp3"
  },
  {
    title: "Highway - elusion",
    url: "https://files.catbox.moe/6weoxx.mp3"
  }
];

let currentTrack = 0;
const audio = document.getElementById('audio');
const trackTitle = document.getElementById('track-title');
const currentTimeText = document.getElementById('current-time');
const durationText = document.getElementById('duration');

function loadTrack(index) {
  audio.src = songs[index].url;
  trackTitle.textContent = songs[index].title;
  audio.load();
  audio.play();
}

function playPause() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" + secs : secs}`;
}

audio.addEventListener('loadedmetadata', () => {
  durationText.textContent = formatTime(audio.duration);
});

audio.addEventListener('timeupdate', () => {
  currentTimeText.textContent = formatTime(audio.currentTime);
});

// --- Enter Overlay Click ---
function enterSite() {
  const overlay = document.getElementById('enter-overlay');
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
    loadTrack(currentTrack);
  }, 500);
}

const staticSymbol = "@";
const dynamicText = "the don net";
let typedText = "";
let index = 0;
let isDeleting = false;

function typeTitle() {
  if (!isDeleting) {
    typedText += dynamicText.charAt(index);
    document.title = staticSymbol + typedText;
    index++;

    if (index < dynamicText.length) {
      setTimeout(typeTitle, 200);
    } else {
      isDeleting = true;
      setTimeout(typeTitle, 1000);
    }
  } else {
    typedText = typedText.slice(0, -1);
    document.title = staticSymbol + typedText;

    if (typedText.length > 0) {
      setTimeout(typeTitle, 150);
    } else {
      isDeleting = false;
      index = 0;
      setTimeout(typeTitle, 500);
    }
  }
}

window.onload = typeTitle;
