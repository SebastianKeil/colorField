let windowDiagonal;

function setup() {
  frameRate(20);
  createCanvas(windowWidth, windowHeight);
  windowDiagonal = sqrt(windowWidth * windowWidth + windowHeight * windowHeight);
}

function draw() {
  //background(220);
  for (let i = 0; i < windowWidth; i++) {
    for (let j = 0; j < windowHeight; j++) {
      let d = dist(mouseX, mouseY, i, j);
      let r = map(d, 0, windowDiagonal, 0, 255);
      let g = map(d, 0, windowDiagonal, 100, 200);
      let b = map(d, 0, windowDiagonal, 255, 0);
      let c = color(r, g, b);
      set(i, j, c);
    }
  }
  updatePixels();
}