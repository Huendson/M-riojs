const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const fundo = document.querySelector('.game-board')

const jump = () => {
    mario.classList.add('jumpMario')

    setTimeout(() => {
        mario.classList.remove('jumpMario')
    }, 1000)
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '')

    if (pipePosition <= 213 && pipePosition > 0 && marioPosition < 75) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; 

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '9em'

        clearInterval(loop)

        fundo.style.animation = 'none'; 
        fundo = `${marioPosition,pipePosition}px`;

    }
}, 10)
document.addEventListener('keydown', jump)