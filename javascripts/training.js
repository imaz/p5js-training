function setup() {
  // 色相, 彩度, 明度, 透明度 で指定できる
  colorMode(HSB, 100);

  createCanvas(800, 400);
  background(0, 0, 0);
}

function draw() {
  var hue = random(0, 100);
  stroke(hue, 50, 70);
  fill(hue, 90, 50, 50);

  var ballSize = random(20, 40);
  ellipse(randomize(mouseX), randomize(mouseY), ballSize, ballSize);
}

function randomize(coordinate) {
  return coordinate + random(-30, 30);
}
