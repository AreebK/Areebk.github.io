// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

var img;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage("assets/kden.PNG");
}

function draw() {
  background(0);

  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);
  var multiple = random(1, 0.01))

  push();
  rotateZ(frameCount * multiple);
  rotateX(frameCount * multiple);
  rotateY(frameCount * multiple);
  texture(img);
  box(80);
  pop();

  push();
  translate(-width / 4, -height / 4, 0);
  rotateZ(frameCount * multiple);
  rotateX(frameCount * multiple);
  rotateY(frameCount * multiple);
  texture(img);
  box(80);
  pop();

  push();
  translate(width / 4, -height / 4, 0);
  rotateZ(frameCount * multiple);
  rotateX(frameCount * multiple);
  rotateY(frameCount * multiple);
  texture(img);
  box(80);
  pop();

  push();
  translate(-width / 4, height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(80);
  pop();

  push();
  translate(width / 4, height / 4, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(80);
  pop();


}
