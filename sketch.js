
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score=0;
var ground,groundImg;
var survivalTime=0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(400,400);

  monkey=createSprite(70,384,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,384,900,10);
  console.log(ground.x);
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
}


function draw() {
  background("lightblue");
ground.velocityX=-4;
  
  if(ground.x<0)
    {
       ground.x=ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y>100)
    {
      monkey.velocityY=-12;
    }
  monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,300,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
  if(monkey.isTouching(bananaGroup))
    {
      bananaGroup.destroyEach();
      score=score+2;
    }
  
  
  food();
  obstacles();
  drawSprites();
}

function food()
{
  if(frameCount%80==0)
    {
  banana=createSprite(400,Math.round(random(120,200)),10,10);
  banana.addImage(bananaImage);
  banana.scale=0.1;
      banana.velocityX=-4;
      banana.lifeTime=400;
      bananaGroup.add(banana);
    }
}

function obstacles()
{
  if(frameCount%130==0)
    {
      obstacle=createSprite(400,365,10,10);
      obstacle.addImage(obstacleImage);
      obstacle.scale=0.1;
      obstacle.velocityX=-4;
      obstacleGroup.add(obstacle);
    }
}



