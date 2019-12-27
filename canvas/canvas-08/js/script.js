let canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),  // canvas context
    mas = [],
    count = 0,
    timer;

canvas.onclick = (e) => {
    let x = e.offsetX,
        y = e.offsetY;

    x = Math.floor(x / 10); // 300 / 10 = 30;
    y = Math.floor(y / 10); // 300 / 10 = 30;
    mas[y][x] = 1;
    drawField();
}

function goLife() {
    let n = 30,
        m = 30;
    for ( let i = 0; i < m; i++) {
        mas[i] = [];
        for (let j = 0; j < n; j++) {
            mas[i][j] = 0;
        }
    }
}
goLife();

function drawField() {
    ctx.clearRect(0, 0, 300, 300);
    for ( let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (mas[i][j] == 1) {
                ctx.fillRect(j * 10, i * 10, 10, 10);
            }
        }
    }
}

function startLife() {
    // Моделирование жизни
    let mas2 = [];

    this.disabled = true;
    
    for ( let i = 0; i < 30; i++) {
        mas2[i] = [];

        for (let j = 0; j < 30; j++) {
            let neighbors = 0;
            if (mas[fpm(i) - 1][j] == 1) neighbors++; // up
            if (mas[i][fpp(j) + 1] == 1) neighbors++; // right
            if (mas[fpp(i) + 1][j] == 1) neighbors++; // bottom
            if (mas[i][fpm(j) - 1] == 1) neighbors++; // left
            if (mas[fpm(i) - 1][fpp(j) + 1] == 1) neighbors++; // top-right
            if (mas[fpp(i) + 1][fpp(j) + 1] == 1) neighbors++; // bottom-right
            if (mas[fpp(i) + 1][fpm(j) - 1] == 1) neighbors++; // bottom-left
            if (mas[fpm(i) - 1][fpm(j) - 1] == 1) neighbors++; // top-left
            (neighbors== 2 || neighbors == 3) ? mas2[i][j] = 1 :  mas2[i][j] = 0; // if 2.0, upgrade
        }
    }
    mas = mas2;
    drawField();
    count++;
    document.getElementById('count').innerText = count;
    timer = setTimeout(startLife, 300);
}

function fpm(i) {
    if (i == 0) return 30;
    else return i;
}

function fpp(i) {
    if (i == 29) return -1;
    else return i;
}


document.getElementById('start').onclick = startLife;