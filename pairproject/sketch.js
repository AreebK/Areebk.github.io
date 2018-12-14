// Asteroid Destoyer
// Areeb Khan, Tyndall Johnston, Edam ____
// Due Date 12/5/2018 (We had an extension)
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = 5;
    this.offScreen = false;
    this.imageToDisplay = theImage;
  }

  update() {
    this.x += this.dx;
    this.y += this.dy;
    if (this.x >= width + this.radius || this.x <= 0 - this.radius || this.y >= height + this.radius || this.y <= 0 - this.radius) {
      this.offScreen = true;
    }
  }

  display() {
    // fill(255);
    // ellipse(this.x, this.y, this.radius, this.radius);
    imageMode(CENTER);
    image(this.imageToDisplay, this.x, this.y * 1.6);
  }
}

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.imageToDisplay = theImage;
    this.dx = 5;
    this.dy = 5;
    this.w = this.imageToDisplay.width;
    this.h = this.imageToDisplay.height;
    this.bulletArray = [];
    this.isMovingRight = false;
    this.isMovingLeft = false;
  }

  handleKeyPress() {
    if (key === "a") {
      this.isMovingLeft = true;
    }
    if (key === "d") {
      this.isMovingRight = true;
    }

    if (key === " ") {
      let someBullet = new Bullet(this.x, this.y, 0, -10, laserImg);
      this.bulletArray.push(someBullet);
    }
  }

  handleKeyRelease() {
    if (key === "a") {
      this.isMovingLeft = false;
    }
    if (key === "d") {
      this.isMovingRight = false;
    }
  }

  update() {
    //move ship
    if (this.isMovingRight) {
      this.x += this.dx;
    }
    if (this.isMovingLeft) {
      this.x -= this.dx;
    }
    if (this.x >= 1575){
      this.x -= this.dx;
    }
    if (this.x <= 25){
      this.x += this.dx;
    }

    //show the asteroids
    for (let i = this.bulletArray.length - 1; i >= 0; i--) {
      this.bulletArray[i].update();
      this.bulletArray[i].display();
      if (this.bulletArray[i].offScreen) {
        this.bulletArray.splice(i, 1);
      }
    }
  }

  display() {
    rectMode(CENTER);
    fill(255, 255, 255);
    rect(this.x, this.y + this.h / 2.2, 50, 70); //divide this.w/5
    imageMode(CENTER);
    image(this.imageToDisplay, this.x, this.y + this.h / 2.2, 50, 70);
  }
}


let asteroids = []; // array to hold Asteroids objects
let spaceShip;
let shipImg, laserImg, aster1, aster2, aster3;
let music, hplost, gameover, gunshot;
let state, jokeSound, backgroundNoise;
let canvasWidth, canvasHeight;
let hoverPlay = false; // 2D Collide function that defaults the play button as false
let hoverControls = false; // 2D Collide function that defaults the Control button as false
let hoverBackControl = false; // 2D Collide function that defaults the BackControl button as false
let hoverSecret = false; // 2D Collide function that defaults the Secret Menu button as false
let hoverYes = false; // 2D Collide function that defaults the Yes button as false
let hoverNo = false; // 2D Collide function that defaults the No button as false
let fillStart, fillControl, fillSecret, fillYes, fillNo;
let mainMenuScreen, controlText;
let backButtonControls;
let playimg, backimg, controlimg, clicksound, secretimg, yesimg, noimg, jokeClick, jokeStart, jokeback, jokeshootsound, jokehitsound, jokediesound, backgroundmusic, gunShot;

function preload() {
  //Preloading every file from the png, to mp3 files
  mainMenuScreen = loadImage("assets/background.png");
  controlText = loadImage("assets/controlRules.png");
  playimg = loadImage("assets/play.png");
  backimg = loadImage("assets/Back.png");
  controlimg = loadImage("assets/Control.png");
  clicksound = loadSound("assets/Click.mp3");
  secretimg = loadImage("assets/secretMenu.png");
  yesimg = loadImage("assets/yes.png");
  noimg = loadImage("assets/no.png");
  jokeClick = loadSound("assets/jokeClick.mp3");
  jokeStart = loadSound("assets/Jokesoundstart.mp3");
  jokeback = loadSound("assets/jokeBackground.mp3");
  jokeshootsound = loadSound("assets/jokeShoot.mp3");
  jokehitsound = loadSound("assets/jokehit.mp3");
  jokediesound = loadSound("assets/jokedie.mp3");
  shipImg = loadImage("assets/ship.png");
  laserImg = loadImage("assets/laser.png");
  music = loadSound("assets/backgroundmusic.mp3");
  gameover = loadSound("assets/GameOver.mp3");
  gunshot = loadSound("assets/gunshot.mp3");
}

