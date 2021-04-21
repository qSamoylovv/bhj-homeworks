'use strict';

function clicker() {
    const click = document.getElementById('cookie');
    const counter = document.getElementById('clicker__counter');
    const speedClick = document.getElementById('clicker-speed');
    let lastClickTime = 0;

    function cookieClick() {
        if (click.width == 200) {
            click.width = 180;
        } else if (click.width == 180) {
            click.width = 200;
        }

        counter.textContent = ++counter.textContent;

        let nowClickTime = +new Date();
        let nowClick = 1000 / (nowClickTime - lastClickTime);
        lastClickTime = nowClickTime;

        speedClick.textContent = nowClick.toFixed(2);
    }

    click.onclick = cookieClick;
}

clicker();
