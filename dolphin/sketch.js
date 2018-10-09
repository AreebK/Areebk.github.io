// Image Minipulation Demo
// Areeb
// October 9th, 2018
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let dolphin;
let greydolphin;

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(dolphin, 0, 0);
  greydolphin = makeGreyScale(dolphin);
}
function preload() {
  dolphin = loadImage("assets/dolphin.jpeg");
}

function draw() {
}

function makeGreyScale(sourceImage) {
  let img = createImage(sourceImage.width, sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();

  for (let x = 0; x < img.width; x++){
    for (let y = 0; y < img.height; y++) {
      let p = sourceImage.get(x,y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + g + b) / 3;

      let newPixel = color(average, average, average);
      img.set(x, y, newPixel);
    }
  }
  img.updatePixels();
  return img;
}
