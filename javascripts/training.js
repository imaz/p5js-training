function setup() {
  // 色相, 彩度, 明度, 透明度 で指定できる
  colorMode(HSB, 100);
  // angle を整数で渡せる
  angleMode(DEGREES);

  frameRate(100);
  textSize(30);

  createCanvas(800, 400);
  background(50, 0, 100);
}

function draw() {
  circle.drawPolkaDots();
  circle.draw();
}

/***
 * Events
 */
function mouseMoved() {
  polkaDots.draw();
}

/***
 * Libraries
 */
function Circle() {
  this.draw = function() {
    noStroke();
    fill(50, 60, 90, 100);
    var lineWeight = 10;
    ellipse(getX(), getY(), lineWeight, lineWeight);
  };
  this.drawPolkaDots = function() {
    polkaDots.draw(getX(), getY());
  }

  var radius = 150;
  var angle = function(){ return frameCount };

  var getX = function() {
    return cos(angle()) * radius + width/2
  };
  var getY = function() {
    return sin(angle()) * radius + height/2
  };
};
var circle = new Circle();

function PolkaDots() {
  this.draw = function(x, y) {
    x = x || mouseX;
    y = y || mouseY;

    var hue = random(0, 100);
    var saturation = random(0, 50);

    stroke(hue, saturation, 90, 70);
    fill(hue, saturation, 100, 50);

    var ballSize = random(20, 40);
    ellipse(randomize(x), randomize(y), ballSize, ballSize);
  }
}
var polkaDots = new PolkaDots();

function randomize(coordinate) {
  return coordinate + random(-30, 30);
}
