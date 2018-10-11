// State Variables Assignment
// Areeb Khan
// October 8th, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//All Varibales
let cat_loadimg, cat_createimg;
let x,y;
let button;

function preload(){
  cat_loadimg = loadImage ("assets/kitty.gif");
  cat_createimg = createImg("assets/kitty.gif");
}

function setup() {
  createCanvas(800, 800);
  background("yellow");
  button = createButton("Simple Button");
  button.position(10, 300);
  button.mousePressed(clickFunction);

  //noLoop();
}

function draw() {
  x = random(300);
  y = random(4);
  if (mouseIsPressed){
    cat_createimg.position(x,y); //loads GIF correctly
  }
}


function clickFunction(){
  background(random(255));
}
