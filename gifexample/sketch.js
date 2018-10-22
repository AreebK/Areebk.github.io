// State Variables Assignment
// Areeb Khan
// October 8th, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//All Varibales
let cat_loadimg, cat_createimg;
let x,y;

function preload(){
  cat_loadimg = loadImage ("assets/kitty.gif");
  cat_createimg = createImg("assets/kitty.gif");
}

function setup() {
  createCanvas(400,400);
  background("yellow");
}

function draw() {
  cat_createimg.position(0,0);
  //loads GIF correctly;
}
