function setup() {
  // 色相, 彩度, 明度, 透明度 で指定できる
  colorMode(HSB, 100);

  createCanvas(800, 400);
  background(50, 2, 100);
}

function draw() {
  var hue = random(0, 100);
  stroke(hue, 10, 90, 70);
  fill(hue, 10, 100, 50);

  var ballSize = random(20, 40);
  ellipse(randomize(mouseX), randomize(mouseY), ballSize, ballSize);
}

function randomize(coordinate) {
  return coordinate + random(-30, 30);
}
