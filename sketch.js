
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane;

var block1;
var block2;

var rotator1;
var rotator2;
var rotator3;

var angle1=60
var angle2=60
var angle3=60

var ellipse
var particle1;
var particle2;
var particle3;
var particle4;
var particle5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var plane_options={
	isStatic:true
}

var particle_options={
	restitution:0.4,
	friction:0.02
}

plane=Bodies.rectangle(200,650,1500,10,plane_options);
World.add(world,plane);

block1=Bodies.rectangle(100,400,150,10,plane_options);
World.add(world,block1);

block2=Bodies.rectangle(400,400,150,10,plane_options);
World.add(world,block2);

rotator1=Bodies.rectangle(250,200,150,20,plane_options);
World.add(world,rotator1);

rotator2=Bodies.rectangle(250,200,150,20,plane_options);
World.add(world,rotator2);

rotator3=Bodies.rectangle(250,200,150,20,plane_options);
World.add(world,rotator3);

particle1=Bodies.circle(220,10,10,particle_options);
World.add(world,particle1);

particle2=Bodies.circle(220,10,10,particle_options);
World.add(world,particle2);

particle3=Bodies.circle(220,10,10,particle_options);
World.add(world,particle3);

particle4=Bodies.circle(220,10,10,particle_options);
World.add(world,particle4);

particle5=Bodies.circle(220,10,10,particle_options);
World.add(world,particle5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)

 rect(plane.position.x,plane.position.y,1500,10);
 rect(block1.position.x,block1.position.y,150,10); 
 rect(block2.position.x,block2.position.y,150,10);

 rect(rotator1.position.x,rotator1.position.y,150,20);
 rect(rotator2.position.x,rotator2.position.y,150,20);
 rect(rotator3.position.x,rotator3.position.y,150,20);

 ellipse(particle1.position.x,particle1.position.y,10)
 ellipse(particle2.position.x,particle2.position.y,10)
 ellipse(particle3.position.x,particle3.position.y,10)
 ellipse(particle4.position.x,particle4.position.y,10)
 ellipse(particle5.position.x,particle5.position.y,10)
 
 
 
 //rotator1
 Matter.Body.rotate(rotator1,angle1)
 push();
 translate(rotator1.position.x,rotator1.position.y);
 rotate(angle1);
 rect(50,20,150,20);
 pop();
 angle1 +=0.9;

//rotator2
Matter.Body.rotate(rotator2,angle2)
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(50,20,150,20);
pop();
angle2 +=0.15;

Matter.Body.rotate(rotator3,angle3)
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(50,20,150,20);
pop();
angle3 +=0.17;
 

  drawSprites();
 
}



