function enterSite() {
  const overlay = document.getElementById('enterOverlay');
  overlay.style.opacity = '0';
  setTimeout(() => {
    overlay.style.display = 'none';
    document.getElementById('topLinks').style.display = 'block';
  }, 500);
}

const staticSymbol = "@";
const dynamicText = "net | instakill";
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
