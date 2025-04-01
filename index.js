function createStars() {
    const container = document.getElementById("background");
    for (let i = 0; i < 100; i++) {
        let star = document.createElement("div");
        star.className = "star";
        star.innerHTML = "✦";
        star.style.left = Math.random() * window.innerWidth + "px";
        star.style.top = Math.random() * window.innerHeight + "px";
        star.style.animationDuration = (Math.random() * 2 + 1) + "s";
        star.style.animationDelay = Math.random() * 2 + "s";
        container.appendChild(star);
    }
}

function changeContent(imageName, titleText, telegramUrl, infoText, audioId) {
    // Hide all images first
    const backgroundImages = document.querySelectorAll('.bg-image');
    backgroundImages.forEach((img) => {
        img.style.display = 'none';
    });

    // Show the relevant image
    let newImage = document.querySelector(`img[src="${imageName}"]`);
    if (newImage) {
        newImage.style.display = 'block'; // Show the selected image
    }

    // Update the page title and info text
    document.title = titleText;
    document.getElementById("infoText").innerText = infoText;

    // Update Telegram link
    let telegramLink = document.getElementById("telegramLink");
    let telegramAnchor = document.getElementById("telegramAnchor");
    telegramAnchor.href = telegramUrl;
    telegramAnchor.innerText = telegramUrl;
    telegramLink.style.display = "block";

    // Play the selected audio
    playAudio(audioId);
}

window.onbeforeunload = function() {
    return "Come back loser!";
};

window.onload = createStars;
