var movingRectangle ;
var fixedRectangle ;

function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(200, 200, 50, 50);
  movingRectangle = createSprite(400,200,70,80) ;

  fixedRectangle.shapeColor  = "blue" ;
  movingRectangle.shapeColor = "blue " ;
}

function draw() {
  background(255,255,255);  
 movingRectangle.x = World.mouseX ;
 movingRectangle.y = World.mouseY ;
 
 console.log(movingRectangle.y - fixedRectangle.y) ;

 if (movingRectangle.x - fixedRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 && 
  fixedRectangle.x - movingRectangle.x < fixedRectangle.width/2 + movingRectangle.width/2 &&
  movingRectangle.y - fixedRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2 &&
  fixedRectangle.y - movingRectangle.y < fixedRectangle.height/2 + movingRectangle.height/2) {
   movingRectangle.shapeColor = "green" ;
   fixedRectangle.shapeColor = "green" ;
  }

  else {
    fixedRectangle.shapeColor  = "blue" ;
    movingRectangle.shapeColor = "blue " ;
  }
 
  drawSprites();
}