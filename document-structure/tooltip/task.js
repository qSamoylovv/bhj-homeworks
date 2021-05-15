'use strict';

function clickTooltip() {
    const hasTooltip = document.getElementsByClassName('has-tooltip');
    const tooltip = document.getElementsByClassName('tooltip')[0];

    const showTooltip = (e) => {
        e.preventDefault();
        let target = e.target;

        if (target.title == tooltip.innerText) {
            tooltip.classList.toggle('tooltip_active');
        } else {
            tooltip.innerText = target.title;
            tooltip.style.left = target.getBoundingClientRect().left + 'px';
            tooltip.style.top = target.getBoundingClientRect().top + 20 + 'px';
            tooltip.classList.add('tooltip_active');
        }
    };

    [...hasTooltip].forEach((elem) =>
        elem.addEventListener('click', showTooltip)
    );
}

clickTooltip();
