// Script for Love Messages, Photo Gallery, and Music Player Controls

// Love Messages Interaction
const loveMessages = [
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    "In all the world, there is no heart for me like yours.",
    "Every love story is beautiful, but ours is my favorite."
];

function displayLoveMessage() {
    const messageContainer = document.getElementById('love-message');
    messageContainer.innerText = loveMessages[Math.floor(Math.random() * loveMessages.length)];
}

// Photo Gallery Navigation
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery img');

function showImage(index) {
    images.forEach((img, i) => {
        img.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
}

// Music Player Controls
const audio = document.getElementById('audio-player');

function playMusic() {
    audio.play();
}

function pauseMusic() {
    audio.pause();
}

// Load initial message and first image
window.onload = () => {
    displayLoveMessage();
    showImage(currentImageIndex);
};

// Event Listeners
document.getElementById('next-btn').addEventListener('click', nextImage);
document.getElementById('prev-btn').addEventListener('click', previousImage);
document.getElementById('play-btn').addEventListener('click', playMusic);
document.getElementById('pause-btn').addEventListener('click', pauseMusic);
