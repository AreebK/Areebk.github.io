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
let hoverBackControl = false;
let fillStart, fillControl;
let mainMenuScreen, controlText;
let backButtonControls;
let playimg, backimg, controlimg, clicksound;

function preload() {
  mainMenuScreen = loadImage("assets/background.png");
  controlText = loadImage("assets/controlRules.png");
  playimg = loadImage("assets/play.png");
  backimg = loadImage("assets/Back.png");
  controlimg = loadImage("assets/Control.png");
  clicksound = loadSound("assets/Click.mp3");
}

function setup() {
  createCanvas(1600, 790);
  state = "MainMenu";
  canvasWidth = 1600;
  canvasHeight = 790;

}

function draw() {
  if (state === "MainMenu") {
    image(mainMenuScreen, 0, 0, 1600, 790);
  }
  else if (state === "controlSettings") {
    image(controlText, 0, 0, 1600, 790);
  }
  mainMenu();
  hoverPlay = collidePointRect(mouseX, mouseY, 400, 220, 1600/2 - 100, 790/4 - 33.34);
  hoverControls = collidePointRect(mouseX, mouseY, 575, 500.3334, 350, 175/2);
  hoverBackControl = collidePointRect(mouseX, mouseY, 100, 665, 175, 100);
  if (state === "gameStart") {
    background(255, 0, 0);
  }
}

function mainMenu() {
  if (state === "MainMenu") {
    push();
    let fillStart = controlStart();
    fill(fillStart);
    rect(400, 220, 1600/2 - 100, 790/4 - 33.34);
    image(playimg, 400 + 215, 220 + 40, 1600/6, 790/7 );
    pop();

    push();
    let fillControl = controlFill();
    fill(fillControl);
    rect(575, 500.3334, 350, 175/2);
    image(controlimg, 575 + 60.5, 500.3334 + 20, 350/1.5, 175/3);
    pop();
  }
  else if (state === "controlSettings") {
    push();
    let fillBack = backFill();
    fill(fillBack);
    rect(100, 665, 175, 65);
    image(backimg, 100 + 30.5, 665 + 15, 115, 35);
    pop();
  }
}

function controlStart() {
  if (state === "MainMenu"){
    if(hoverPlay){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillStart = color(255);
    }
    else{
      fillStart = color(194, 239, 255);
    }
    return fillStart;
  }
}

function backFill() {
  let fillBack;
  if (state === "controlSettings"){
    if(hoverBackControl){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillBack = color(255);
    }
    else{
      fillBack = color(194, 239, 255);
    }
    return fillBack;
  }
}




function controlFill() {
  // let fillControl;
  if (state === "MainMenu"){
    if(hoverControls){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillControl = color(255);
    }
    else{
      fillControl = color(194, 239, 255);
    }
    return fillControl;
  }
}


function mousePressed() {
  if (state === "MainMenu"){
    if (hoverPlay) {
      clicksound.play;
      state = "gameStart";
    }
    else if (hoverControls) {
      clicksound.play;
      state = "controlSettings";
    }
  }
  else if (state === "controlSettings") {
    if (hoverBackControl){
      clicksound.play;
      state = "MainMenu";
    }
  }
}
