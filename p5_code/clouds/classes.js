


class ncSineClouds {

  //class vars
  xspacing = 30; // Distance between each horizontal location - was at 16 
  w; // Width of entire wave - width distance (x from 0-600) - was width + 16; 
  theta = 0.0; // Start angle at 0 - didn't seem to change anything 
  amplitude = 50.0; // Height of wave - (was at 75)
  period = 500.0; // How many pixels before the wave repeats
  dx; // Value for incrementing x
  yvalues; // Using an array to store height values for the wave
  c;

  constructor(tc) {
    this.c = tc;
    this.w = width + 16;
    this.dx = (TWO_PI / this.period) * this.xspacing;
    this.yvalues = new Array(floor(this.w / this.xspacing));

  }

  calcWave(sp,np) { //calcWave(sp= speed, np= negative or positive)
    this.theta += sp; //speed -> high#= fast , low#= slow -> was at 0.02 
    let x = this.theta;
    for (let i = 0; i < this.yvalues.length; i++) {
      this.yvalues[i] = sin(x) * this.amplitude;
      x += this.dx*np; //changes the direction of the wave also changes the spacing 
    }
  }
  

  renderWhiteWave(tx,ty,tr,ts) { //render (x,y,rotate,scale) -> it is the white clouds 
    push();
    translate(tx,ty);
    rotate(radians(tr));
    scale(ts);

    for (let x = 0; x < this.yvalues.length; x++) {
      fill(255);
      //clouds (color, x, y, rotate, scale ) 
      cloud(color(255, 230),x * this.xspacing, height / 2 + this.yvalues[x],100,2); //weird i can't change the rotation but I can change the scale
    }
    pop();
  }


  renderLightWave(tx,ty,tr,ts) { //render (x,y,rotate,scale) -> it is the light clouds 
    push();
    translate(tx,ty);
    rotate(radians(tr));
    scale(ts);

    for (let x = 0; x < this.yvalues.length; x++) {
      fill(255);
      //clouds (color, x, y, rotate, scale ) 
      cloud(color(83, 104, 117, 230),x * this.xspacing, height / 2 + this.yvalues[x],100,2); //weird i can't change the rotation but I can change the scale
    }
    pop();
  }


  renderMedWave(tx,ty,tr,ts) { //render (x,y,rotate,scale) -> it is the medium dark clouds 
    push();
    translate(tx,ty);
    rotate(radians(tr));
    scale(ts);

    for (let x = 0; x < this.yvalues.length; x++) {
      fill(255);
      //clouds (color, x, y, rotate, scale ) 
      cloud(color(66, 82, 92, 230),x * this.xspacing, height / 2 + this.yvalues[x],100,2); //weird i can't change the rotation but I can change the scale  
    }
    pop();
  }


  renderDarkWave(tx,ty,tr,ts) { //render (x,y,rotate,scale) -> it is the dark clouds 
    push();
    translate(tx,ty);
    rotate(radians(tr));
    scale(ts);

    for (let x = 0; x < this.yvalues.length; x++) {
      fill(255);
      //clouds (color, x, y, rotate, scale ) 
      cloud(color(32, 50, 61, 230),x * this.xspacing, height / 2 + this.yvalues[x],100,2); //weird i can't change the rotation but I can change the scale
    }
    pop();
  }


  renderMixWave(tx,ty,tr,ts) { //render (x,y,rotate,scale) -> it is the dark clouds 
    push();
    translate(tx,ty);
    rotate(radians(tr));
    scale(ts);

    for (let x = 0; x < this.yvalues.length; x++) {
      fill(255);
      //clouds (color, x, y, rotate, scale ) 
      cloud(color(255, 230),x * this.xspacing-25, height / 2 + this.yvalues[x],100,2); //white cloud 

      cloud(color(83, 104, 117, 230),x * this.xspacing-20, height / 2 + this.yvalues[x],100,2); //light cloud 

      cloud(color(66, 82, 92, 230),x * this.xspacing-10, height / 2 + this.yvalues[x],100,2); //med cloud 

      cloud(color(32, 50, 61, 230),x * this.xspacing, height / 2 + this.yvalues[x],100,2); //dark cloud 
    }
    pop();
  }


}   // end of class


function cloud (k,lx,ly,rot,sc) {  //clouds (color, x, y, rotate, scale )
  push(); 
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



// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(0, 0.05);
  this.velocity = createVector(random(-10, 10), random(-1, 10));
  this.position = position.copy();
  this.lifespan = 255;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 2;
};





// Method to display
Particle.prototype.display = function() {
  stroke(131, 207, 214, this.lifespan);
  strokeWeight(2);
  fill(43, 160, 171, this.lifespan);
  ellipse(this.position.x, this.position.y, random(5,15),random(5,15));
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};
