let canvas = document.getElementById('canv'),
    ctx = canvas.getContext('2d'); // canvas context

ctx.beginPath(); // init new path
ctx.strokeStyle = 'red'; // color
ctx.lineWidth = '5'; // line width
ctx.moveTo(100, 50); // from
ctx.lineTo(150, 150); // to 
ctx.stroke(); // draw stroke
 


ctx.beginPath();
ctx.strokeStyle = 'blue'; 
ctx.lineWidth = '20';
ctx.moveTo(170, 50);
ctx.lineTo(300, 50);
ctx.lineTo(300, 100);
ctx.lineTo(200, 150);
ctx.lineTo(200, 20);
ctx.lineCap = 'round'; // edges setings
ctx.stroke();

ctx.clearRect(0, 0, 400, 200); 


ctx.beginPath();
ctx.moveTo(50, 150);
ctx.lineTo(150, 50);
ctx.lineTo(200, 150);
ctx.lineWidth = '10';
ctx.lineCap = 'round';
ctx.fillStyle = 'yellow';
ctx.closePath();

ctx.stroke();
ctx.fill(); // draw fill
