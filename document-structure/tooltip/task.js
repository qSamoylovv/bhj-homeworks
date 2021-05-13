'use strict';

function clickTooltip() {
    const hasTooltip = document.getElementsByClassName('has-tooltip');
    const tooltip = document.createElement('div');

    const showTooltip = (e) => {
        e.preventDefault();
        let target = e.target;

        tooltip.innerText = target.title;
        tooltip.classList.add('tooltip');
        tooltip.classList.toggle('tooltip_active');
        tooltip.style.left = target.getBoundingClientRect().left + 'px';

        target.appendChild(tooltip);

        for (let i = 0; i < hasTooltip.length; i++) {
            if (hasTooltip[i] != target) {
                hasTooltip[i].classList.remove('tooltip_active');
            }
        }
    };

    [...hasTooltip].forEach((elem) =>
        elem.addEventListener('click', showTooltip)
    );
}

clickTooltip();
