function setup() {
  // 色相, 彩度, 明度, 透明度 で指定できる
  colorMode(HSB, 100);
  // angle を整数で渡せる
  angleMode(DEGREES);

  frameRate(100);
  textSize(30);

  createCanvas(200, 500);
}

function draw() {
  background(50, 0, 100);
  ball.draw();
}

/***
 * Events
 */

/***
 * Libraries
 */
function Ball() {
  this.draw = function() {
    stroke(40, 80, 40, 40);
    fill(40, 80, 90, 40);
    ellipse(getX(), getY(), ballSize, ballSize);
  };

  var ACCELERATION = 0.25;
  var speed = 1;
  var ballSize = 30;

  var speedUp = function() {
    speed += ACCELERATION;
  };
  var resetSpeed = function(){
    speed = 1;
  }

  var x = 0;
  var y = 0;

  var getX = function() {
    x = frameCount % width;

    return x;
  };
  var getY = function() {
    if (y > height) {
      y = 0;
      resetSpeed();
    }

    y += speed;
    speedUp();

    return y;
  };
};
var ball = new Ball();
