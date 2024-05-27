function setup() {
    createCanvas(490, 460);
    background("white");
  }
  
  function draw() {
    stroke("green");
    fill("purple");
  
    // console.log(mouseIsPressed)
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  