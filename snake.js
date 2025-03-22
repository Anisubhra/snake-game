// snake.js
const snakeColor = '#7FFFD4';
const snakeBodyColor = '#97FCDE';
let snakeX = 0;
let snakeY = 0;
let velocityX = 0;
let velocityY = 0;
let snakeBody = [];

function drawSnake() {
    drawBody();
    drawHead();

    if (checkGamerOver()) {
        dieSound();
        stopGame();
        return;
    }
}

function drawHead() {
    const radius = 2;
    const blur = 15;
    moveHead();
    drawAsset(snakeColor, snakeX, snakeY, blockSize, blockSize, radius, blur);
}

function moveHead() {
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
}

function drawBody() {
    for (let i = snakeBody.length - 1; i > 0; i--) {
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    for (let i = 0; i < snakeBody.length; i++) {
        drawAsset(snakeBodyColor, snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
}

function placeSnake() {
    snakeX = blockSize * 5;
    snakeY = blockSize * 5;
    velocityX = 0;
    velocityY = 0;
    snakeBody = [];
}

function moveSnake(e = { key: 'ArrowRight' }) {
    if ((e.key == 'ArrowUp' || e.key == 'w') && velocityY != 1) {
        velocityX = 0;
        velocityY = -1;
        moveSound();
    }
    if ((e.key == 'ArrowDown' || e.key == 's') && velocityY != -1) {
        velocityX = 0;
        velocityY = 1;
        moveSound();
    }
    if ((e.key == 'ArrowLeft' || e.key == 'a') && velocityX != 1) {
        velocityX = -1;
        velocityY = 0;
        moveSound();
    }
    if ((e.key == 'ArrowRight' || e.key == 'd') && velocityX != -1) {
        velocityX = 1;
        velocityY = 0;
        moveSound();
    }
}