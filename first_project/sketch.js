// define variables
var onswitchImg;
var offswitchImg;
var rickrollImg;
var y = 150;
var x = 150;
var yspeed = 0.5;
var xspeed = 0.5;
var on = false;
var myFont;
var rickSound;


// this function is run once berfore page load
// it is running while "Loading..." sits on screen
function preload() {
  // load image from directory folder
  onswitchImg = loadImage('images/onswitch.png');
  offswitchImg = loadImage('images/offswitch.png');
  rickrollImg = loadImage('images/rickroll.jpg');
  // load font
  myFont = loadFont('fonts/panton.otf');
  // load clickSound
  rickSound = loadSound('sound/rickroll.mp3')
}

// only happens once
function setup() {
  // create canvas size
  createCanvas(windowWidth, windowHeight);
}

// loops never ending
function draw() {
  // change background color
  if (on) {
    background(255, 250, 240);
  } else {
    background(25);
  }

  // draw lightswitch image and its position
  image(offswitchImg, 800, 400);
  offswitchImg.resize(145, 258);
  onswitchImg.resize(145, 258);
  // click on button to turn on light
  if (mouseX > 830 && mouseX < 880 && mouseY > 470 && mouseY < 490) {
      if (mouseIsPressed) {
        on = true;
        image(onswitchImg, 800, 400);
        onswitchImg.resize(145, 258);
        rickSound.setVolume(0.1, 0.5);
        rickSound.play();
        rickrollImg.resize(600, 400);
        image(rickrollImg, 100, 100);
        image(rickrollImg, 500, 500);
        image(rickrollImg, 300, 300);
        image(rickrollImg, 300, 800);
        image(rickrollImg, 800, 100);
        image(rickrollImg, 900, 300);
        image(rickrollImg, 900, 500);
        image(rickrollImg, 1000, 1000);
      }
  }
  // click off button to turn off light
  if (mouseX > 830 && mouseX < 890 && mouseY > 550 && mouseY < 580) {
      if (mouseIsPressed) {
        on = false;
        rickSound.stop();
        // image(offswitchImg, 800, 400);
        // offswitchImg.resize(145, 258);

      }
  }

  // draw fonts and set its position
  noStroke();
  fill('#ED225D');
  textFont(myFont);
  textSize(30);
  text('C', 700, y);
  text('L', 730, x);
  text('I', 760, y);
  text('C', 790, x);
  text('K', 820, y);
  text('ON', 880, x);
  text('A', 950, y);
  text('N', 980, x);
  text('D', 1010, y);
  text('OFF', 1050, x);

  // bounce from top to bottom in a fixed position
  if (y > 180 || y < 150) {
    yspeed = yspeed * -1;
  }
  y = y + yspeed;
  if (x > 185 || x < 150) {
    xspeed = xspeed * -1;
  }
  x = x + xspeed;
}


// waiting for 'event' aka click mouse
// function mousePressed(){
//   if (mouseX > 830 && mouseX < 880 && mouseY > 470 && mouseY < 490) {
//   on = !on;
//   }
// }
