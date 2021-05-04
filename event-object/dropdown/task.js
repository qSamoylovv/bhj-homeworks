'use strict';

function openDropdown() {
    const dropdown = document.getElementsByClassName('dropdown');
    const dropdownValue = document.getElementsByClassName('dropdown__value');

    const clickDropdown = (e) => {
        e.preventDefault();
        let target = e.target;

        if (target.classList.contains('dropdown__value')) {
            target.nextElementSibling.classList.toggle('dropdown__list_active');
        }

        dropdownValue[0].textContent = target.textContent;

        if (target.classList.contains('dropdown__link')) {
            target
                .closest('.dropdown__list')
                .classList.remove('dropdown__list_active');
        }
    };

    [...dropdown].forEach((elem) =>
        elem.addEventListener('click', clickDropdown)
    );
}

openDropdown();
