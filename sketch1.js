var movingRect,fixedRect;

function setup() {
  createCanvas(1890,600);
  //createSprite(400, 200, 50, 50);

  movingRect= createSprite(200,200,50,80);
  movingRect.shapeColor= "green";
  movingRect.velocityX = 4;


  fixedRect = createSprite(500,200,80,30);
  fixedRect.shapeColor="green";
  fixedRect.velocityX = -3
}

function draw() {
  background(0);  



if(movingRect.x - fixedRect.x < fixedRect.width/2 +movingRect.width/2
  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2){

    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX *(-1);

  }
  if(fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2
  &&movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY = movingRect.velocityY* (-1);
    fixedRect.velocityY = fixedRect.velocityY *(-1);
}

  drawSprites();
}