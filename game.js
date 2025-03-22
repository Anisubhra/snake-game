// game.js
let timer;
let gameOver = false;
let speed = 120;
let score = 0;

const scoreBoard = document.querySelectorAll('.score');
const gameOverScreen = document.querySelector('.game-over');

function updateScoreBoard() {
    scoreBoard.forEach(boardElement => boardElement.textContent = score);
}

function restart() {
    gameOverScreen.classList.remove('active');
    startGame();
}

function showGameOver() {
    setTimeout(() => {
        gameOverScreen.classList.add('active');
        endSound();
    }, 1000);
}

function stopGame() {
    clearInterval(timer);
    showGameOver();
}

function startGame() {
    if (gameOver) init();
    moveSnake();
}

function init() {
    gameOver = false;
    score = 0;
    updateScoreBoard();
    placeSnake();
    placeFood();
    timer = setInterval(update, speed);
}

function update() {
    drawFrame();
    checkScore();
}

function checkGamerOver() {
    if ((snakeX < 0 || snakeX == blockSize * cols) || (snakeY < 0 || snakeY == blockSize * rows)) {
        gameOver = true;
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) gameOver = true;
    }
    return gameOver;
}

function checkScore() {
    if (foodX == snakeX && foodY == snakeY) {
        eatSound();
        score++;
        updateScoreBoard();
        snakeBody.push([foodX, foodY]);
        placeFood();
    }
}