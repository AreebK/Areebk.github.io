// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let state;
let canvasWidth, canvasHeight;
let hoverPlay = false;
let hoverControls = false;
let hoverBack = false;
let hoverBackControl = false;
let fillStart, fillControl;
let mainMenuScreen, controlText;

function preload() {
  mainMenuScreen = loadImage("assets/background.png");
  controlText = loadImage("assets/controlRules.png");
}

function setup() {
  createCanvas(1600, 790);
  state = "MainMenu";
  canvasWidth = 1600;
  canvasHeight = 790;
  if (state === "MainMenu") {
    image(mainMenuScreen, 0, 0, 1600, 790);
  }
}

function draw() {
  mainMenu();
  hoverPlay = collidePointRect(mouseX, mouseY, 400, 220, 1600/2 - 100, 790/4 - 33.34);
  hoverControls = collidePointRect(mouseX, mouseY, 575, 500.3334, 320, 175/1.5 );
  if (state === "gameStart") {
    background(255, 0, 0);
  }
  else if (state === "controlSettings") {
    image(controlText, 0, 0, 1600, 790);

  }
}

function mainMenu() {
  if (state === "MainMenu") {
    push();
    let fillStart = controlStart();
    fill(fillStart);
    rect(400, 220, 1600/2 - 100, 790/4 - 33.34);
    pop();

    push();
    let fillControl = controlFill();
    fill(fillControl);
    rect(575, 500.3334, 350, 175/2);
    pop();
  }
}

function controlStart() {

  if (state === "MainMenu"){
    if(hoverPlay){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillStart = color(255);
    }
    else{
      fillStart = color(0,255,255);
    }
    return fillStart;
  }
}

function backButton() {
  
}


function controlFill() {
  let fillControl;
  if (state === "MainMenu"){
    if(hoverControls){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillControl = color(255);
    }
    else{
      fillControl = color(0, 255, 255);
    }
    return fillControl;
  }
}


function mousePressed() {
  if (state === "MainMenu"){
    if (hoverPlay) {
      state = "gameStart";
    }
    else if (hoverControls) {
      state = "controlSettings";
    }
  }
}
