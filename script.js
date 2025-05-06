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
  
  // Enter screen action
  document.getElementById('enter-btn').addEventListener('click', () => {
    document.getElementById('enter-screen').style.display = 'none';
    loadTrack(currentTrack);
  });
  function enterSite() {
    const overlay = document.getElementById('enterOverlay');
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
      document.getElementById('topLinks').style.display = 'block';
    }, 500);
  }
  
  const staticSymbol = "@";
  const dynamicText = "the don net";
  let typedText = "";
  let index = 0;
  
  function typeTitle() {
    if (index < dynamicText.length) {
      typedText += dynamicText.charAt(index);
      document.title = staticSymbol + typedText;
      index++;
      setTimeout(typeTitle, 200);
    } else if (typedText.length > 0) {
      typedText = typedText.slice(0, typedText.length - 1);
      document.title = staticSymbol + typedText;
      setTimeout(typeTitle, 150);
    } else {
      index = 0;
      setTimeout(typeTitle, 500);
    }
  }
  
  window.onload = typeTitle;
