


//images
let Olimar; 
let Onion; 
let grass; 
let SonicGFuel; 
//Pikmin from Classes 
//Regular standing Pikmin 
let redPikminL; 
let yellowPikminGFuel; 
let bluePikminL; 
let purplePikminR; 
//Moving Pikmin 
let bounceCountRed; // Bounce - more pikmin can appear with an array and keyPressed 
let bounceCountYellow; 
let bounceCountBlue; 
let redPikminRotate; //rotation 
let yellowPikminRotate; 
let bluePikminRotate; 
let pinkPikminFly; //flying 
let BuzzLightyear; //buzzing   



function setup() {
  createCanvas(800,600);
  background (50,168,82); //green
//loading images 
  Olimar = loadImage("assets/Olimar_Throw.png"); 
  Onion = loadImage("assets/Pikmin_Onion.png"); 
  grass = loadImage("assets/grass.png");  
  SonicGFuel = loadImage("assets/Sonic_G_Fuel.png");
//sytem for bouncing Pikmin 
  speedX = random(-5, 5); 
  speedY = random(-5, 5);
  loX = height / 2;
  loY = width / 2;
  incPik = 1; 
//system for flying Pikmin 
  speediE = random(0,5); // speedY 
  flY = height / 2; // Y 
//system for buzzing Pikmin 
  sped = random(1,5); // speedY 
  flie = height / 2; // Y

//for classes - (color, x,y,rotate,scale) 
//reg Pikmin - standing 
  redPikminL = new ncPikmin(color(255,0,0),250,460); 
  yellowPikminGFuel = new ncPikmin(color(255,230,3), 30,475); 
  bluePikminL = new ncPikmin(color(30,30,235),200,460);   
  purplePikminR = new ncPikmin(color(150,38,191),330,410,0,1.5); 
//bouncing Pikmin 
  bounceCountRed = new Array(incPik); // Create red pikmin 
  for (let i = 0;  i < bounceCountRed.length;i++) {
    bounceCountRed[i] = new ncPikmin(color(255,0,0),390,320,0,.35);
  }
  bounceCountYellow = new Array(incPik); // Create yellow pikmin 
  for (let i = 0;  i < bounceCountYellow.length;i++) {
    bounceCountYellow[i] = new ncPikmin(color(255,230,3),390,320,0,.35);
  }
  bounceCountBlue = new Array(incPik); // Create blue pikmin 
  for (let i = 0;  i < bounceCountBlue.length;i++) {
    bounceCountBlue[i] = new ncPikmin(color(30,30,235),390,320,0,.35);
  }

//spinning/ rotating pikmin - going around town 
  redPikminRotate = new ncPikmin(color(255,0,0),300,450,0,.35); 
  yellowPikminRotate = new ncPikmin(color(255,230,3),150,450,0,.35); 
  bluePikminRotate = new ncPikmin(color(30,30,235),450,450,0,.35); 
//Flying/ Buzzing Pikmin 
  pinkPikminFly = new ncPikmin(color(255,128,240),730,200,0,.6)
  BuzzLightyear = new ncPikmin(color(255,128,240),375,320,0,.6)


}

function draw() {
//Background 
    background(122,186,235); 
//Clouds 
    cloud(color(255),200,20,0,2.7);
    cloud(color(255),20,20,0,1.5);
    cloud(color(255),380,150,0,.7);
    cloud(color(255),100,220,0,1.7);
    cloud(color(255),150,380,0,.7);
    cloud(color(255),300,150,0,1.5);
    cloud(color(255),450,80,0,1.7);
    cloud(color(255),950,480,0,.7);

//system 
    rectMode(CENTER);
    fill(50,168,82);
    strokeWeight (0);
    rect(400,600,800,300);
  
    angleMode(DEGREES); 

//Images   
    image(grass,0,280,800,300); // very back top grass
    image(grass,0,210,800,300);
    image(grass,0,310,800,300);  
    image(Olimar, 700,375, 100,100); // Olimar on the right 
     image(Onion, 300,230, 210,250); // Onion in the center 
    image(grass,0,270,800,300); //grass in front bottom 
    image(grass,0,330,800,300);
    



//Pikmin Animated / Moving 
// //Bounce BG 
for (let i = 0;i < bounceCountRed.length;i++) {
  bounceCountRed[i].drawPikminRedPan();
  bounceCountRed[i].bouncingPikmin();
}
for (let i = 0;i < bounceCountYellow.length;i++) {
  bounceCountYellow[i].drawPikminYellowPan();
  bounceCountYellow[i].bouncingPikmin();
}
for (let i = 0;i < bounceCountBlue.length;i++) {
  bounceCountBlue[i].drawPikminBluePan();
  bounceCountBlue[i].bouncingPikmin();
}

//Rotate with Mouse - bruh now they are spinning like sonic doing a spin dash attack  
  redPikminRotate.drawPikminRedPan();
  redPikminRotate.rotatePikmin();  
  yellowPikminRotate.drawPikminYellowPan();
  yellowPikminRotate.rotatePikmin(); 
  bluePikminRotate.drawPikminBluePan();
  bluePikminRotate.rotatePikmin(); 

//Flying Pikmin 
    pinkPikminFly.drawPikminPink(); 
    pinkPikminFly.flyingPikmin(); 
//Buzzing Pikmin 
    BuzzLightyear.drawPikminPink(); 
    BuzzLightyear.buzzingPikmin(); 



//Regular Pikmin - front 
  yellowPikminGFuel.drawPikminYellowGF(); 
  nectar(color(8,0,282,200),30,388,0,1.5); 
  bluePikminL.drawPikminBlue();
  redPikminL.drawPikminRed();
  purplePikminR.drawPikminPurple(); 




//Extra Images - front 
  image(SonicGFuel,70,550,50,50); //Sonic G Fuel 
  image(grass,0,375,800,300); //grass very front 

}  //Pikmin (color, x,y,rotate,scale)

