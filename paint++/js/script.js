let info = document.querySelector('.info'),
    controls = document.querySelector('.controls'),
    colorInput = document.querySelector('#color'),
    canv = document.getElementById('canvas'),
    ctx = canv.getContext('2d'),
    mainColor = color.value,
    isMouseDown = false,
    coords = [],
    radius = 7;

/* canv size */    

canv.width = window.innerWidth;
canv.height = window.innerHeight;


/* code */

function hideMore() {
    info.style.display = 'none';
    controls.style.display = 'none';
}

function showMore() {
    info.style.display = 'block';
    controls.style.display = 'block';
}

// hover + click
canv.addEventListener('mousedown', () => {
    isMouseDown = true;
    hideMore();
});
canv.addEventListener('mouseup', () => {
    isMouseDown = false;
    ctx.beginPath();
    coords.push('mouseup');
    showMore();
});

ctx.lineWidth = radius * 2;
canv.addEventListener('mousemove', (e) => {

    if (isMouseDown == true) {
        coords.push([e.clientX, e.clientY]);

        ctx.lineTo(e.clientX, e.clientY);
        ctx.strokeStyle = mainColor;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        ctx.fillStyle = mainColor;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    
});

function save() {
    localStorage.setItem('coords', JSON.stringify(coords));
}

function replay() {
    let timer = setInterval( () => {
        if (!coords.length) {
            clearInterval(timer);
            ctx.beginPath();
            return;
        }
        let crd = coords.shift(),
            e = {
                clientX: crd['0'],
                clientY: crd['1'],
            };

        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(e.clientX, e.clientY, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }, 30);
}

function clear() {
    ctx.clearRect(0, 0, canv.width, canv.height);
    ctx.beginPath();
}


document.addEventListener('keydown', (e) => {

    if (e.keyCode == 83){
        // save
        save();
        console.log('saved');
        
    }
    if (e.keyCode == 82){
        // replay
        console.log("replaying ...");

        coords = JSON.parse(localStorage.getItem('coords'));
        clear();
        replay();
    }
    if (e.keyCode == 67){
        // clear
        clear();
        console.log('cleared');     
    } 
});

window.addEventListener('resize', () => {
    save();
    location.reload();
});

colorInput.addEventListener('input', () => {
    mainColor = color.value;
});