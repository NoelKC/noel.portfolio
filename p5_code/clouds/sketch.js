


//frames system 
let fcounter = 0;
let recMode = false;
let can;  // create a canvas reference -> how to record just the canvas 
//clouds 
let cloud1;
let cloud2;
// rain 
let leftRain; 
let rightRain; 
let middleRain; 
let extraRainL; 
let extraRainR; 
//images 
let stars; 
 

function setup() {
  can = createCanvas(960, 540);
  frameRate(30);
  //noLoop();

  //clouds 
  cloud1 = new ncSineClouds();
  cloud2 = new ncSineClouds();
  
  // //rain 
  leftRain = new ParticleSystem(createVector(240, 30)); 
  middleRain = new ParticleSystem(createVector(480,30)); 
  rightRain = new ParticleSystem(createVector(720, 30)); 
  extraRainL = new ParticleSystem(createVector(360,75)); 
  extraRainR = new ParticleSystem(createVector(600,75));

  //images 
  stars = loadImage("assets/stars.png"); 
}

function draw() {
  //background(2, 172, 219,80);

  if (frameCount < 150) { //no rain 
    console.log("the first act - no rain");
    background(2, 172, 219,80);
    //positve clouds
    cloud1.calcWave(0.01,5);  
    cloud1.renderWhiteWave(fcounter -500,-80,20,.5);
    //negative clouds
    cloud1.calcWave(0.01,-5);  
    cloud1.renderWhiteWave(fcounter +200,-150,25,.5);  
} 


  else if (frameCount < 300) { //light rain 
    console.log("the second act - light rain"); 
    background(8, 112, 140, 80);
      //rain 
      middleRain.run();
      middleRain.addParticle();
      cloud(color(83, 104, 117, 230),400,40,0,1.2);
    //positve clouds
    cloud1.calcWave(0.01,5);  
    cloud1.renderLightWave(fcounter -500,-80,20,.5);
    cloud1.renderMedWave(fcounter -600,-80,20,.5);
    cloud1.renderLightWave(fcounter +200,-100,15,.5);  
    //negative clouds
    cloud1.calcWave(0.01,-5);  
    cloud1.renderLightWave(fcounter +200,-150,25,.5);  
    cloud1.renderMedWave(fcounter -600,-150,25,.5);  
} 


  else if (frameCount < 450) { //med rain 
    console.log("the third act - med rain");
    background(26, 76, 89, 80);
      //rain 
      leftRain.addParticle();
      leftRain.run(); 
      cloud(color(66, 82, 92, 230),200,40,0,1.2);  
      rightRain.addParticle();
      rightRain.run();
     cloud(color(66, 82, 92, 230),600,40,0,1.2);
    //positve clouds
    cloud1.calcWave(0.01,5);  
    cloud1.renderDarkWave(fcounter -600,-80,20,.6);
    cloud1.renderDarkWave(fcounter +200,-100,15,.5);  
    cloud1.renderMedWave(fcounter -750,-100,25,.6);  
    cloud1.renderMedWave(fcounter -900,-150,20,.5);  
    cloud1.renderMedWave(fcounter -1100,-40,15,.5); 
    //negative clouds
    cloud1.calcWave(0.01,-5);  
    cloud1.renderMedWave(fcounter -600,-150,25,.5);  
    cloud1.renderDarkWave(fcounter -850,-150,20,.6);  
    cloud1.renderMedWave(fcounter -1000,-100,20,.5); 
} 


  else if (frameCount < 600) { //heavy rain 
    console.log("the fourth act - heavy rain");
    background(8, 20, 33, 80);
      //rain 
      leftRain.addParticle();
      leftRain.run(); 
      cloud(color(32, 50, 61, 230),200,40,0,1.2);  
      extraRainL.addParticle();
      extraRainL.run(); 
      cloud(color(66, 82, 92, 230),300,80,0,1.2); 
      middleRain.run();
      middleRain.addParticle();
      cloud(color(32, 50, 61, 230),400,40,0,1.2);
      extraRainR.addParticle();
      extraRainR.run(); 
      cloud(color(66, 82, 92, 230),500,80,0,1.2);
      rightRain.addParticle();
      rightRain.run();
     cloud(color(32, 50, 61, 230),600,40,0,1.2);
    //positve clouds
    cloud1.calcWave(0.01,5);  
    cloud1.renderMedWave(fcounter -750,-100,25,.6);
    cloud1.renderDarkWave(fcounter -900,-150,20,.5);  
    cloud1.renderMedWave(fcounter -1100,-40,15,.5); //a
    cloud1.renderDarkWave(fcounter -950,-200,25,.7); 
    cloud1.renderMedWave(fcounter -110,-40,20,.5); 
    cloud1.renderDarkWave(fcounter -1200,-40,25,.6); 
    cloud1.renderDarkWave(fcounter -1350,-40,20,.5); 
    //negative clouds
    cloud1.calcWave(0.01,-5);  
    cloud1.renderMedWave(fcounter -600,-150,25,.5);
    cloud1.renderDarkWave(fcounter -850,-150,20,.6);  
    cloud1.renderDarkWave(fcounter -1000,-100,20,.5); //a 
    cloud1.renderDarkWave(fcounter -1150,-100,25,.5);
    cloud1.renderDarkWave(fcounter -1350,-200,20,.6);
    cloud1.renderMedWave(fcounter -1450,-200,20,.6);
    cloud1.renderDarkWave(fcounter -1500,-200,25,.7);
} 

  else  { //ending rainbow 
    console.log("the final act - rainbow");
    background(0, 3, 46);
    tint(255,200);
    image(stars,0,0,960,540);
    //sillyMoon
    sillyMoon(50,50,0,.7);
    //positve clouds
    cloud1.calcWave(0.01,5);  
    cloud1.renderMixWave(fcounter -1500,-80,20,.5);
    //negative clouds
    cloud1.calcWave(0.01,-5);  
    cloud1.renderMixWave(fcounter -2000,-150,25,.5);  
    // //blue filter 
    // fill(0, 3, 46,150);
    // noStroke(); 
    // rect(0,0,960,540);
    
  }
  fcounter += 2.14; //was 2.14


  //recordit(); 
}




