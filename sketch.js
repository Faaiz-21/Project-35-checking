var balloon
var balloonImage
var background
var backgroundImage

function preload() {
  backgroundImage = loadImage("Hot Air Ballon-1.png");  
  balloonImage = loadImage("Hot Air Ballon-2.png");
}


function setup() {
  createCanvas(800,400);
  background = createSprite(800,400);
  background.addImage(backgroundImage);
  balloon = createSprite(400, 200, 50, 50);
  balloonImage.addImage(balloonImage);
}

function draw() {
 
  drawSprites();
}