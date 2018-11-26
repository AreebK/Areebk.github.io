// Collide Example
//Areeb Khan
//11/20/2018


let hit = false;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw(){
  noStroke();
  rect(windowWidth/2,windowHeight/2,200,100);

  hit = collidePointRect(windowWidth/2,windowHeight/2,400,100,200,100); //see if the mouse is in the rect

  if(hit){ //change color!
    fill("purple");
  }
  else{
    fill("green");
  }
}
