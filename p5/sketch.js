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
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  dx = random(3,0);
  dy = random(3,0);
}

function draw() {
  background(255);
  image(dvd,x,y);



}
