let canvas = document.getElementById('canv'),
    ctx = canvas.getContext('2d'), // canvas context

    inputs = document.querySelectorAll('.slider'),
    rBigEl = document.getElementById('rBig'),
    rSmallEl = document.getElementById('rSmall'),
    diameterEl = document.getElementById('diameter'),
    rBig = rBigEl.value,
    rSmall = rSmallEl.value,
    diameter = diameterEl.value,
    teta = 0,
    timer;

console.log(diameter);
    

spiro();

inputs.forEach( (item) => {
    item.addEventListener('input', () => {

        ctx.clearRect(0, 0, 600, 600);
        rBig = rBigEl.value;
        rSmall = rSmallEl.value;
        diameter = diameterEl.value;
        
    });
});


function spiro() {
    let x = (rBig - rSmall) * Math.cos(teta) + diameter * Math.cos((rBig - rSmall) * teta / rSmall),
        y = (rBig - rSmall) * Math.sin(teta) - diameter * Math.sin((rBig - rSmall) * teta / rSmall);
    
    teta = teta + 0.02;
    ctx.fillRect(300+x, 300+y, 5, 5);
    timer = setTimeout(spiro, 1);

}

