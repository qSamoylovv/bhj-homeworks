'use strict';

function openingModals() {
    const subscribeModal = document.getElementById('subscribe-modal');
    const modalClose = document.getElementsByClassName('modal__close')[0];

    const getCookie = (key) => {
        const cookieSplit = document.cookie.split('; ');
        const cookie = cookieSplit.find((c) => c.startsWith(key + '='));

        return cookie ? cookie.substr((key + '=').length) : null;
    };
    // document.cookie = 'modalClosed=; Expires=Thu, 01 Jan 1970 00:00:00 GMT';
    // Строкой выше я проверял как работает скрипт

    const closeModal = (e) => {
        let target = e.target;
        subscribeModal.classList.remove('modal_active');

        if (target.classList.contains('modal__close')) {
            document.cookie = 'modalClosed=true';
        }
    };
    modalClose.addEventListener('click', closeModal);

    if (document.cookie == '') {
        setTimeout(() => subscribeModal.classList.add('modal_active'), 1000);
    }
    if (getCookie('modalClosed') == 'true') {
        return;
    }
}

openingModals();
