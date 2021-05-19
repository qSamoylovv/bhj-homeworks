'use strict';

function loadText() {
    const editor = document.getElementById('editor');
    const clearButton = document.getElementById('clear-button');

    const getInput = () => localStorage.setItem('editor', editor.value);
    editor.value = localStorage.getItem('editor');

    const clearEditor = () => {
        editor.value = '';
        localStorage.removeItem('editor');
    };

    editor.addEventListener('input', getInput);
    clearButton.addEventListener('click', clearEditor);
}

loadText();
