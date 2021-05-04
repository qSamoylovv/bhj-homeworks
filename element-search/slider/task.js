'use strict';

function sliderImages() {
    const sliderItem = document.getElementsByClassName('slider__item');
    const sliderArrows = document.getElementsByClassName('slider__arrows');
    const sliderDots = document.getElementsByClassName('slider__dot');

    let slide = 0;
    sliderDots[0].classList.add('slider__dot_active');

    function showSliders(n) {
        if (n < 0) {
            slide = sliderItem.length - 1;
        } else if (n > sliderItem.length - 1) {
            slide = 0;
        }

        for (let i = 0; i < sliderItem.length; i++) {
            sliderItem[i].classList.remove('slider__item_active');
        }
        for (let i = 0; i < sliderDots.length; i++) {
            sliderDots[i].classList.remove('slider__dot_active');
        }

        sliderItem[slide].classList.add('slider__item_active');
        sliderDots[slide].classList.add('slider__dot_active');
    }

    function listingSliderForArrow(e) {
        let target = e.target;

        if (target.classList.contains('slider__arrow_next')) {
            slide += 1;
            showSliders(slide);
            console.log(slide);
        }
        if (target.classList.contains('slider__arrow_prev')) {
            slide -= 1;
            showSliders(slide);
            console.log(slide);
        }
    }

    function listingSliderForDots(e) {
        let target = e.target;
        const dotsArr = [...sliderDots];

        target.classList.toggle('slider__dot_active');
        slide = dotsArr.indexOf(target);

        showSliders(slide);
    }

    [...sliderArrows].forEach((elem) =>
        elem.addEventListener('click', listingSliderForArrow)
    );
    [...sliderDots].forEach((elem) =>
        elem.addEventListener('click', listingSliderForDots)
    );

    setInterval(function () {
        slide += 1;
        return showSliders(slide);
    }, 1000);
}

sliderImages();
