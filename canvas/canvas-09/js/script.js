let canvas = document.getElementById('canv'),
    ctx = canvas.getContext('2d'); // canvas context


ctx.fillStyle = 'red';
ctx.strokeStyle = 'blue';
ctx.lineWidth = '5';
ctx.lineCap = 'round';

// ctx.moveTo(200, 50);

// ctx.quadraticCurveTo(150, 0, 100, 50);
// ctx.quadraticCurveTo(50, 150, 200, 180);
// ctx.quadraticCurveTo(350, 150, 300, 50);
// ctx.quadraticCurveTo(250, 0, 200, 50);

// ctx.stroke();
// ctx.fill();


canvas.onmousemove = (e) => {
    let x = e.offsetX,
        y = e.offsetY;

    ctx.clearRect(0, 0, 400, 200);

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = '5';
    ctx.lineCap = 'round';
    ctx.moveTo(50, 50);
    ctx.quadraticCurveTo(x, y, 50, 150);
    ctx.closePath();
    ctx.stroke();

        
    ctx.beginPath(); 
    ctx.strokeStyle = 'black'; 
    ctx.lineWidth = '1'; // line width
    ctx.moveTo(50, 50); // from
    ctx.lineTo(x, y); // to 
    ctx.lineTo(50, 150); // to 
    ctx.closePath();
    ctx.stroke(); // draw stroke
    
     // (x0, y0, r, startAngle, endAngle, anticlockwise)
    ctx.beginPath(); 
    ctx.arc(x, y, 5, 0, Math.PI * 2 );
    ctx.closePath();
    ctx.fillStyle = 'blue';
    ctx.stroke();
    ctx.fill();
};