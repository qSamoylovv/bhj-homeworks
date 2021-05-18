'use strict';

function loadingFile() {
    const progress = document.getElementById('progress');
    const form = document.getElementById('form');

    const sendForm = (e) => {
        e.preventDefault();

        let input = document.getElementsByName('file')[0];
        let fileInput = input.files[0];
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

        const getRequest = (e) => {
            let persentLoad = Math.ceil((e.loaded * 100) / e.total) / 100;
            progress.value = persentLoad;
        };

        xhr.upload.addEventListener('progress', getRequest);
        xhr.send(fileInput);
    };

    form.addEventListener('submit', sendForm);
}

loadingFile();
