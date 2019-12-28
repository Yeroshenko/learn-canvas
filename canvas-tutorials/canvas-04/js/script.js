let canvas = document.getElementById('canv'),
    ctx = canvas.getContext('2d'), // canvas context
    pi = Math.PI;

ctx.beginPath();
ctx.arc(150, 100, 75, 0, 2*pi, false); // (x0, y0, r, startAngle, endAngle, anticlockwise)
ctx.lineWidth = 5;
ctx.strokeStyle = 'red';
ctx.fillStyle = 'yellow';
ctx.stroke();
ctx.fill();


ctx.beginPath();  
ctx.arc(270, 100, 75, 0, 2*pi, false); // (x0, y0, r, startAngle, endAngle, anticlockwise)
ctx.lineWidth = 5;
ctx.strokeStyle = 'green';
ctx.fillStyle = 'pink';
ctx.stroke();
ctx.fill();

ctx.clearRect(0, 0, 400, 200);

canvas.addEventListener('mousemove', (e) => {
  let x = e.offsetX,
      y = e.offsetY,
      radius = Math.pow(Math.pow(x-200, 2) + Math.pow(y-100, 2),  0.5);
  
  ctx.clearRect(0, 0, 400, 200);
  ctx.beginPath();
  ctx.arc(200, 100, radius, 0, 2*pi, false);
  ctx.stroke();
  ctx.fill();
});