//functions of random objects 
function cloud(k,lx,ly,rot,sc){
  push(); 
    fill(k);
    rotate(rot);
    scale(sc);
    strokeWeight(2);
    stroke(200,150);
    ellipse(lx,ly-12,30,25)
    ellipse(lx-12,ly-5,30,23);
    ellipse(lx+12,ly-5,30,23);
    ellipse(lx,ly,30,25)
  pop();
}

function nectar(k,lx,ly,rot,sc){
  push(); 
    fill(k);
    rotate(rot);
    scale(sc);
    strokeWeight(3)
    stroke(255,100)
    ellipse(lx,ly,30,20);
    strokeWeight(0);
    fill(255,100); 
    ellipse(lx+8,ly-5,8,5);
    ellipse(lx-2,ly-2,10,5);
  pop(); 

}

function hardReset() { // function for hard reset - idk if this works i have to test it 
//for classes - (color, x,y,rotate,scale) 
//reg Pikmin - standing 
  redPikminL = new ncPikmin(color(255,0,0),250,460); 
  yellowPikminGFuel = new ncPikmin(color(255,230,3), 30,475); 
  bluePikminL = new ncPikmin(color(30,30,235),200,460);   
  purplePikminR = new ncPikmin(color(150,38,191),330,410,0,1.5); 
//bouncing Pikmin 
  redPikminBounce = new ncPikmin(color(255,0,0),300,400,0,.35); 
  yellowPikminBounce = new ncPikmin(color(255,230,3),150,400,0,.35); 
  bluePikminBounce = new ncPikmin(color(30,30,235),450,400,0,.35);  

  bounceCountRed = new Array(incPik); // Create 
  for (let i = 0;  i < bounceCountRed.length;i++) {
    bounceCountRed[i] = new ncPikmin(color(255,0,0),390,320,0,.35);
  }
  bounceCountYellow = new Array(incPik); // Create yellow pikmin 
  for (let i = 0;  i < bounceCountYellow.length;i++) {
    bounceCountYellow[i] = new ncPikmin(color(255,230,3),390,320,0,.35);
  }
  bounceCountBlue = new Array(incPik); // Create blue pikmin 
  for (let i = 0;  i < bounceCountBlue.length;i++) {
    bounceCountBlue[i] = new ncPikmin(color(30,30,235),390,320,0,.35);
  }

//spinning/ rotating pikmin - going around town 
  redPikminRotate = new ncPikmin(color(255,0,0),300,450,0,.35); 
  yellowPikminRotate = new ncPikmin(color(255,230,3),150,450,0,.35); 
  bluePikminRotate = new ncPikmin(color(30,30,235),450,450,0,.35); 
//Flying/ Buzzing Pikmin 
  pinkPikminFly = new ncPikmin(color(255,128,240),730,200,0,.6)
  BuzzLightyear = new ncPikmin(color(255,128,240),375,320,0,.6)

}

function addRedPikmin() { 
  let newRedPikmin = new ncPikmin(color(255,0,0),390,320,0,.35); 
  bounceCountRed.push(newRedPikmin); 
}

function addYellowPikmin() { 
  let newYellowPikmin = new ncPikmin(color(255,230,3),390,320,0,.35); 
  bounceCountYellow.push(newYellowPikmin); 
}

function addBluePikmin() { 
  let newBluePikmin = new ncPikmin(color(30,30,235),390,320,0,.35); 
  bounceCountBlue.push(newBluePikmin); 
}

function keyPressed() { 
//keys related to Pikmin 
  if (key == 'r' || key == 'R') { // Add more bouncing Red Pikmin  
    incPik++;  
    addRedPikmin(); 
  }
  if (key == 'y' || key == 'Y') { // Add more bouncing Yellow Pikmin  
    incPik++;  
    addYellowPikmin(); 
  }
  if (key == 'b' || key == 'B') { // Add more bouncing Blue Pikmin  
    incPik++;  
    addBluePikmin(); 
  }
//general system keys 
  if (key == 'f' || key == 'F') { // Freeze everything - Freeze! 
    noLoop();
  }
  if (key == 'g' || key == 'G'){ // Unfreeze everything - GO! 
    loop(); 
  }
  if (key == 'h' || key == 'H'){ // Hard reset - not really just to reset everything 
    hardReset();
  }

}

