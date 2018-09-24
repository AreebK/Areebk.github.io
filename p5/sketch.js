<<<<<<< HEAD
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
=======
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let dvd;
let x, y;
let dx, dy;

function preload() {
  dvd = loadImage("assests/dvdlogo.png")
>>>>>>> parent of 9a98a2e... So basically im monoly
}

function setup() {
  createCanvas(windowWidth, windowHeight);
<<<<<<< HEAD
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
=======
  x = width/2;
  y = height/2;
  dx = random(3,0);
  dy = random(3,0);
}

function draw() {
  background(255);
  image(dvd,x,y);



>>>>>>> parent of 9a98a2e... So basically im monoly
}
