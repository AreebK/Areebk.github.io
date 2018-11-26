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
let fillStart, fillControl;

function setup() {
  createCanvas(1600, 790);
  state = "MainMenu";
  canvasWidth = 1600;
  canvasHeight = 790;
}

function draw() {
  mainMenu();
  hoverPlay = collidePointRect(mouseX, mouseY, 400, 145, 1600/2 - 100, 790/3 - 33.34);
  hoverControls = collidePointRect(mouseX, mouseY, 575, 465.3334, 350, 175);
  // fillStart = fill(112, 25, 112);
  // fillControl = fill(112, 25, 112);

}

function mainMenu() {
  if (state === "MainMenu") {
    push();
    let fillStart = controlStart();
    fill(fillStart);
    rect(400, 145, 1600/2 - 100, 790/3 - 33.34);
    pop();

    push();
    let fillControl = controlFill();
    fill(fillControl);
    rect(575, 465.3334, 350, 175);
    pop();



  }
}

function controlStart() {

  if (state === "MainMenu"){
    if(hoverPlay){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillStart = color(25, 25, 112);
    }
    else{
      fillStart = color(0,255,255);
    }
    return fillStart;
  }
}


function controlFill() {
  let fillControl;
  if (state === "MainMenu"){
    if(hoverControls){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillControl = color(25, 25, 112);
    }
    else{
      fillControl = color(0, 255, 255);
    }
    return fillControl;
  }
}
