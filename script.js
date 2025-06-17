document.addEventListener('DOMContentLoaded', () => {
  const enterOverlay = document.getElementById('enterOverlay');
  const siteContent = document.getElementById('site');
  const backgroundMusic = document.getElementById('backgroundMusic');

  enterOverlay.addEventListener('click', () => {
    enterOverlay.style.display = 'none';
    siteContent.hidden = false;
    backgroundMusic.play().catch(err => {
      console.warn('Autoplay error:', err);
    });
  });
});
 

