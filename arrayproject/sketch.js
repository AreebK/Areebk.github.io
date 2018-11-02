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
let stone, diamond, brick, player;
let state;
let winW, winH;
let playerX, playerY;
let ycords, xcords;
let movement;

function preload(){
  maze = loadStrings("assets/maze1.txt");
  brick = loadImage("assets/brick.png");
  stone = loadImage("assets/stone.jpg");
  diamond = loadImage("assets/diamond.png");
  player = loadimage("assets/steve/jpg");
}

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  state = "mazeStart";
  rows = maze[0].length;
  cols = maze[0].length;
  cellSize = width / cols;
  cleanUpMaze();
  playerX = cellSize;
  playerY = cellSize;
}

function cleanUpMaze() {
  for (let i=0; i < maze.length; i++) {
    maze[i] = maze[i].split("");  //turns it into a 2d array
  }
}

function draw() {
  xcords = floor(playerX / cellSize);
  ycords = floor(playerY / cellSize);
  background(255);
  drawMaze();   // only created once the start screen is clicked the state has successfully changed
  gameOver();  // creates a gameover screen that can let you back into the maze if you follow the instructions
  playerCreate();   // creates player
}

function playerCreate() {
  if (state === "mazeStart") {
    // will draw chacter which will be able to be controlled in other commands
    image(player, playerX, playerY, cellSize, cellSize);
  }
}

function gameOver() {
  textAlign(CENTER);
  if (state === "dead") {
    background(0);
    textSize(1000);
    fill(0, 255, 0);
    text("GAME OVER", width/ 2, height / 2 - 100);
    fill(255);
    textSize(400);
    text("To restart press 'p''" , width/2, height /2 + 400);
    if (key === "p" || key === "P") {
      window.location.reload(true); // reloads the page in order to play the maze again
    }
  }
}


function drawMaze() {
  if (state === "mazeStart"){
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
}
