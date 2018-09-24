let kden;
let noise;

function preload() {
  noise = loadSound("assets/oof.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  kden = loadImage("assets/kden.PNG");
}

function mousePressed() {

  noise.play();

}

  noise.play()
}

function draw() {
  background(0);

  var locX = mouseX - height / 2;
  var locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);

  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(kden);
  box(80);
  pop();

}
