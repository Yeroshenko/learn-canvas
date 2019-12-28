let canvas = document.getElementById('canv'),
    ctx = canvas.getContext('2d'); // canvas context

let fillColor = 'black',
    colorInput = document.getElementById('color');
    clear = document.getElementById('clear');

canvas.addEventListener('mousedown', (e) => {  

  canvas.addEventListener('mousemove', draw);

  function draw(e) {

    let x = e.offsetX,
        y = e.offsetY;

    ctx.fillRect(x - 5, y - 5, 10, 10);
    ctx.fillStyle = fillColor;
    ctx.lineCap = 'round';
    ctx.fill();
  }
  canvas.addEventListener('mouseup', (e) => {
    canvas.removeEventListener('mousemove', draw);
  });

});

colorInput.addEventListener('input', () => {
  fillColor = colorInput.value;
});

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, 400, 200); 
});