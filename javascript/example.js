// var r = Math.floor(Math.random() * 255); 
// var g = Math.floor(Math.random() * 255); 
// var b = 255;
// var width = Math.floor(Math.random() * windowWidth);
// var height = Math.floor(Math.random() * 600);

// var colors = {
// cyan: "(51, 255, 255, 200)",
// yellow: "(255, 255, 51, 200)",
// red: "(255, 0, 0, 200)",
// }

var colors = ['red', 'blue', 'yellow'];

let bubbles = [];
let noiseScale=0.02;

function setup() {
  createCanvas(windowWidth, 580);
  for (let i = 0; i < 5; i++) {
    //  let x = 400 + 30 * i;
    let x = random(width);
    let y = random(height);
    let r = random(100, 400);
    bubbles[i] = new Bubble(x, y, r);
    // frameRate(100);
  }
}

function draw() {
  background(255);
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
    this.x = this.x + noise((mouseX+this.x) * noiseScale);
    this.y = this.y + noise((200+this.y)*noiseScale);
    if (this.x > width + this.r) {
        this.x = 0 - this.r;
      }
    if (this.y > height + this.r) {
        this.y = 0 - this.r;
      }
  }

  show() {
    // stroke();
    strokeWeight(4);
    noStroke();
    fill(colors[Math.floor(Math.random() * colors.length)]);
    ellipse(this.x, this.y, this.r * 2);
  }
}