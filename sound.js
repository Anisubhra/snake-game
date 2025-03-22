// sound.js
const soundFiles = {
    food: new Audio('assets/food.mp3'),
    gameover: new Audio('assets/gameover.mp3'),
    move: new Audio('assets/move.mp3'),
    tada: new Audio('assets/tada.mp3'),
};

function preloadSounds() {
    for (const sound in soundFiles) {
        soundFiles[sound].load(); // Trigger loading
    }
}

// Call preloadSounds() when the page loads
window.addEventListener('load', preloadSounds);

function playSound(file) {
    soundFiles[file].play();
}

function eatSound() {
    playSound('food');
}

function dieSound() {
    playSound('gameover');
}

function moveSound() {
    playSound('move');
}

function endSound() {
    playSound('tada');
}