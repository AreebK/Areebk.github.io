// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let boxSize;
let filledwithblack;



function setup() {
  createCanvas(600,600);
  boxSize = width/8;
  filledwithblack = false;
}

function draw() {
  for (let i = 0; i < 8; i++){
    for (let j = 0; j < 8; j++){
      if (filledwithblack) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(i * boxSize,j * boxSize ,boxSize,boxSize);
      filledwithblack = !filledwithblack;
    }
    filledwithblack = filledwithblack;
  }
}
