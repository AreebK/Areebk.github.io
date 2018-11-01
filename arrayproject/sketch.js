// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let maze;
let cols = 15;
let rows = 15;
let cellSize;
let brick;
let stone;
let diamond;
let state;
let start;


function preload(){
  maze = loadStrings("assets/maze1.txt");
  brick = loadImage("assets/brick.png");
  stone = loadImage("assets/stone.jpg");
  diamond = loadImage("assets/diamond.png");
  start = loadImage("assets/startscreen.png");
}

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else if (windowHeight > windowWidth) {
    createCanvas(windowWidth, windowWidth);
  }
  rows = maze[0].length;
  cols = maze[0].length;
  cellSize = width / cols;
  cleanUpMaze();
}

function cleanUpMaze() {
  for (let i=0; i < maze.length; i++) {
    maze[i] = maze[i].split("");  //turns it into a 2d array
  }
}

function draw() {
  background(255);
  drawMaze();
}



function drawMaze() {
  for (let i = 0; i < cols; i++){
    for (let j = 0; j < rows; j++){
      if (maze[j][i] === "0"){
        stroke(0);
        fill(255);
        image(stone,i * cellSize,j* cellSize, cellSize, cellSize);
      }
      else if (maze[j][i] === "1") {
        stroke(0);
        fill(0);
        image(brick,i * cellSize,j* cellSize, cellSize, cellSize);
      }
      else if (maze[j][i] === "2") {
        stroke(0);
        fill(0);
        image(diamond,i * cellSize,j* cellSize, cellSize, cellSize);
      }
    }
  }
  return drawMaze;
}
