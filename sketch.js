const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11;
var box12,box13,box14,box15;
var box16,box17,box18;
var box19,box20,box21;
var box22,box23,box24,box25,box26;
var stoneObj;





var plane1,plane3,plane2;

function preload(){

}

function setup() {
    engine  =Engine.create();
    world = engine.world;
  
    createCanvas(850,450);
    plane1 = new Plane(425,440,850,10);
    plane2 = new Plane(375,300,250,10);
    plane3 = new Plane(670,200,200,10);
    var boxW = 34;
    var boxH = 40;
    var boxX = 273;
    var boxY = 200;
    var boxC = "blue";
    box1 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box2 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box3 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box4 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box5 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box6 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box7 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = 273 + 1 * boxW;
    boxC = "deepPink";
    boxY = 200-40;
    box8 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box9 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box10 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box11 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box12 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = 273 + 2 * boxW;
    boxC = "green";
    boxY = 200-80;
    box13 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box14 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box15 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = 273 + 3 * boxW;
    boxC = "cyan";
    boxY = 200-120;
    box16 = new Box(boxX,boxY,boxW,boxH,boxC);
    
    boxX = 602;
    boxY = 190;
    boxC = "blue";
    box17 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box18 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box19 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box20 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box21 = new Box(boxX,boxY,boxW,boxH,boxC);

    boxX = 602 + 1 * boxW;
    boxC = "deepPink";
    boxY = 190-40;
    box22 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box23 = new Box(boxX,boxY,boxW,boxH,boxC);
    boxX = boxX + boxW;
    box24 = new Box(boxX,boxY,boxW,boxH,boxC);
    
    boxX = 602 + 2 * boxW;
    boxC = "green";
    boxY = 190-80;
    box25 = new Box(boxX,boxY,boxW,boxH,boxC);
    
    stoneObj = new Stone(100,200,40);
    slingshot = new SlingShot(stoneObj.body,{x:100, y:200});
    
    
}

function draw() {  
    background("grey");
     Engine.update(engine);

     plane1.display();
     plane2.display();
     plane3.display();
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
     stoneObj.display();

     textSize(20);
     text("Drag The Stone And Release It, To Launch It Towards The Blocks",1,20 )


}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
