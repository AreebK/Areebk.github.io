// State Variables Assignment
// Areeb Khan
// October 8th, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//All Varibales

let gif_loadImg, gif_createImg;

function preload() {
  gif_loadImg = loadImage("kitty.gif");
  gif_createImg = createImg("kitty.gif");
}

function setup() {
  createCanvas(500, 700);
  background(0);
}

function draw() {
  // loads only first frame
  image(gif_loadImg, 50, 50);

  // updates animation frames by using an html
  // img element, positioning it over top of
  // the canvas.
  gif_createImg.position(50, 350);
}
