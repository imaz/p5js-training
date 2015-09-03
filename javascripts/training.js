function setup() {
  // 色相, 彩度, 明度, 透明度 で指定できる
  colorMode(HSB, 100);

  createCanvas(800, 400);
  background(0, 0, 0);
}

function draw() {
  stroke(100, 100, 100);
  fill(80, 90, 100, 30)
  ellipse(mouseX, mouseY, 10, 10);
}
