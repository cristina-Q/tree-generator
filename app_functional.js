// import { getRandomHEXcolor } from './module/random.js';
// let randomColor = getRandomHEXcolor();
// ----------------

let treeCanvas;
let canvasWidth = document.body.clientWidth;
let canvasHeight = document.body.clientHeight;

document.addEventListener('DOMContentLoaded', main);
function main() {
  console.log(`DOM is active`);

  treeCanvas = document.getElementById('treeCanvas');
  treeCanvas.width = canvasWidth;
  treeCanvas.height = canvasHeight;
  const treeLocation = [canvasWidth * 0.5, canvasHeight * 0.98];
  drawBranches(treeCanvas, treeLocation, 150, 0, 20);
}

// use a recursiv function to call itself multiple times for generating a fractal model
// in this case pattern in a simple line (the branch)
function drawBranches(canvas, startXY, branchLength, branchRotate, branchThick) {
  const ctx = canvas.getContext('2d'); //give acces to all drawing methods
  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = branchThick;
  ctx.translate(...startXY); //start point(x,y) growing tree on canvas (canvas origin point)

  // add a rotation to the canvas
  // the rotation center point is always the canvas origin
  ctx.rotate((branchRotate * Math.PI) / 180); // convert degree to units of angle -> 180deg = PI radians

  ctx.moveTo(0, 0);
  ctx.lineTo(0, -branchLength); // growing up on the y-axis
  ctx.stroke(); // draw the line

  //change until it looks like a pin tree
  if (branchLength > 15) {
    drawBranches(canvas, [0, -branchLength], branchLength * 0.6, 15, branchThick * 0.5);
    drawBranches(canvas, [0, -branchLength], branchLength * 0.5, 40, branchThick * 0.5);
    drawBranches(canvas, [0, -branchLength], branchLength * 0.5, 60, branchThick * 0.5);

    drawBranches(canvas, [0, -branchLength], branchLength * 0.8, 0, branchThick * 0.5);

    drawBranches(canvas, [0, -branchLength], branchLength * 0.6, -15, branchThick * 0.5);
    drawBranches(canvas, [0, -branchLength], branchLength * 0.5, -40, branchThick * 0.5);
    drawBranches(canvas, [0, -branchLength], branchLength * 0.5, -60, branchThick * 0.5);
  }

  ctx.restore(); //restore all transformations to ctx.save()
}
