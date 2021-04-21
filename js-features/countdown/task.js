'use strict';

const editTimer = () => {
    // Решение без усложненных вариантов, где 1 span с id timer ниже:

    const timer = document.getElementById('timer');
    timer.textContent -= 1;

    if (timer.textContent < 10) {
        timer.textContent = '0' + timer.textContent;
    }

    if (timer.textContent == 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerInterval);
    }

    /*     В этом моем решении минуты и секунды работают правильно,
    но вот с часами после 0 идет -1 и не могу разобраться как испраить это 
    */

    const timerHh = document.getElementById('timer-hh');
    const timerMm = document.getElementById('timer-mm');
    const timerSs = document.getElementById('timer-ss');
    timerSs.textContent -= 1;
    if (timerSs.textContent < 10) {
        timerSs.textContent = '0' + timerSs.textContent;
    }
    if (timerSs.textContent == 0) {
        timerMm.textContent -= 1;
        if (timerMm.textContent < 10) {
            timerMm.textContent = '0' + timerMm.textContent;
        }
        timerSs.textContent = 59;
    }
    if (timerMm.textContent == 0) {
        timerHh.textContent -= 1;
        if (timerHh.textContent < 10) {
            timerHh.textContent = '0' + timerHh.textContent;
        }
        timerMm.textContent = 59;
    }
    if (timerHh.textContent == 0) {
        timerHh.textContent = '0' + 0;
    }
    if (
        timerHh.textContent == 0 &&
        timerMm.textContent == 0 &&
        timerSs.textContent == 0
    ) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerInterval);
    }
};

const timerInterval = setInterval(editTimer, 1000);
