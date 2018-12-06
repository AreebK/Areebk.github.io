// Asteroid Destoyer
// Areeb Khan, Tyndall Johnston, Edam ____
// Due Date 12/5/2018 (We had an extension)
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


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
let playimg, backimg, controlimg, clicksound, secretimg, yesimg, noimg, jokeClick, jokeStart, jokeback, jokeshootsound, jokehitsound, jokediesound;

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
}

function setup() {
  createCanvas(1600, 790); // Custom Canvas size to fit perfectly on School monitor
  state = "MainMenu"; // The State function defaults to the MainMenu
  canvasWidth = 1600;
  canvasHeight = 790;
  jokeSound = "notActive"; // Defaults the Joke Sound Affects to "notActive" and can be accesed through EasterEgg from the Game
  clicksound.setVolume(0.1);
  jokeClick.setVolume(1.0);
  jokeStart.setVolume(0.4);
  jokeback.setVolume(0.23);
  jokeshootsound.setVolume(0.5);
  jokehitsound.setVolume(0.5);
  jokediesound.setVolume(0.5);
  jokeback.loop(); // The Joke Background music ("As of now cannot function unless you uncomment this loop and comment out the background loop")       
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
    background(255, 0, 0);

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
