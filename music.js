function playAudio(member) {
    let audio = new Audio();
    switch(member) {
        case 'flank':
            audio.src = 'audio.mp3';  // Replace with the actual audio file for Flank
            break;
        case 'decoy':
            audio.src = 'audio2.mp3';  // Replace with the actual audio file for Decoy
            break;
        case 'dorm':
            audio.src = 'audio3.mp3';   // Replace with the actual audio file for Dorm
            break;
        default:
            return;
    }
    audio.play();
}
