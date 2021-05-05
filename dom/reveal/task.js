'use strict';

function infoViewScroll() {
    const reveal = document.getElementsByClassName('reveal');

    function viewInfo() {
        [...reveal].forEach((elem) => {
            if (elem.getBoundingClientRect().top < window.innerHeight / 2) {
                elem.classList.add('reveal_active');
            } else if (
                elem.getBoundingClientRect().bottom > window.innerHeight
            ) {
                elem.classList.remove('reveal_active');
            }
        });
    }

    document.addEventListener('scroll', viewInfo);
}

infoViewScroll();