function setup() {
  createCanvas(1600, 790); // Custom Canvas size to fit perfectly on School monitor
  state = "MainMenu"; // The State function defaults to the MainMenu
  canvasWidth = 1600;
  canvasHeight = 790;
  spaceShip = new Ship(width / 2, height / 1.8, shipImg);
  fill(255);
  noStroke();
  jokeSound = "notActive"; // Defaults the Joke Sound Affects to "notActive" and can be accesed through EasterEgg from the Game
  clicksound.setVolume(0.1);
  jokeClick.setVolume(1.6);
  jokeStart.setVolume(0.4);
  jokeback.setVolume(0.23);
  jokeshootsound.setVolume(0.5);
  jokehitsound.setVolume(0.5);
  jokediesound.setVolume(0.5);
  // jokeback.loop(); // The Joke Background music ("As of now cannot function unless you uncomment this loop and comment out the background loop")
  music.setVolume(0.25);
  music.loop();
}


function draw() {
  if (state === "MainMenu") { // When the MainMenu State is true this image is popping up
    image(mainMenuScreen, 0, 0, 1600, 790);
  }
  else if (state === "controlSettings") { // When the Control Settings state is true displays the image showing the controls for the game
    image(controlText, 0, 0, 1600, 790);
  }
  else if (state === "secretMenu") { // When the Secret Menu setting is true, it displays the image letting you chose whether or not you want our "Joke Sound Affects"
    image(secretimg, 0, 0, 1600, 790);
  }
  else if (state === "gameStart") { // When the Game Start setting is true, it displays the game letting you play around
    background(0);

  }
  if (state === "gameStart"){
    detect();
    spaceShip.update();
    spaceShip.display();
    collisionDetect =  collidePointRect(asteroids.posX, asteroids.posY, spaceShip.x, spaceShip.y, 50, 70);
    if (state === "gameOver"){
      background(255);
    }


    let t = frameCount / 60; // update time

    // create a random number of Asteroids each frame
    for (let i = 0.5; i < random(0.51); i++) {
      asteroids.push(new Asteroid()); // append Asteroids object
    }
    for (let aster of asteroids) {
      aster.update(t);
      aster.display();
    }
  }

  mainMenu();
  hoverPlay = collidePointRect(mouseX, mouseY, 400, 220, 1600/2 - 100, 790/4 - 33.34); // Sets region to click on the 2D collide Function
  hoverControls = collidePointRect(mouseX, mouseY, 575, 500.3334, 350, 175/2); // Sets region to click on the 2D collide Function
  hoverBackControl = collidePointRect(mouseX, mouseY, 100, 665, 175, 100); // Sets region to click on the 2D collide Function
  hoverSecret = collidePointRect(mouseX, mouseY, 0, 0, 10, 10); // Sets region to click on the 2D collide Function
  hoverYes = collidePointRect(mouseX, mouseY, 400, 220, 1600/2 - 100, 790/4 - 33.34); // Sets region to click on the 2D collide Function
  hoverNo = collidePointRect(mouseX, mouseY, 575, 500.3334, 1600/2 - 100, 790/4 - 33.34); // Sets region to click on the 2D collide Function
}

function mainMenu() {
  if (state === "MainMenu") {
    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillStart = controlStart();
    fill(fillStart);
    rect(400, 220, 1600/2 - 100, 790/4 - 33.34);
    image(playimg, 400 + 215, 220 + 40, 1600/6, 790/7 ); // Image Files that displays what button does
    pop();

    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillControl = controlFill();
    fill(fillControl);
    rect(575, 500.3334, 350, 175/2);
    image(controlimg, 575 + 60.5, 500.3334 + 20, 350/1.5, 175/3); // Image Files that displays what button does
    pop();

    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillSecret = controlSecret();
    fill(fillSecret);
    rect(0, 0, 10, 10);
    pop();
  }
  else if (state === "controlSettings") {
    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillBack = backFill();
    fill(fillBack);
    rect(100, 665, 175, 65);
    image(backimg, 100 + 30.5, 665 + 15, 115, 35); // Image Files that displays what button does
    pop();
  }
  else if (state === "secretMenu") {
    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillBack = backFill();
    fill(fillBack);
    rect(100, 665, 175, 65);
    image(backimg, 100 + 30.5, 665 + 15, 115, 35); // Image Files that displays what button does
    pop();

    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillYes = controlYes();
    fill(fillYes);
    rect(500, 220, 1600/2 - 300, 790/4 - 33.34);
    image(noimg, 630, 240, 1600/3 - 275, 790/5 - 25); // Image Files that displays what button does (Since this is an easteregg we meant to have them switched for a confusing time for the player)
    pop();

    push(); // Creating rectangles that are linked to 2d Collide functions
    let fillNo = controlNo();
    fill(fillNo);
    rect(500, 500.3334, 1600/2 - 300, 790/4 - 33.34);
    image(yesimg, 630, 521, 1600/3 - 275, 790/5 - 25); // Image Files that displays what button does (Since this is an easteregg we meant to have them switched for a confusing time for the player)
    pop();


  }
}

