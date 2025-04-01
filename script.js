function playAudio(audioFile) {
    const audioPlayer = document.getElementById("audioPlayer");
    audioPlayer.src = audioFile;
    audioPlayer.play();
}
