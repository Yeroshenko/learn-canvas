let canvas = document.getElementById('canv'),
    ctx = canvas.getContext('2d'); // canvas context

let x = 0,
    timer;

drawSin();

function drawSin() {
    y = Math.sin(x); 
    if (x > 400) {
        x = 0;
    } else {
        x = x + 0.3;
    }
    ctx.fillRect(x * 5, 100 + 20 * y, 2, 2);
    timer = setTimeout(drawSin, 10);
}