var engine, world, bloco1, bloco2, bloco3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	var bloco1options={
		restitution:0.5,
		friction:0.02,
		frictionAir:0
	}
	
	var bloco2options={
		restitution:0.7,
		friction:0.01,
		frictionAir:0.1
	}
	
	var bloco3options={
		restitution:0.01,
		friction:1,
		frictionAir:0.3
	}
	
	bloco1 = Bodies.circle(220,10,30,bloco1options)
	World.add(world,bloco1)
	
	bloco2 = Bodies.rectangle(110,50,50,50,bloco2options)
	World.add(world,bloco2)
	
	bloco3 = Bodies.rectangle(350,50,100,50,bloco3options)
	World.add(world,bloco3)

	var planeOptions={
		isStatic:true

	}


	plane = Bodies.rectangle(600,580,1200,10,planeOptions)
	World.add(world,plane)
	fill ('blue')
}


function draw() { 
	background(0);
  	rectMode(CENTER);
	
	rect(plane.position.x,plane.position.y,1200)
	ellipseMode(RADIUS)
	ellipse(bloco1.position.x,bloco1.position.y,30)
	rect(bloco2.position.x,bloco2.position.y,50,50)
	rect(bloco3.position.x,bloco3.position.y,100,50)

  Engine.update(engine);
}



