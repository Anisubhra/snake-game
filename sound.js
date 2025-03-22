// sound.js
function playSound(file) {
    const audio = new Audio(file);
    audio.play();
}

function eatSound() {
    playSound('assets/food.mp3');
}

function dieSound() {
    playSound('assets/gameover.mp3');
}

function moveSound() {
    playSound('assets/move.mp3');
}

function endSound() {
    playSound('assets/tada.mp3');
}