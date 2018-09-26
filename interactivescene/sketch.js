// Interactive Scene
// Areeb Khan
// Wednesday, 26th. 2018
//
// Extra for Experts:
// - I added an audio and image files to my project, and played around with 3D shapes and how they are made

let kden;
//Image File
let noise;
//Audio File
let x, y;
let widthCircle, heightCircle;
let value1, value2, value3;
// To change colors


function preload() {
  noise = loadSound("assets/oof.mp3");
  kden = loadImage("assets/kden.PNG");
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  x = windowWidth/2;
  y = windowHeight/2;
  widthCircle = 30;
  heightCircle = 30;
  value1 = 255
  value2 = 255
  value3 = 255
}

function mousePressed() {
  //If pressed inside box, the noise will play
  if (mouseX >= x - 80 && mouseX <= x+80 && mouseY >= y -80 && mouseY <= y+80 ){
    noise.play();
  }
}

function draw() {
    background(0);
    var locX = mouseX - height / 2;
    var locY = mouseY - width / 2;

    //make a sun like affect on the cube with the image
    ambientLight(60, 60, 60);
    pointLight(255, 255, 255, locX, locY, 100);

    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    texture(kden);
    box(80);
    pop();


    push();
    translate(-width / 4, -height / 4, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(value1, value2, value3);
    torus(80, 20, 64, 64);
    pop();

    push();
    translate(-width / 4, height / 4, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(value1, value2, value3);
    box(80);
    pop();

    push();
    translate(width / 4, -height / 4, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(value1, value2, value3);
    box(80);
    pop();

    push();
    translate(width / 4, height / 4, 0);
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    fill(value1, value2, value3);
    torus(80, 20, 64, 64);
    pop();
}

function keyPressed(){
  //If the RGB Keys are pressed it will change colors on the shapes 
  if (keyCode === 82 || keyCode === 66 || keyCode === 71){
    value1 = random(255);
    value2 = random(255);
    value3 = random(255);
  }
}
