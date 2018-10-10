// State Variables Assignment
// Areeb Khan
// October 8th, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//All Varibales
let cat_loadimg, cat_createimg;

function preload(){
  cat_loadimg = loadImage ("assets/kitty.gif");
  cat_createimg = createImg("assets/kitty.gif");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("yellow");
  //noLoop();
}

function draw() {
  cat_createimg.position(windowWidth/2-100,windowHeight/2)-100; //loads GIF correctly
}
