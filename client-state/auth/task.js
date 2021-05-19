'use strict';

function signin() {
    const form = document.getElementById('signin__form');
    const modal = document.getElementById('modal');
    const buttonModalClose = document.getElementById('modal__button');
    const formContainer = document.getElementById('signin');
    const loginWelcome = document.getElementById('welcome');
    const userId = document.getElementById('user_id');
    const buttonLogout = document.getElementById('button-logout');
    const formInputs = document.getElementsByClassName('control');

    formContainer.classList.add('signin_active');

    const showModal = () => modal.classList.toggle('modal__active');
    const formInputsClear = (elem) => (elem.value = '');
    const logout = () => {
        localStorage.removeItem('user_id');
        userId.innerHTML = '';
        [...formInputs].forEach((elem) => formInputsClear(elem));
        loginWelcome.classList.remove('welcome_active');
        formContainer.classList.add('signin_active');
    };
    const showLoginProfile = (key) => {
        formContainer.classList.remove('signin_active');
        userId.insertAdjacentHTML('afterbegin', `${key}`);
        loginWelcome.classList.add('welcome_active');
    };
    const sendForm = (e) => {
        e.preventDefault();

        let formData = new FormData(form);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.responseType = 'json';

        const getRequest = () => {
            if (xhr.readyState === xhr.DONE) {
                let response = xhr.response;
                console.log(response);

                if (response.success == false) {
                    showModal();
                    [...formInputs].forEach((elem) => formInputsClear(elem));
                } else {
                    localStorage.setItem('user_id', `${response.user_id}`);
                    showLoginProfile(response.user_id);
                }
            }
        };

        xhr.addEventListener('readystatechange', getRequest);
        xhr.send(formData);
    };

    form.addEventListener('submit', sendForm);
    buttonModalClose.addEventListener('click', showModal);
    buttonLogout.addEventListener('click', logout);
    window.addEventListener('load', () => {
        if (localStorage.getItem('user_id')) {
            showLoginProfile(localStorage.getItem('user_id'));
        }
    });
}

signin();
