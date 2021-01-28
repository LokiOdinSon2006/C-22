const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;


function setup() {
  createCanvas(800,400);

 engine=Engine.create();
 world=engine.world;

 var options={
   isStatic:true
 }

 ground=Bodies.rectangle(400,390,1000,30,options);
 World.add(world,ground);

 var ball_options={
   restitution:1.0
 }
ball = Bodies.circle(400,10,20,ball_options);
World.add(world,ball);

 console.log(ground.position.x);
 console.log(ground.position.y);
}


function draw(){
  background(0); 
  Engine.update(engine); 
  
 rectMode(CENTER);
 fill("brown");
 rect(ground.position.x,ground.position.y,800,30);

 fill("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  
  
  drawSprites();
  
}