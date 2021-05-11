var r1,movingRect;
var r1
function setup() {
  createCanvas(800,400);
  r1= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  r1=createSprite(300,300,50,60)
  

}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
if(isTouching(movingRect,r1))
  {movingRect.shapeColor="red";
  r1.shapeColor="red";

}
else{movingRect.shapeColor="green";
r1.shapeColor="green";

}
  drawSprites();
}

