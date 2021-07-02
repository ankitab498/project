
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload(){}
function setup() {
	createCanvas(600, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the objects Here.
	bob1=new bob(400,260,20)
	log1 = new log(300,100)
	
   rope1= new sling(log1.logs,bob1.body)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine)
  bob1.display()
  log1.display()
  rope1.display()
 
}