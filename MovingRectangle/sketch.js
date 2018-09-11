// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x;
let dx;
let rectWdith;



function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  dx = 5;
  rectWidth = 50
}

function draw() {
  background(247, 159, 121)


//move rectangle

x += dx;

//check if you hit the wall
if (x > width - 50 || x < 0) {
  dx = dx * -1;
}


  fill(227,240,155)
  rect(x,400,rectWidth,150)

}
