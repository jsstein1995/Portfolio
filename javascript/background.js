var r = Math.floor(Math.random() * 255); 
var g = Math.floor(Math.random() * 255); 
var b = 255;
var width = Math.floor(Math.random() * windowWidth);
var height = Math.floor(Math.random() * 600);

let bubbles = [];

function setup() {
  createCanvas(windowWidth, 600);
  for (let i = 0; i < 10; i++) {
    let x = 10 + 30 * i;
    bubbles[i] = new Bubble(x, 200, r);
  }
}

// function mousePressed() {
//   let r = random(30, 300);
//   let b = new Bubble(mouseX, mouseY, r);
//   bubbles.push(b);
// }

function draw() {
  background(255);

  // for (let bubble of bubbles) {
  //   bubble.move();
  //   bubble.show();
  // }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x = this.x + 0.3;
    if (this.x > width + this.r) {
      this.x = 0 - this.r;
    }
  }
  // move() {
//     this.x = this.x + noise(this.x) * 2;
//     this.y = this.y + noise(this.y) * 2;
//   }

  show() {
    noStroke();
    strokeWeight(4);
    fill(r, g, b, 60);
    ellipse(this.x, this.y, this.r * 2);
  }
}



// // All the paths
// var paths = [];
// // Are we painting?
// var painting = false;
// // How long until the next circle
// var next = 0;
// // Where are we now and where were we?
// var current;
// var previous;

// function setup() {
//   createCanvas(windowWidth, 500);
//   current = createVector(0,0);
//   previous = createVector(0,0);
// };

// function draw() {
//   background(255);
  
//   // If it's time for a new point
//   if (millis() > next && painting) {

//     // Grab mouse position      
//     current.x = mouseX;
//     current.y = mouseY;

//     // New particle's force is based on mouse movement
//     var force = p5.Vector.sub(current, previous);
//     force.mult(0.05);

//     // Add new particle
//     paths[paths.length - 1].add(current, force);
    
//     // Schedule next circle
//     next = millis() + random(100);

//     // Store mouse values
//     previous.x = current.x;
//     previous.y = current.y;
//   }

//   // Draw all paths
//   for( var i = 0; i < paths.length; i++) {
//     paths[i].update();
//     paths[i].display();
//   }
// }

// // Start it up
// function mousePressed() {
//   next = 0;
//   painting = true;
//   previous.x = mouseX;
//   previous.y = mouseY;
//   paths.push(new Path());
// }

// // Stop
// function mouseReleased() {
//   painting = false;
// }

// // A Path is a list of particles
// function Path() {
//   this.particles = [];
//   this.hue = random(100);
// }

// Path.prototype.add = function(position, force) {
//   // Add a new particle with a position, force, and hue
//   this.particles.push(new Particle(position, force, this.hue));
// }

// // Display plath
// Path.prototype.update = function() {  
//   for (var i = 0; i < this.particles.length; i++) {
//     this.particles[i].update();
//   }
// }  

// // Display plath
// Path.prototype.display = function() {
  
//   // Loop through backwards
//   for (var i = this.particles.length - 1; i >= 0; i--) {
//     // If we shold remove it
//     if (this.particles[i].lifespan <= 0) {
//       this.particles.splice(i, 1);
//     // Otherwise, display it
//     } else {
//       this.particles[i].display(this.particles[i+1]);
//     }
//   }

// }  

// // Particles along the path
// function Particle(position, force, hue) {
//   this.position = createVector(position.x, position.y);
//   this.velocity = createVector(force.x, force.y);
//   this.drag = 0.95;
//   this.lifespan = 100;
// }

// Particle.prototype.update = function() {
//   // Move it
//   this.position.add(this.velocity);
//   // Slow it down
//   this.velocity.mult(this.drag);
//   // Fade it out
//   this.lifespan--;
// }

// // Draw particle and connect it with a line
// // Draw a line to another
// Particle.prototype.display = function(other) {
//   stroke(0, this.lifespan);
//   fill(0, this.lifespan/2);    
//   ellipse(this.position.x,this.position.y, 8, 8);    
//   // If we need to draw a line
//   if (other) {
//     line(this.position.x, this.position.y, other.position.x, other.position.y);
//     // line(this.position.x, this.position.y, other.position.x, other.position.y);
//     // line(this.position.x, this.position.y, other.position.x, other.position.y);
//   }
// }