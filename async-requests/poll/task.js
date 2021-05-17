'use strict';

function showQuestions() {
    const pollTitle = document.getElementById('poll__title');
    const pollAnswers = document.getElementById('poll__answers');
    const modal = document.getElementById('modal');
    const buttonModalClose = document.getElementById('modal__button');

    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
    xhr.responseType = 'json';
    xhr.send();

    const getQuestion = () => {
        if (xhr.readyState === xhr.DONE) {
            let response = xhr.response;
            let answers = response.data.answers;
            let answerButton;

            for (let i = 0; i < answers.length; i++) {
                answerButton = `
                <button class="poll__answer">
                    ${answers[i]}
                </button>`;

                pollAnswers.insertAdjacentHTML('beforeend', answerButton);
            }

            pollTitle.style.marginBottom = `${10}px`;
            pollTitle.innerText = response.data.title;
        }

        const buttons = document.getElementsByClassName('poll__answer');
        [...buttons].forEach((elem) => elem.addEventListener('click', showModal));
    };

    const showModal = () => modal.classList.toggle('modal__active');

    xhr.addEventListener('readystatechange', getQuestion);
    buttonModalClose.addEventListener('click', showModal);
}

showQuestions();
