/**
 * Proto of Canvas -> CanvasRenderingContext2D
 *
 * Canvas
 *
 */

let x = 0;
let y = 0;
let width = 100;
let height = 100;

let one = null;
const colors = [
  "#DFFF00",
  "#FFBF00",
  "#FF7F50",
  "#DE3163",
  "#9FE2BF",
  "#40E0D0",
  "#6495ED",
  "#CCCCFF",
  "#ffffff",
  "#7B7D7D",
];

const canvas = document.querySelector("canvas");
canvas.style.border = "5px dotted black";
canvas.style.backgroundColor = "#EAECEE";

const context = canvas.getContext("2d");

const btnStart = document.querySelector("#btn-stop");

function getRandomColor(range) {
  const rIndex = Math.floor(Math.random() * range) + 1;
  return colors[rIndex];
}

function getRandomCordinates(rangeX, rangeY) {
  const rX = Math.floor(Math.random() * rangeX) + 1;
  const rY = Math.floor(Math.random() * rangeY) + 1;
  return [rX, rY];
}

function start(delay = 2000) {
  one = setInterval(() => {
    const [rX, rY] = getRandomCordinates(500, 500);

    x = rX; //+ width;
    y = rY; //+ height;

    context.fillStyle = getRandomColor(10);
    context.fillRect(x, y, width, height);

    //Creat the border around the square
    context.beginPath();
    context.rect(x, y, width, height);
    context.lineWidth = 4;
    context.stroke();

    context.beginPath();
    context.arc(
      x + 50,
      y + 50,
      30,
      Math.PI * getRandomNumber(5),
      (Math.PI * getRandomNumber(5)) / getRandomNumber(5),
      true
    );
    context.fill();
    context.stroke();
  }, delay);
}

function speedUp(delay) {
  start(delay);
}

function stop() {
  clearInterval(one);
}

function getRandomNumber(range) {
  return Math.floor(Math.random() * range) + 1;
}

//start();

//=========== Example Canvas

const exc = document.querySelector("#example-canvas");
const context_e = exc.getContext("2d");
context_e.lineWidth = 4;
context_e.beginPath();
context_e.rect(100, 100, 400, 400);
context_e.stroke();

context_e.beginPath();
context_e.arc(300, 300, 100, Math.PI / 10, Math.PI * 2);
context_e.stroke();
