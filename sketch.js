var backgroundIMG

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Render = Matter.Render;
//const Constraint = Matter.Constraint;
var engine, world
var ball,goal,ground,ground2,player;

function preload()
{
backgroundIMG=loadImage("Soccer.jpeg");
}

function setup() {
createCanvas(1200,700);
engine=Engine.create();
world=engine.world;
goal=new Goal(600,400,70,80);
//ground= new Ground(600,380,,600);
ground2 = new Ground(600,690,1200,20)
ball = new Ball(800,500);
player=new Player(1150,550)
}

function draw() {
background(backgroundIMG);
Engine.update(engine);
goal.display();
//ground.display();
ground2.display();
ball.display();
player.display();
console.log(ball.body)
//mousePressed();

}

    function keyPressed() {
      if (keyCode === DOWN_ARROW) {
        var ball = new Ball(player.x, player.y);
        //ball.trajectory = [];
        //Matter.Body.setAngle(cannonBall.body, cannon.angle);
        balls.push(cannonBall);
      }
  }

function mousePressed()
{
//  console.log(mouse)
   ball.shoot();
}