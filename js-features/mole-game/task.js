'use strict';

function clickBoard() {
    // const getHole = (index) => document.getElementById(`hole${index}`);
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    const hole = document.querySelectorAll('.hole');

    hole.forEach((elem) => {
        function clickMole() {
            if (elem.classList.contains('hole_has-mole')) {
                deadCounter.textContent = +deadCounter.textContent + 1;
            } else {
                lostCounter.textContent = +lostCounter.textContent + 1;
            }

            console.log(lostCounter.textContent);
            if (deadCounter.textContent == 10) {
                alert('Победа!');
                location.reload();
            }

            if (lostCounter.textContent == 5) {
                alert('Вы проиграли');
                location.reload();
            }
        }

        elem.addEventListener('click', clickMole);
    });
}

clickBoard();
