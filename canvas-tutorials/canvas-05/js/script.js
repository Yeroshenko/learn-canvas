let canvas = document.getElementById('canv'),
    ctx = canvas.getContext('2d'); // canvas context

let stepCount = 0, // steps in one direction
    direction = 0,
    x = 200,
    y = 100,
    myX = 0,
    myY = 0;

function drawDot() {
  ctx.clearRect(0, 0, 400, 200);
  
  if (stepCount == 0) {
    stepCount = Math.floor(15 * Math.random());
    direction = Math.floor(8 * Math.random()); // 0 - 7
  }
  else {
    stepCount--;
  }
  switch (direction) {
    case 0: // top
      y = y - 1;
      break;
    case 1: // right
      x = x + 1;
      break;
    case 2: // bottom
      y = y + 1;
      break;  
    case 3: // left
      x = x - 1;
      break;  
    case 4: // top-right
      x = x + 1;
      y = y - 1;
      break;  
    case 5: // bottom-right
      x = x + 1;
      y = y + 1;
      break;  
    case 6: // bottom-left
      x = x - 1;
      y = y + 1;
      break;    

    case 7: // bottom-right
      x = x - 1;
      y = y - 1;
      break;  
  }
  if (x < 0 || x > 400 || y < 0 || y > 200) { stepCount = 0; }
  ctx.fillRect(x -3, y - 3, 6, 6);
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(myX, myY);
  ctx.lineWidth = 2;
  
  ctx.stroke();
  let timer = setTimeout(drawDot, 100);
}

drawDot();

canvas.addEventListener('mousemove', (e) => {
  myX = e.offsetX,
  myY = e.offsetY;
  
});