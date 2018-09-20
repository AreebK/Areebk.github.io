var kden;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  kden = loadImage("assets/kden.PNG");
}

function draw() {
  background(0);

  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);


  push();
  rotateZ(frameCount * 0.1);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  texture(kden);
  box(80);
  pop();

  push();
  translate(-width / 4, -height / 4, 0);
  rotateZ(frameCount * 0.1);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  texture(kden);
  box(80);
  pop();

  push();
  translate(width / 4, -height / 4, 0);
  rotateZ(frameCount * 0.1);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  texture(kden);
  box(80);
  pop();

  push();
  translate(-width / 4, height / 4, 0);
  rotateZ(frameCount * 0.1);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  texture(kden);
  box(80);
  pop();

  push();
  translate(width / 4, height / 4, 0);
  rotateZ(frameCount * 0.1);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  texture(kden);
  box(80);
  pop();


}
