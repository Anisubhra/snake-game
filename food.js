// food.js
const foodColor = '#FF6A6F';
let foodX;
let foodY;

function drawFood() {
    const radius = 100;
    const blur = 20;
    drawAsset(foodColor, foodX, foodY, blockSize, blockSize, radius, blur);
}

function placeFood() {
    foodX = Math.floor(Math.random() * rows) * blockSize;
    foodY = Math.floor(Math.random() * cols) * blockSize;
}