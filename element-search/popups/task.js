'use strict';

function openingModals() {
    const modalMain = document.getElementById('modal_main');
    const modalSuccess = document.getElementById('modal_success');
    const modalClose = document.getElementsByClassName('modal__close');
    const modalCloseArr = [...modalClose];

    modalMain.classList.add('modal_active');

    function clickModal() {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    }

    function closeModal() {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.remove('modal_active');
    }

    modalMain.addEventListener('click', clickModal);

    modalCloseArr.forEach((elem) => elem.addEventListener('click', closeModal));
}

openingModals();
