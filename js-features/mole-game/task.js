'use strict';

function clickBoard() {
    // const getHole = (index) => document.getElementById(`hole${index}`);
    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    const hole = document.querySelectorAll('.hole');

    hole.forEach((elem) => {
        elem.addEventListener('click', clickMole);
    });

    function clickMole() {
        if (this.classList.contains('hole_has-mole')) {
            deadCounter.textContent = +deadCounter.textContent + 1;
        } else {
            lostCounter.textContent = +lostCounter.textContent + 1;
        }

        if (deadCounter.textContent == 10) {
            alert('Победа!');
            document.location.reload();
        }

        if (lostCounter.textContent == 5) {
            alert('Вы проиграли');
            document.location.reload();
        }
    }
}

clickBoard();
