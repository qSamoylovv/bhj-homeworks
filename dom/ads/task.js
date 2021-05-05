'use strict';

function randomAds() {
    const rotatorCase = document.getElementsByClassName('rotator__case');

    let ads = 0;
    function rotator(n) {
        if (n < 0) {
            ads = rotatorCase.length - 1;
        } else if (n > rotatorCase.length - 1) {
            ads = 0;
        }

        for (let i = 0; i < rotatorCase.length; i++) {
            rotatorCase[i].classList.remove('rotator__case_active');
        }

        rotatorCase[ads].classList.add('rotator__case_active');
        rotatorCase[ads].style.color = rotatorCase[ads].dataset.color;
    }

    setInterval(function () {
        ads += 1;
        return rotator(ads);
    }, 1000);

    // Не разобрался как передавать секунды
}

randomAds();
