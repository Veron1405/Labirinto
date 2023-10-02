const canvas = document.getElementById('labirintoCanvas');
const ctx = canvas.getContext('2d');


const labirinto = [
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1]
];

const jogador = {
    x: 1,
    y: 0,
    size: 41
};

const final = {
    x: 15,
    y: 16
};

const tileSize = canvas.width / labirinto[0].length;
let gameFinished = false;   

function desenharLabirinto() {
    for (let row = 0; row < labirinto.length; row++) {
        for (let col = 0; col < labirinto[row].length; col++) {
            if (labirinto[row][col] === 1) {
                ctx.fillStyle = 'black';
            } else {
                ctx.fillStyle = 'white';
            }
            ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
        }
    }
}

function desenharJogador() {
    ctx.fillStyle = 'green';
    ctx.fillRect(jogador.x * tileSize, jogador.y * tileSize, jogador.size, jogador.size);
}

function desenharFinal() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(final.x * tileSize, final.y * tileSize, tileSize, tileSize);
}

function moverJogador(direction) {
    if (gameFinished) {
        return; 
    }

    let newX = jogador.x;
    let newY = jogador.y;

    if (direction === 'up') {
        newY--;
    } else if (direction === 'down') {
        newY++;
    } else if (direction === 'left') {
        newX--;
    } else if (direction === 'right') {
        newX++;
    }

    if (labirinto[newY][newX] === 0) {
        jogador.x = newX;
        jogador.y = newY;

        if (jogador.x === final.x && jogador.y === final.y) {
            gameFinished = true;
            alert('Você chegou ao final do labirinto! Parabéns!');
        }
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    desenharLabirinto();
    desenharFinal();
    desenharJogador();
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        moverJogador('up');
    } else if (event.key === 'ArrowDown') {
        moverJogador('down');
    } else if (event.key === 'ArrowLeft') {
        moverJogador('left');
    } else if (event.key === 'ArrowRight') {
        moverJogador('right');
    }

    

    gameLoop();
});

desenharLabirinto();
desenharFinal();
desenharJogador();