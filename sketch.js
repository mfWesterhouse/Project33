const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImage;
var snow1, snow2, snow3, snow4, snow5, snow6, snow7, snow8, snow9, snow10;
var snow11, snow12, snow13, snow14, snow15, snow16, snow17, snow18, snow19, snow20;
var snow21, snow22, snow23, snow24, snow25, snow26, snow27, snow28, snow29, snow30;
var snow31, snow32, snow33, snow34, snow35, snow36, snow37, snow38, snow39, snow40;
var snow41, snow42, snow43, snow44, snow45, snow46, snow47, snow48, snow49, snow50;

var snowp1, snowp2, snowp3, snowp4, snowp5, snowp6, snowp7, snowp8, snowp9, snowp10;
var snowp11, snowp12, snowp13, snowp14, snowp15, snowp16, snowp17, snowp18, snowp19, snowp20;
var snowp21, snowp22, snowp23, snowp24, snowp25, snowp26, snowp27, snowp28, snowp29, snowp30;
var snowp31, snowp32, snowp33, snowp34, snowp35, snowp36, snowp37, snowp38, snowp39, snowp40;
var snowp41, snowp42, snowp43, snowp44, snowp45, snowp46, snowp47, snowp48, snowp49, snowp50;

var ground;
var wall1, wall2;
var snowball;

var bg = "snow1.jpg";

function preload(){
  backgroundImage = loadImage(bg);
}

function setup() {
  var canvas = createCanvas(windowWidth,windowHeight);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,600,width,100);
  wall1 = new Ground(0,height/2,5,height);
  wall2 = new Ground(width-5,height/2,5,height);

  snowball = new Snowman(width/2,0,75);

  snow1 = new Snowflake(random(0,width),0,20,20);
  snow2 = new Snowflake(random(0,width),0,20,20);
  snow3 = new Snowflake(random(0,width),0,20,20);
  snow4 = new Snowflake(random(0,width),0,20,20);
  snow5 = new Snowflake(random(0,width),0,20,20);
  snow6 = new Snowflake(random(0,width),0,20,20);
  snow7 = new Snowflake(random(0,width),0,20,20);
  snow8 = new Snowflake(random(0,width),0,20,20);
  snow9 = new Snowflake(random(0,width),0,20,20);
  snow10 = new Snowflake(random(0,width),0,20,20);
  snow11 = new Snowflake(random(0,width),0,20,20);
  snow12 = new Snowflake(random(0,width),0,20,20);
  snow13 = new Snowflake(random(0,width),0,20,20);
  snow14 = new Snowflake(random(0,width),0,20,20);
  snow15 = new Snowflake(random(0,width),0,20,20);
  snow16 = new Snowflake(random(0,width),0,20,20);
  snow17 = new Snowflake(random(0,width),0,20,20);
  snow18 = new Snowflake(random(0,width),0,20,20);
  snow19 = new Snowflake(random(0,width),0,20,20);
  snow20 = new Snowflake(random(0,width),0,20,20);
  snow21 = new Snowflake(random(0,width),0,20,20);
  snow22 = new Snowflake(random(0,width),0,20,20);
  snow23 = new Snowflake(random(0,width),0,20,20);
  snow24 = new Snowflake(random(0,width),0,20,20);
  snow25 = new Snowflake(random(0,width),0,20,20);
  snow26 = new Snowflake(random(0,width),0,20,20);
  snow27 = new Snowflake(random(0,width),0,20,20);
  snow28 = new Snowflake(random(0,width),0,20,20);
  snow29 = new Snowflake(random(0,width),0,20,20);
  snow30 = new Snowflake(random(0,width),0,20,20);
  snow31 = new Snowflake(random(0,width),0,20,20);
  snow32 = new Snowflake(random(0,width),0,20,20);
  snow33 = new Snowflake(random(0,width),0,20,20);
  snow34 = new Snowflake(random(0,width),0,20,20);
  snow35 = new Snowflake(random(0,width),0,20,20);
  snow36 = new Snowflake(random(0,width),0,20,20);
  snow37 = new Snowflake(random(0,width),0,20,20);
  snow38 = new Snowflake(random(0,width),0,20,20);
  snow39 = new Snowflake(random(0,width),0,20,20);
  snow40 = new Snowflake(random(0,width),0,20,20);
  snow41 = new Snowflake(random(0,width),0,20,20);
  snow42 = new Snowflake(random(0,width),0,20,20);
  snow43 = new Snowflake(random(0,width),0,20,20);
  snow44 = new Snowflake(random(0,width),0,20,20);
  snow45 = new Snowflake(random(0,width),0,20,20);
  snow46 = new Snowflake(random(0,width),0,20,20);
  snow47 = new Snowflake(random(0,width),0,20,20);
  snow48 = new Snowflake(random(0,width),0,20,20);
  snow49 = new Snowflake(random(0,width),0,20,20);
  snow50 = new Snowflake(random(0,width),0,20,20);

  snowp1 = new Snowflake(width-500,590,20,20);
  snowp2 = new Snowflake(width-505,590,20,20);
  snowp3 = new Snowflake(width-510,590,20,20);

  snowp4 = new Snowflake(width-900,590,20,20);
  snowp5 = new Snowflake(width-805,590,20,20);
  snowp6 = new Snowflake(width-805,580,20,20);
  snowp7 = new Snowflake(width-805,580,20,20);
  snowp8 = new Snowflake(width-805,580,20,20);
  snowp9 = new Snowflake(width-805,0,20,20);
  snowp10 = new Snowflake(width-805,0,20,20);
  snowp11 = new Snowflake(width-805,0,20,20);
  snowp12 = new Snowflake(width-805,0,20,20);
  snowp13 = new Snowflake(width-805,0,20,20);
  snowp14 = new Snowflake(width-805,0,20,20);
  snowp15 = new Snowflake(width-805,0,20,20);
  snowp16 = new Snowflake(width-805,0,20,20);
  snowp17 = new Snowflake(width-805,0,20,20);
  snowp18 = new Snowflake(width-805,0,20,20);
  snowp19 = new Snowflake(width-805,0,20,20);
  snowp20 = new Snowflake(width-805,0,20,20);
  snowp21 = new Snowflake(width-805,0,20,20);
  snowp22 = new Snowflake(width-805,0,20,20);
  snowp23 = new Snowflake(width-805,0,20,20);
  snowp24 = new Snowflake(width-805,0,20,20);
  snowp25 = new Snowflake(width-805,0,20,20);
  snowp26 = new Snowflake(width-805,0,20,20);
  snowp27 = new Snowflake(width-805,0,20,20);
  snowp28 = new Snowflake(width-805,0,20,20);
  snowp29 = new Snowflake(width-805,0,20,20);
  snowp30 = new Snowflake(width-805,0,20,20);
  snowp31 = new Snowflake(width-810,0,20,20);
  snowp32 = new Snowflake(width-810,0,20,20);
  snowp33 = new Snowflake(width-810,0,20,20);
  snowp34 = new Snowflake(width-810,0,20,20);
  snowp35 = new Snowflake(width-810,0,20,20);
  snowp36 = new Snowflake(width-810,0,20,20);
  snowp37 = new Snowflake(width-810,0,20,20);
  snowp38 = new Snowflake(width-810,0,20,20);
  snowp39 = new Snowflake(width-810,0,20,20);
  snowp40 = new Snowflake(width-810,0,20,20);
  snowp41 = new Snowflake(width-810,0,20,20);
  snowp42 = new Snowflake(width-810,0,20,20);
  snowp43 = new Snowflake(width-810,0,20,20);
  snowp44 = new Snowflake(width-810,0,20,20);
  snowp45 = new Snowflake(width-810,0,20,20);
  snowp46 = new Snowflake(width-810,0,20,20);
  snowp47 = new Snowflake(width-810,0,20,20);
  snowp48 = new Snowflake(width-810,0,20,20);
  snowp49 = new Snowflake(width-810,0,20,20);
  snowp50 = new Snowflake(width-810,0,20,20);
}

