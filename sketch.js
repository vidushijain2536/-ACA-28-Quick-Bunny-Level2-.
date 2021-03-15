var player;
var target;
var edges;
var wormGroup;

function setup() {
createCanvas(600,600);
wormGroup= new Group();

edges=createEdgeSprites();
player = createSprite(40,550,30,30); 
target = createSprite(560,40,30,30);
obs1 = createSprite(300,120,100,20);
obs1.velocityX = 5;
obs2 = createSprite(300,320,100,20);
obs2.velocityX = -5;
obs3 = createSprite(300,250,100,20);
obs3.velocityX=-2
obs4 = createSprite(307,400,100,20);
obs4.velocityX=+2
obs5 = createSprite(307,150,100,20);
obs5.velocityX=+2

target.shapeColor = "blue"
obs2.shapeColor = "red"
obs1.shapeColor = "red"
obs3.shapeColor = "red"
obs4.shapeColor = "red"
obs5.shapeColor="red"

}


function draw() {
background("green");  


player.bounceOff(edges[0]);
player.bounceOff(edges[1]);
player.bounceOff(edges[2]);
player.bounceOff(edges[3]);
obs1.bounceOff(edges[1]);
obs1.bounceOff(edges[0]);
obs2.bounceOff(edges[1]);
obs2.bounceOff(edges[0]);
obs3.bounceOff(edges[1]);
obs3.bounceOff(edges[0]);
obs4.bounceOff(edges[1]);
obs4.bounceOff(edges[0]);
obs5.bounceOff(edges[1]);
obs5.bounceOff(edges[0]);

player.x= mouseX;
player.y= mouseY;
generateWorms();

if (player.isTouching(wormGroup)){
 text("YOU LOSE",200,200);
 player.x=30;
 player.y=30;
}

if(player.isTouching(target)){
  text("YOU WIN",200,200);
  player.x=30;
  player.y=30;
}
if(player.isTouching(obs1)){
  obs1.velocityX=0;
  player.x=30;
  player.y=30;
  
}
if(player.isTouching(obs2)){
  obs2.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=30;
  player.y=30;
}if(player.isTouching(obs3)){
  obs3.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=30;
  player.y=30;
}if(player.isTouching(obs4)){
  obs4.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=30;
  player.y=30;
}
if(player.isTouching(obs5)){
  obs5.velocityX=0;
  text("YOU LOSE",200,200);
  player.x=30;
  player.y=30;
}
drawSprites();
function generateWorms(){
  if(frameCount % 30===0){
    console.log(frameCount);
      var worm = createSprite(random(100,300),random(100,500),100,5);
      worm.shapeColor="yellow"
      worm.velocityX=random(-4,4);
      worm.velocityY=random(-4,4);
      wormGroup.add(worm);
      }
   
    }
  }

