/**
 * Proto of Canvas -> CanvasRenderingContext2D
 *
 * Canvas
 *
 */

let x = 10;
let y = 10;
let width = 100;
let height = 100;

let one = null;

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const btnStart = document.querySelector("#btn-stop");

btnStart.addEventListener("click", () => {
  stop();
});

function start() {
  one = setInterval(() => {
    x += width;
    y += height;
    context.fillRect(x, y, width, height);
  }, 2000);
}

function stop() {
  clearInterval(one);
}

start();
