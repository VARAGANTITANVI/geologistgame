
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1300,600);
	engine = Engine.create();
	world = engine.world;
    
    Hammer =new Hammer(400,400,70,70);

	  stone = new Stone(600, 300,70,70);

    ground = new Ground(600,height,1400,30)

    ironbody = new Ironbody(400,400,100,50);
  
    rubber =new Rubber(200,200,50);

    sand1 = new Sand (800,400,20,20);
    sand2 = new Sand (810,400,20,20);
    sand3 = new Sand (820,400,20,20);
    sand4 = new Sand (830,400,20,20);
    sand5 = new Sand (840,400,20,20);
    sand6 = new Sand (850,400,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
Hammer.display();
stone.display();
ground.display();
ironbody.display();
rubber.display();
sand1.display();
sand2.display();
sand3.display();
sand4.display();
sand5.display();
sand6.display();
  drawSprites();
 
}



