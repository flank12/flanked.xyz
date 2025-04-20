const profileDisplay = document.getElementById('profile-display');
const profilePic = document.getElementById('profile-pic');
const profileDesc = document.getElementById('profile-desc');

const fontFace = new FontFace('FreeSerif', 'url(FreeSerif-YO4a.woff)');
fontFace.load().then(function(loadedFace) {
  document.fonts.add(loadedFace);
  profileDesc.style.fontFamily = 'FreeSerif, serif';
}).catch(function(error) {
  console.error('Font loading failed:', error);
});

const profiles = {
  cute: {
    img: 'perk.jpeg',
    desc: 'nigga lover?',
  },
  shy: {
    img: 'flank.png',
    desc: 'sigma sigma boy',
  },
  motori: {
    img: 'dorm.png',
    desc: 'muslim and fat',
  }
};

Object.values(profiles).forEach(profile => {
  const img = new Image();
  img.src = profile.img;
});

let currentProfile = null;

document.querySelectorAll('.profile-name').forEach(nameEl => {
  nameEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = nameEl.dataset.name;
    if (currentProfile === key) {
      profileDisplay.style.display = 'none';
      profilePic.src = '';
      profileDesc.textContent = '';
      currentProfile = null;
    } else {
      const profile = profiles[key];
      if (profile) {
        profilePic.src = profile.img;
        profileDesc.textContent = profile.desc;
        profilePic.alt = `${key} profile picture`;
        profileDisplay.style.display = 'flex';
        currentProfile = key;
      }
    }
  });
});
