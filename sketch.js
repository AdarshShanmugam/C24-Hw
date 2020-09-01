var paper, paperSprite, paperObject, ball, ballSprite, ballObject, dustbin1, dustbin2, dustbin3;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Creating the Bodies Here
	dustbin1=createSprite(600, 699, 200,10);
	dustbin1.shapeColor="green";
	
	dustbin2=createSprite(700,690,10,190);
	dustbin2.shapeColor="green";

	dustbin3=createSprite(500,690,10,188);
	dustbin3.shapeColor="green";

	paper=createSprite(100,699,30,30);
	ellipse(56, 46, 55, 55);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:85});
		

	}

}