function controlStart() {
  if (state === "MainMenu"){
    if(hoverPlay){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillStart = color(255);
    }
    else{
      fillStart = color(194, 239, 255);
    }
    return fillStart;
  }
}

function backFill() {
  let fillBack;
  if (state === "controlSettings" || state === "secretMenu"){
    if(hoverBackControl){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillBack = color(255);
    }
    else{
      fillBack = color(194, 239, 255);
    }
    return fillBack;
  }
}

function controlSecret() {
  // let fillControl;
  if (state === "MainMenu"){
    if(hoverSecret){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillSecret = color(255);
    }
    else{
      fillSecret = color(194, 239, 255);
    }
    return fillSecret;
  }
}


function controlFill() {
  // let fillControl;
  if (state === "MainMenu"){
    if(hoverControls){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillControl = color(255);
    }
    else{
      fillControl = color(194, 239, 255);
    }
    return fillControl;
  }
}

function controlYes() {
  // let fillControl;
  if (state === "secretMenu"){
    if(hoverYes){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillYes = color(255);
    }
    else{
      fillYes = color(194, 239, 255);
    }
    return fillYes;
  }
}

function controlNo() {
  // let fillControl;
  if (state === "secretMenu"){
    if(hoverNo){ // This means if mouse x and y are in the certian cordinates then it will return triggering the if staement
      fillNo = color(255);
    }
    else{
      fillNo = color(194, 239, 255);
    }
    return fillNo;
  }
}

function Asteroid() {
  // initialize coordinates
  this.posX = random(0, width);
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(40, 40);

  // chosen so the Asteroids are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    let w = 0.5; // angular speed
    let angle = w * time + this.initialangle;
    this.posY += pow(this.size, 0.01);

    // delete Asteroids if past end of screen
    if (this.posY > height) {
      let index = asteroids.indexOf(this);
      asteroids.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

function detect() {
  if (collisionDetect){
    state = "gameover";
  }
}




function keyPressed() {
  spaceShip.handleKeyPress();
}

function keyReleased() {
  spaceShip.handleKeyRelease();
}



function mousePressed() {
  if (state === "MainMenu"){
    if (hoverPlay) {
      if (jokeSound === "notActive") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        clicksound.play();
      }
      else if (jokeSound === "Active") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        jokeClick.play();
        jokeStart.play();
      }
      state = "gameStart";
    }
    else if (hoverControls) {
      if (jokeSound === "notActive") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        clicksound.play();
      }
      else if (jokeSound === "Active") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        jokeClick.play();
      }
      state = "controlSettings";
    }
    else if (hoverSecret) {
      if (jokeSound === "notActive") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        clicksound.play();
      }
      else if (jokeSound === "Active") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        jokeClick.play();
      }
      state = "secretMenu";
    }
  }
  else if (state === "controlSettings") {
    if (hoverBackControl){
      if (jokeSound === "notActive") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        clicksound.play();
      }
      else if (jokeSound === "Active") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        jokeClick.play();
      }
      state = "MainMenu";
    }
  }
  else if (state === "secretMenu") {
    if (hoverBackControl){
      if (jokeSound === "notActive") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        clicksound.play();
      }
      else if (jokeSound === "Active") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        jokeClick.play();
      }
      state = "MainMenu";
    }
    else if (hoverNo){
      if (jokeSound === "notActive") {
        if (jokeSound === "notActive") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
          clicksound.play();
        }
        else if (jokeSound === "Active") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
          jokeClick.play();
        }
      }
      else if (jokeSound === "Active") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        jokeClick.play();
      }
      jokeSound = "notActive";
    }
    else if (hoverYes){
      if (jokeSound === "notActive") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        clicksound.play();
      }
      else if (jokeSound === "Active") { // Plays sound and checks if the jokeSound is active or not for our easter egg noises
        jokeClick.play();
      }
      jokeSound = "Active";
    }
  }
}
