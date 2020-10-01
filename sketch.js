
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3, paper1;
var ground1;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	paper1 = new Paper(200,200, 40);
	dustbin1 = new Dustbin(650,630,200,30);
	dustbin2 = new Dustbin(540,580,30,150);
	dustbin3 = new Dustbin(740,580,30,150);
	ground1 = new Ground(400,650,800,30);
}


function draw() {
  rectMode(CENTER);
  background(255);
  paper1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  drawSprites();

}
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
	}
}


