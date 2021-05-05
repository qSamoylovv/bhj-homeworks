'use strict';

function toggleSizeColor() {
    const book = document.getElementById('book');
    const links = document.querySelectorAll('.book__control a');

    function toggle(e) {
        let target = e.target;
        e.preventDefault();

        if (target.classList.contains('font-size')) {
            target.classList.add('font-size_active');
        }
        if (target.classList.contains('color')) {
            target.classList.add('color_active');
        }

        if (target.dataset.size) {
            book.classList.add(`book_fs-${target.dataset.size}`);
        } else {
            book.classList.remove('book_fs-small', 'book_fs-big');
        }
        if (target.dataset.textColor) {
            book.classList.remove(
                'book_color-gray',
                'book_color-whitesmoke',
                'book_color-black'
            );
            book.classList.add(`book_color-${target.dataset.textColor}`);
        }
        if (target.dataset.bgColor) {
            book.classList.remove(
                'book_bg-gray',
                'book_bg-black',
                'book_bg-white'
            );
            book.classList.add(`book_bg-${target.dataset.bgColor}`);
        }

        [...links].find((elem) => {
            if (elem != target) {
                elem.classList.remove('font-size_active', 'color_active');
            }
        });
    }

    [...links].forEach((elem) => elem.addEventListener('click', toggle));
}

toggleSizeColor();
