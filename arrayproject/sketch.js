// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let maze1;
let cols = 15;
let rows = 15;
let cellSize;
let stone, diamond, brick, player;
let state;
let winW, winH;
let playerX, playerY;
let ycords, xcords;
let movement = "Still";
let rateOfSpeed;

function preload(){
  maze1 = loadStrings("assets/maze1.txt");
  brick = loadImage("assets/brick.png");
  stone = loadImage("assets/stone.jpg");
  diamond = loadImage("assets/diamond.png");
  player = loadImage("assets/steve.jpg");
}

function setup() {
  if (windowWidth > windowHeight){
    createCanvas(windowHeight, windowHeight);
  }
  else if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  state = "maze1Start";
  rows = maze1[0].length;
  cols = maze1[0].length;
  cellSize = width / cols;
  cleanUpmaze1();
  playerX = cellSize;
  playerY = cellSize;
  rateOfSpeed = 25;
}

function cleanUpmaze1() {
  for (let i=0; i < maze1.length; i++) {
    maze1[i] = maze1[i].split("");  //turns it into a 2d array
  }
}

function draw() {
  xcords = floor(playerX / cellSize);
  ycords = floor(playerY / cellSize);
  background(255);
  drawmaze1();   // only created once the start screen is clicked the state has successfully changed
  gameOver();  // creates a gameover screen that can let you back into the maze1 if you follow the instructions
  movePlayer(); // base movement for the player
  playerCreate();   // creates player
}

function playerCreate() {
  if (state === "maze1Start") {
    // will draw chacter which will be able to be controlled in other commands
    image(player, playerX - cellSize , playerY - cellSize, cellSize, cellSize);
  }
}

function movePlayer() {
  if (state === "maze1Start"){
    if (frameCount % rateOfSpeed === 0) {
      if (movement === "Up") {
        if (playerY <= 738 || maze1[ycords - 1][xcords] === "1") {
          playerY += cellSize;
        }
      }

      if (movement === "Down") {
        if (playerY >= 738 || maze1[ycords+1][xcords] === "1"){
          playerY = playerY - cellSize;
        }
      }

      if (movement === "Left") {
        if (playerX <= 738 || maze1[ycords][xcords-1] === "1") {
          playerX += cellSize;
        }
      }

      if (movement === "Right") {
        if (playerX >= 738 || maze1[ycords][xcords+1] === "1") {
          playerX -= cellSize;
        }
      }
    }
  }


function keyTyped() {
  // Sends message to the movePlayer function so the player can move
  if (state === "maze1Start") {
    if (key === "s" || key === "S") {
      movement = "Down";
    }
    else if (key === "w" || key === "W") {
      movement = "Up";
    }
    else if (key === "a" || key === "A"){
      movement = "Left";
    }
    else if (key === "d" || key === "D"){
      movement = "Right";
    }
  }
}


function gameOver() {
  //GameOver Screen displays
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
      window.location.reload(true); // When the Key p is pressed the page reloads letting you play the maze1 again
    }
  }
}


function drawmaze1() {
  if (state === "maze1Start"){
    for (let i = 0; i < cols; i++){
      for (let j = 0; j < rows; j++){
        if (maze1[j][i] === "0"){
          stroke(0);
          fill(255);
          image(stone,i * cellSize,j* cellSize, cellSize, cellSize); // creates the floor texture
        }
        else if (maze1[j][i] === "1") {
          stroke(0);
          fill(0);
          image(brick,i * cellSize,j* cellSize, cellSize, cellSize); // creates the wall texture
        }
        else if (maze1[j][i] === "2") {
          stroke(0);
          fill(0);
          image(diamond,i * cellSize,j* cellSize, cellSize, cellSize); // creates the lock where when you are on it you will go to another maze1
        }
      }
    }
    return drawmaze1;
  }
}
