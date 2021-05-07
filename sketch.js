const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var boy,engine,world;
var snow = [];
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world;
  boy=new Boy(400,200,70,70);
  ground=new Ground(400,380,800,20);
  boy2=createSprite(600, 200, 50, 50);
  boy2.addImage(b1)
  boy2.scale = 0.2;
  
  
}
function preload(){
  bg=loadImage("snow1.jpg")
  b1=loadImage("boy.png")
}
function draw() {
  background(bg);  
  drawSprites();
  Engine.update(engine)
  snow.push(new Snow(random(0,800),0))
  for(var i=0;i<snow.length;i++){
    snow[i].display()
  }
  boy.display()
}