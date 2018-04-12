var y;
// velocity of a circle
var yVelocity;
var speed;
var objects = [];
var horizon;
var onGround;
var score;

var mario;
var loser;

// this function is run once berfore page load
// it is running while "Loading..." sits on screen
function preload() {
  //load item from directory folder
  mario = loadSound('sound/mario.mp3')
  loser = loadSound('sound/over.mp3')
}

// only happens once
function setup() {
	//create canvas size
	createCanvas(windowWidth, windowHeight);
	mario.loop(0, 1, 0.4);

	horizon = height - 200;
	y = 700;
	score = yVelocity = 0;
	speed = 6;
	onGround = false;

}

// loops never ending
function draw() {
	background(0);
	//background('#F8F8FF');

	// draw circle
	noStroke();
	ellipse(500, y, 50);
	fill("#FFFFFF");

	//draw a line
	noStroke();
	line(0, horizon, width, horizon);

	if (frameCount % 120 === 0) {
		speed *= 1.05;
	}

    // to make objects slower or faster
	if (frameCount % 30 === 0)
		if (random(0, 1) > 0.7) {
			newObject();
		}

    // score placement
	score++;
	textSize(30);
	fill(255,204,0);
	noStroke();
	textStyle(BOLD);
	textAlign(CENTER);

	text("SCORE: " + score, width / 2, height / 2 - 250)

	updateObjects();
	handleKeys();
}

// new obstacle object aka square blocks
function Object(r, c) {

	this.x = 2000;
	this.size = r;
	this.color = c;
}

// to change every objects to random sizes
function updateObjects() {
	// to loop objects array
	for (var i = objects.length - 1; i >= 0; i--) {
		objects[i].x -= speed;
		var size = objects[i].size;

		if (objects[i].x > -30) {
			// if it's onscreen
			fill(objects[i].color);
			rect(objects[i].x  , horizon - size, size, size);

			var x1 = objects[i].x    + size / 2;
			var y1 = horizon - size / 2;
			// if it collapse, collision occured
			if (dist(x1, y1, 500, y) < size / 2 + 25 ) {
                // to show game over
				textAlign(CENTER);
				textSize(100);
				fill(255,204,0);
				noStroke();
				textStyle(BOLD);
				text("GAME OVER! 😭 ", width / 2, height / 2);
				mario.stop();
				loser.play(0, 1, 0.4);
				noLoop();
			}
		} else {
			// delete from array
			objects.splice(i, 1);

		}
	}
}
// functions for obstacle object to input into window
function newObject(){

    // define object color and sizes
	var obs = new Object(random(20, 60), color(random(255), random(255), random(255)));

    // push objects
	objects.push(obs);
}

// functioin for SPACE BAR to jump
function handleKeys() {

	if (y + 25 + yVelocity < horizon) {

        // if circle is not onGround its false
		yVelocity += 1.5;
		onGround = false;
	} else {
        // if circle is onGround its true
		yVelocity = 0;
		onGround = true;
	}

	// logical Operator for AND is && / OR is || KEYCODE FOR SPACEBAR = 32
	if (keyIsDown(32)) {
		if (onGround) {
			yVelocity -= 20;
			onGround = false;
		}
	}
	// to make circle bounce
	y += yVelocity;
}
