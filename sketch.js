const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14
var box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,polygon;
var polygonImg,sling1;
var gameState='onSling';

function preload(){
    polygonImg=loadImage("polygon.png");
  }

function setup(){
    var canvas=createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground=new Ground(600,590,1200,20);
    stand1=new Ground(850,500,350,10);

    //pyramid1 level1
    box1=new Box(700,470,30,40);
    box2=new Box(730,470,30,40);
    box3=new Box(760,470,30,40);
    box4=new Box(790,470,30,40);
    box5=new Box(820,470,30,40);
    box6=new Box(850,470,30,40);
    box7=new Box(880,470,30,40);
    //pyramid1 level2
    box8=new Box(715,430,30,40);
    box9=new Box(745,430,30,40);
    box10=new Box(775,430,30,40);
    box11=new Box(805,430,30,40);
    box12=new Box(835,430,30,40);
    box13=new Box(865,430,30,40);
    //pyramid1 level3
    box14=new Box(730,390,30,40);
    box15=new Box(760,390,30,40);
    box18=new Box(790,390,30,40);
    box16=new Box(820,390,30,40);
    box17=new Box(850,390,30,40);
    //pyramid1 level4
    box19=new Box(745,350,30,40);
    box20=new Box(775,350,30,40);
    box21=new Box(805,350,30,40);
    box22=new Box(835,350,30,40);
    //pyramid1 level5
    box23=new Box(760,310,30,40);
    box24=new Box(790,310,30,40);
    box25=new Box(820,310,30,40);
    //pyramid1 level6
    box26=new Box(775,270,30,40);
    box27=new Box(805,270,30,40);
    //pyramid1 level7
    box28=new Box(790,230,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    sling1=new SlingShot(this.polygon,{x:130,y:400});
}
function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
    stand1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();

    fill("gold");
  imageMode(CENTER)
  image(polygonImg ,polygon.position.x,polygon.position.y,40,40);

    sling1.display();
}

function mouseDragged(){
    if(gameState==='onSling'){
        Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
    }
}

function mouseReleased(){
    sling1.fly();
    gameState='launched';
}

function keyPressed(){
    if(keyCode===32){
        sling1.attach();
        gameState='onSling';
    }
}