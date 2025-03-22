// board.js
const boardColor = 'white';
const blockSize = 15;
const rows = 30;
const cols = 30;
const board = document.getElementById('board');
const context = board.getContext('2d');
board.height = blockSize * rows;
board.width = blockSize * cols;

function drawBoard() {
    drawAsset(boardColor, 0, 0, board.width, board.height);
}

function drawFrame() {
    drawBoard();
    drawFood();
    drawSnake();
}

function drawAsset(color, x, y, width, height, radius = 0, blur = 0) {
    context.strokeStyle = color;
    context.fillStyle = color;
    context.shadowBlur = blur;
    context.shadowColor = color;
    context.beginPath();
    context.roundRect(x, y, width, height, radius);
    context.stroke();
    context.fill();
}