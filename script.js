document.addEventListener('DOMContentLoaded', () => {
    const mario = document.getElementById('mario');
    const game = document.getElementById('game');
    const startButton = document.getElementById('startButton');
    let isJumping = false;
    let gravity = 0.9;
    let position = 0;
    let isGameOver = false;
    let gameTimerId;

    function control(e) {
        if (e.keyCode === 32) { // Espaço para pular
            jump();
        }
    }

    function jump() {
        if (isJumping) return;
        isJumping = true;
        let count = 0;
        let timerId = setInterval(function () {
            // Subida
            if (count === 15) {
                clearInterval(timerId);
                let downTimerId = setInterval(function () {
                    // Descida
                    if (count === 0) {
                        clearInterval(downTimerId);
                        isJumping = false;
                    }
                    position -= 5;
                    count--;
                    position = position * gravity;
                    mario.style.bottom = position + 'px';
                }, 20);
            }
            position += 30;
            count++;
            position = position * gravity;
            mario.style.bottom = position + 'px';
        }, 20);
    }

    function generateObstacle() {
        let obstacleLeft = 500;
        const obstacle = document.createElement('div');
        if (!isGameOver) obstacle.classList.add('obstacle');
        game.appendChild(obstacle);
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = '0px'; // Posiciona o obstáculo na parte inferior do mapa

        function moveObstacle() {
            obstacleLeft -= 4;
            obstacle.style.left = obstacleLeft + 'px';

            if (obstacleLeft === -50) {
                clearInterval(timerId);
                game.removeChild(obstacle);
            }
            if (
                obstacleLeft > 50 && obstacleLeft < 100 && position < 100
            ) {
                gameOver();
                clearInterval(timerId);
            }
        }
        let timerId = setInterval(moveObstacle, 20);
        if (!isGameOver) setTimeout(generateObstacle, 3000);
    }

    function startGame() {
        isGameOver = false;
        position = 0;
        mario.style.bottom = position + 'px';
        document.addEventListener('keydown', control);
        generateObstacle();
        startButton.style.display = 'none';
    }

    function gameOver() {
        isGameOver = true;
        document.removeEventListener('keydown', control);
        startButton.style.display = 'block';
    }

    startButton.addEventListener('click', startGame);
});