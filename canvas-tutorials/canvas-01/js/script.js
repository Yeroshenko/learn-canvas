let canvas = document.getElementById('canv'),
    ctx = canvas.getContext('2d'); // canvas context


ctx.fillStyle = '#c2e9fb';    
ctx.fillRect(100, 50, 150, 75); // (x0, y0, width, height)

ctx.fillStyle = '#84fab0';
ctx.fillRect(150, 100, 100, 50);

ctx.clearRect(0, 0, 400, 200); // стерает участок (x0, y0, width, height)

ctx.rect(50, 10, 100, 100);
ctx.strokeStyle = '#72FF9F';
ctx.lineWidth = '7'
ctx.stroke();
ctx.fillStyle = '#FF6B9F';
ctx.fill();