function draw() {
  background(255,255,255);
  
  if(backgroundImage){

    background(backgroundImage);

    snowball.display();

    noStroke();
    textSize(35);
    fill(0);
    text("Drag the snowball around to play", width-750, 50);
    
  }

  Engine.update(engine);

  snow1.display();
  snow2.display();
  snow3.display();
  snow4.display();
  snow5.display();
  snow6.display();
  snow7.display();
  snow8.display();
  snow9.display();
  snow10.display();
  snow11.display();
  snow12.display();
  snow12.display();
  snow13.display();
  snow14.display();
  snow15.display();
  snow16.display();
  snow17.display();
  snow18.display();
  snow19.display();
  snow20.display();
  snow21.display();
  snow22.display();
  snow23.display();
  snow24.display();
  snow25.display();
  snow26.display();
  snow27.display();
  snow28.display();
  snow29.display();
  snow30.display();
  snow31.display();
  snow32.display();
  snow33.display();
  snow34.display();
  snow35.display();
  snow36.display();
  snow37.display();
  snow38.display();
  snow39.display();
  snow40.display();
  snow41.display();
  snow42.display();
  snow43.display();
  snow44.display();
  snow45.display();
  snow46.display();
  snow47.display();
  snow48.display();
  snow49.display();
  snow50.display();

  snowp1.display();
  snowp2.display();
  snowp3.display();
  snowp4.display();
  snowp5.display();
  snowp6.display();
  snowp7.display();
  snowp8.display();
  snowp9.display();
  snowp10.display();
  snowp11.display();
  snowp12.display();
  snowp13.display();
  snowp14.display();
  snowp15.display();
  snowp16.display();
  snowp17.display();
  snowp18.display();
  snowp19.display();
  snowp20.display();
  snowp21.display();
  snowp22.display();
  snowp23.display();
  snowp25.display();
  snowp26.display();
  snowp27.display();
  snowp28.display();
  snowp29.display();
  snowp30.display();
  snowp31.display();
  snowp32.display();
  snowp33.display();
  snowp34.display();
  snowp35.display();
  snowp36.display();
  snowp37.display();
  snowp38.display();
  snowp39.display();
  snowp40.display();
  snowp41.display();
  snowp42.display();
  snowp43.display();
  snowp44.display();
  snowp45.display();
  snowp46.display();
  snowp47.display();
  snowp48.display();
  snowp49.display();
  snowp50.display();

  drawSprites();
}
