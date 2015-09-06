function setup() {
  // 色相, 彩度, 明度, 透明度 で指定できる
  colorMode(HSB, 100);
  // angle を整数で渡せる
  angleMode(DEGREES);

  frameRate(100);
  textSize(30);

  createCanvas(800, 400);
  background(50, 12, 100);
}

function draw() {
  noStroke();
  fill(50, 60, 90, 10);
  var lineWeight = 10;
  var radius = 150;
  var angle = frameCount;
  ellipse(
    cos(angle) * radius + width/2,
    sin(angle) * radius + height/2,
    lineWeight, lineWeight
  );
}

/***
 * Events
 */
function mouseMoved() {
  drawPolkaDots();
}

/***
 * Libraries
 */
function drawPolkaDots(x, y) {
  x = x || mouseX;
  y = y || mouseY;
  var hue = random(0, 100);
  var saturation = random(0, 50);
  stroke(hue, saturation, 90, 70);
  fill(hue, saturation, 100, 50);

  var ballSize = random(20, 40);
  ellipse(randomize(x), randomize(y), ballSize, ballSize);
}

function randomize(coordinate) {
  return coordinate + random(-30, 30);
}