function cloud (k,lx,ly,rot,sc) { 
  push(); 
    translate(lx,ly);
    fill(k); 
    rotate(rot); 
    scale(sc); 
    strokeWeight(1); 
    stroke(63, 93, 112,150); 
    ellipse(lx,ly-12,30,25);
    ellipse(lx-12,ly-5,30,23);
    ellipse(lx+12,ly-5,30,23);
    ellipse(lx,ly,30,25); 
  pop(); 
}


function sillyMoon (lx,ly,rot,sc) {
  push(); 
    translate(lx,ly);
    rotate(rot); 
    scale(sc); 
    //glow
    strokeWeight(0); 
    fill(255,50);
    ellipse(lx,ly,115,115);
    ellipse(lx,ly,130,130);
    ellipse(lx,ly,150,150);
    ellipse(lx,ly,175,175);
    //main moon base 
    fill(255); 
    ellipse(lx,ly,100,100); 
    //holes 
    strokeWeight(2); 
    stroke(34, 35, 56,50); 
    fill(125, 126, 150,50); 
    //big holes
    ellipse(lx-30,ly-10,20,30);
    ellipse(lx+30,ly+20,25,10);    
    ellipse(lx-20,ly+28,15,20);
    //small holes 
    ellipse(lx+30,ly-30,10,5);
    ellipse(lx-40,ly+15,5,5);
    ellipse(lx,ly+45,10,5);
    ellipse(lx+20,ly-5,10,15);
    ellipse(lx-10,ly-35,15,5);
    ellipse(lx,ly,10,10);
    //shading 
    ellipse(lx-30,ly-10,10,20);
    ellipse(lx+20,ly-5,2,5);
    ellipse(lx-20,ly+28,5,10);
  pop(); 
}




/////////////////////// use both keyPressed and recordit ///////////
function keyPressed() {

  if (keyIsPressed === true) {
      let k = key;
      console.log("k is " + k);

      if (k == 's' || k == 'S') {
          console.log("Stopped Recording"); //s key will stop the recording, pause the drawing,  
          recMode = false;
          noLoop();
      }

      if (k == ' ') {
          console.log("Start Recording"); //space key will start the recording 
          recMode = true;
          loop();
      }

      if (k == 'p' || k == 'P') {
        console.log("Pause"); //p key will pause the drawing 
        noLoop();
    }
      if (k == 'u' || k == 'U') {
        console.log("Unpause"); //u key will unpause the drawing   
        loop();
    }

    key=""; // emptyies everything out 
  }

}


function recordit() {  // new version -> this is how it saves the recording 
  if (recMode == true) {
      //0023 -> if you don't add 0s in front of numbers the file sorting gets weird so ext helps with that 
      let ext = nf(frameCount, 5);  // naming the files with 0s in front of them 
      saveCanvas(can, 'frameimages/frame-' + ext, 'jpg'); // the images/ should put the frames into a folder -> doesn't work right now 
      console.log("rec " + ext);
  }
}





