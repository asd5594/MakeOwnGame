var wall1, wall2, wall3, wall4;

var player, ball2, ball1;

var stuff1, stuff2, stuff3, stuff4, stuff5;

var stuff6, stuff7, stuff8, stuff9, stuff10;

var life = 3;
var score = 0;
var invincible = 0;
var stuffGroup;

var gameState = "Level1";
var result;

var playerIMG, ballIMG;

var IMGR, stuffIMG;

function preload(){
  playerIMG = loadAnimation("p1.png", "p2.png")
  ballIMG = loadImage("download (1).png");
  IMGR = loadAnimation("f1.png", "f2.png");
  stuffIMG = loadAnimation("gem.png", "gem.png");
}



function setup() {
  createCanvas(800,800);
  wall1 = createSprite(400, 50, 700, 10);
  wall2 = createSprite(50, 400, 10, 700);
  wall3 = createSprite(400, 750, 700, 10);
  wall4 = createSprite(750, 400, 10, 700); 
wall1.shapeColor="red";
wall2.shapeColor="red";
wall3.shapeColor="red";
wall4.shapeColor="red";

player = createSprite(400,400, 30,30);
player.addAnimation("playerFishL",playerIMG);

player.addAnimation("playerFishR",IMGR);

ball1 = createSprite(200,300, 30, 30);
ball1.shapeColor="green"
ball1.addImage(ballIMG);
ball1.scale=0.3;

ball2 = createSprite(300,300, 30, 30);
ball2.shapeColor="green"
ball2.addImage(ballIMG);
ball2.scale=0.3;

ball1.velocityX= 5;
ball1.velocityY=6;

ball2.velocityX= -4;
ball2.velocityY= -7;

stuff1 = createSprite(200,420,30,30);
stuff2 = createSprite(300,500,30,30);
stuff3 = createSprite(598,600,30,30);
stuff4 = createSprite(320,390,30,30);
stuff5 = createSprite(490,477,30,30);
stuff6 = createSprite(590,100,30,30);
stuff7 = createSprite(198,300,30,30);
stuff8 = createSprite(620,490,30,30);
stuff9 = createSprite(720,477,30,30);
stuff10 = createSprite(377,420,30,30);

stuffGroup = createGroup()
stuffGroup.add(stuff1);
stuffGroup.add(stuff2);
stuffGroup.add(stuff3);
stuffGroup.add(stuff4);
stuffGroup.add(stuff5);
stuffGroup.add(stuff6);
stuffGroup.add(stuff7);
stuffGroup.add(stuff8);
stuffGroup.add(stuff9);
stuffGroup.add(stuff10);
stuffGroup.setAnimationEach("stuffimage",stuffIMG);

}

function draw() {
  background("lightblue");  
  


  ball1.bounceOff(wall1);
  ball1.bounceOff(wall2);
  ball1.bounceOff(wall3);
  ball1.bounceOff(wall4);

  ball2.bounceOff(wall1);
  ball2.bounceOff(wall2);
  ball2.bounceOff(wall3);
  ball2.bounceOff(wall4);
  

  if(keyDown(UP_ARROW)){
    player.y = player.y - 5;
  }

  if(keyDown(DOWN_ARROW)){
    player.y = player.y + 5;
  }

  if(keyDown(LEFT_ARROW)){
    player.x = player.x - 5;
    player.changeAnimation("playerFishL",playerIMG);
  }

  if(keyDown(RIGHT_ARROW)){
    player.x = player.x + 5;
    player.changeAnimation("playerFishR",IMGR);
  }
textSize(20)
stroke("black")
text("lives:" + life, 700,30);
text("score:" + score,300,30);

  if(player.isTouching(ball1)||(player.isTouching(ball2))){
    life = life -1;

    player.x= 250;
    player.y = 350;
    invincible= 1;
  }

  if(player.isTouching(stuff1)){
    score = score + 10;
    stuff1.destroy();
    
  }

  if(player.isTouching(stuff2)){
    score = score + 10;
    stuff2.destroy();
    
  }

  if(player.isTouching(stuff3)){
    score = score + 10;
    stuff3.destroy();
    
  }

  if(player.isTouching(stuff4)){
    score = score + 10;
    stuff4.destroy();
    
  }

  if(player.isTouching(stuff5)){
    score = score + 10;
    stuff5.destroy();
    
  }

  if(player.isTouching(stuff6)){
    score = score + 10;
    stuff6.destroy();
    
  }

  if(player.isTouching(stuff7)){
    score = score + 10;
    stuff7.destroy();
    
  }

  if(player.isTouching(stuff8)){
    score = score + 10;
    stuff8.destroy();
    
  }

  if(player.isTouching(stuff9)){
    score = score + 10;
    stuff9.destroy();
    
  }

  if(player.isTouching(stuff10)){
    score = score + 10;
    stuff10.destroy();
    
  }

  if(invincible = 1){
    var invincible;
    setTimeout(function(){
      invincibile=1
    },3500)

    invinvible = invincible -1;
  }

  if(player.isTouching(wall1)|| player.isTouching(wall2)|| player.isTouching(wall3)|| player.isTouching(wall4)){
    life = life -1;

    player.x= 250;
    player.y = 350;
    invincible= 1;
  }

  if(frameCount % 300 === 0){
    wall1.y = wall1.y + 10;
    wall2.x  = wall2.x + 10;
    wall3.y = wall3.y - 10;
    wall4.x  =wall4.x - 10;
  }
 
  if(life === 0 ){
    gameState = "end"
    result = "lost";
  }

  if(score === 100 && life > 0){
    gameState = "won"
    result = "won";
  }

  if(gameState === "end" || gameState === "won"){
    background("white")
    text("You have " + result + " the game", 100, 400);

    wall1.destroy();
    wall2.destroy();
    wall3.destroy();
    wall4.destroy();
    ball1.destroy();
    ball2.destroy();
    player.destroy();
    stuffGroup.destroyEach();
  }

  drawSprites();
}