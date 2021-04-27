'use strict';

function sliderImages() {
    const sliderItem = document.getElementsByClassName('slider__item');
    const sliderItemLength = sliderItem.length;
    const sliderArrows = document.getElementsByClassName('slider__arrows');
    const sliderDots = document.getElementsByClassName('slider__dot');
    const sliderDotsLength = sliderDots.length;

    let slide;
    sliderDots[0].classList.add('slider__dot_active');

    function listingSliderForArrow(e) {
        let target = e.target;

        if (target.classList.contains('slider__arrow_next')) {
            if (isNaN(slide) || slide == undefined) {
                slide = 0;
            }

            slide += 1;
            if (slide >= sliderItemLength) {
                slide = 0;
                sliderItem[sliderItemLength - 1].classList.remove(
                    'slider__item_active'
                );
                sliderDots[sliderDotsLength - 1].classList.remove(
                    'slider__dot_active'
                );
                sliderDots[0].classList.toggle('slider__dot_active');
            }

            sliderItem[slide].classList.toggle('slider__item_active');
            sliderItem[slide - 1].classList.remove('slider__item_active');

            sliderDots[slide].classList.toggle('slider__dot_active');
            sliderDots[slide - 1].classList.remove('slider__dot_active');
        }
        if (target.classList.contains('slider__arrow_prev')) {
            if (isNaN(slide) || slide == undefined) {
                slide = sliderItemLength;
            }

            slide -= 1;
            if (slide < 0) {
                slide = sliderItemLength - 1;
            }
            if (slide == sliderItemLength - 1) {
                sliderItem[0].classList.remove('slider__item_active');
                sliderDots[0].classList.remove('slider__dot_active');
                sliderDots[slide].classList.toggle('slider__dot_active');
            }

            sliderItem[slide].classList.toggle('slider__item_active');
            sliderItem[slide + 1].classList.remove('slider__item_active');

            sliderDots[slide].classList.toggle('slider__dot_active');
            sliderDots[slide + 1].classList.remove('slider__dot_active');
        }
    }

    function listingSliderForDots(e) {
        let target = e.target;
        const dotsArr = [...sliderDots];

        dotsArr.forEach((elem) => {
            let index = elem;

            this.classList.toggle('slider__dot_active');

            if (dotsArr.indexOf(target) == dotsArr.indexOf(index)) {
                sliderItem[dotsArr.indexOf(target)].classList.toggle(
                    'slider__item_active'
                );
            }
        });

        for (let i = 0; i < dotsArr.length; i++) {
            if (dotsArr[i] != target) {
                sliderItem[i].classList.remove('slider__item_active');
                dotsArr[i].classList.remove('slider__dot_active');
            }
        }
    }

    [...sliderArrows].forEach((elem) =>
        elem.addEventListener('click', listingSliderForArrow)
    );
    [...sliderDots].forEach((elem) =>
        elem.addEventListener('click', listingSliderForDots)
    );
}

sliderImages();
