
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stickman,ground,bg_img, st,bg;
var width,height;

function preload(){
  bg_img = loadImage("background.webp");
  st = loadImage("stickman.jpg");
}

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;
  
  stickman = createSprite(20,20,100,100);
  stickman.addImage(st);
}


function draw() 
{
  background(51);
  image(bg,0,0,800,800);
  Engine.update(engine);
  
}

