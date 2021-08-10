var path, boy, leftBoundary, rightBoundary;
var pathImg, boyImg;
var i;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png")
  boyImg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY = 3
  path.scale = 1.5

  if(path.y > 400){
    path.y = height/2;
  }

  boy = createSprite(150,350,20,20)
  boy.scale=0.08
  boy.addAnimation("Running", boyImg)





  leftBoundary = createSprite(0,0,100,850)
  leftBoundary.visible = false

  rightBoundary = createSprite(410,0,100,850)
  rightBoundary.visible = false
}


function draw() {
  background(0);
  path.velocityY = 4;

  boy.x = World.mouseX

  edges = createEdgeSprites
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)

  

  drawSprites()
}