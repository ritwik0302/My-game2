var targetGroup;
var gun;
var count= 0;
var play;

var clickImg;

var PLAY= 1;
var END= 0;
var WELCOME= 0.5;
var gameState= WELCOME;
function preload(){
  targetImg= loadImage("target.png");
  gunImg= loadImage("gun.png  ")
  clickImg=createImg("Click.gif");
}

function setup() {
  canvas = createCanvas(800,400);
targetGroup= new Group();
gun = createSprite(200,200,10, 10);
gun.addImage(gunImg);
gun.scale= 0.1;

play= createSprite(400,200);
}
function draw() {
  background("yellow");
  fill("blue");
  text("Score: "+ count, 10, 20);
spawnTargets();
for(var i=0; i<targetGroup.length; i++){
  if(mousePressedOver(targetGroup.get(i))){

    targetGroup.get(i).destroy();
    count= count+1;
}


if(mousePressedOver(play)){
  clickImg.hide();
  play.destroy();
}


}

gun.x = mouseX;
gun.y = mouseY;

clickImg.position(350, 100);
  drawSprites();

}
function spawnTargets(){
if(frameCount % 30 === 0){
  var target = createSprite(400,320, 40,40);
  target.y = random(-10,400);
  target.velocityX= random(-1, +3);
  target.velocityY= random(-1, +3);
  target.addImage(targetImg);
  targetGroup.add(target);
 target.lifetime = 140;
  target.scale= 0.1;
  console.log(target);

  target.depth= gun.depth ;
  gun.depth= gun.depth +1;
}

}
