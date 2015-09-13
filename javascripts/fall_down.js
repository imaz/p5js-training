function setup() {
  // 色相, 彩度, 明度, 透明度 で指定できる
  colorMode(HSB, 100);
  // angle を整数で渡せる
  angleMode(DEGREES);

  frameRate(100);
  textSize(30);

  createCanvas(800, 400);
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

  var ballSize = 30;

  var getX = function() {
    return width/2;
  };
  var getY = function() {
    return frameCount % height;
  };
};
var ball = new Ball();
