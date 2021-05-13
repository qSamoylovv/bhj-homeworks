'use strict';

function todoList() {
    const input = document.getElementById('task__input');
    const buttonAdd = document.getElementById('tasks__add');
    const tasksList = document.getElementById('tasks__list');
    const form = document.getElementById('tasks__form');

    const taskCreate = () => {
        const task = `<div class="task">
                <div class="task__title">${input.value}</div>
                <a href="#" class="task__remove">
                    &times;
                </a>
            </div>`;

        tasksList.insertAdjacentHTML('beforeEnd', task);
        input.value = '';
    };

    const onChangeInput = () => input.value;
    const getInputText = (e) => {
        let key = e.key;

        if (key.toLowerCase() == 'enter' && !buttonAdd) {
            if (input.value.length <= 0) {
                alert('Пустая заметка');
                return;
            }

            taskCreate();
        }
    };
    const addTask = () => taskCreate();

    const removeTask = (e) => {
        e.preventDefault();
        let target = e.target;

        if (target.classList.contains('task__remove')) {
            target.parentElement.remove();
        }
    };

    form.addEventListener('submit', (e) => e.preventDefault());

    document.addEventListener('keyup', getInputText);
    input.addEventListener('change', onChangeInput);
    buttonAdd.addEventListener('click', addTask);
    tasksList.addEventListener('click', removeTask);
}

todoList();
