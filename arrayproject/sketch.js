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
let state = 0;
let start;
let winW;
let winH;


function preload(){
  maze = loadStrings("assets/maze1.txt");
  brick = loadImage("assets/brick.png");
  stone = loadImage("assets/stone.jpg");
  diamond = loadImage("assets/diamond.png");
  start = loadImage("assets/startscreen.png");
}

function setup() {
  if (state === 0){
    createCanvas(windowWidth, windowHeight);
  }
  else if (state === 1 && windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
    winH = windowHeight;
  }
  else if (state === 1 && windowHeight > windowWidth) {
    createCanvas(windowWidth, windowWidth);
    winW = windowWidth;
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
  startScreen();  //creates a start screen in which you will have to click to make the state change to create the Maze
  drawMaze();   // only created once the start screen is clicked the state has successfully changed
  keyTyped();
}

function startScreen() {
  textAlign(CENTER);
  if (state === 0) {
    background(0);
    textSize(500);
    fill(0, 255, 0);
    text("START", width/ 2, height / 2 - 50);
    fill(255);
    textSize(200);
    text("To begin press S", width/2, height /2 + 200);

  }
}

function keyTyped(){
  if (key === "s" || key === "S"){
    state === 1;
    return state;
  }

}

function drawMaze() {
  if (state === 1){
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
