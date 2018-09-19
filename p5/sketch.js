//scroll up and down demo
// Areeb Khan
// september 19th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let doit;
let scalar;

function preload() {
  doit = loadImage("assets/hadtodoit.PNG")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scalar = 1;
}

function draw() {
  background(255)
  image(doit, mouseX, mouseY, doit.width * scalar, doit.height * scalar);

}
function mouseWheel(event){
  if (event.delta>0) {
    scalar *= 1.1;
  }
  else {
    scalar *= 0.9;
  }
  console.log(event)
}
