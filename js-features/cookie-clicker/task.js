'use strict';

function clicker() {
    const click = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    const speedClick = document.getElementById('clicker-speed');
    const realTime = new Date().getTime();

    function cookieClick() {
        click.width = 180;
        counter.textContent = ++counter.textContent;

        const clickTime = +new Date();
        let lastClick = +((clickTime - realTime) / 1000).toFixed(2);

        speedClick.textContent = (1 / lastClick).toFixed(2);
    }

    click.width = 200;
    speedClick.textContent = 0;

    click.onclick = cookieClick;
}

const interval = setInterval(clicker, 800);
