'use strict';

function checkedBox() {
    const interests = document.getElementsByClassName('interests')[0];

    function clickCheckbox(e) {
        let target = e.target;

        // console.log(target.checked);
        // console.log(target.parentElement);
        // console.log(target.parentElement.nextElementSibling);
        // console.log(target.parentElement.previousElementSibling);
        // console.log(target.parentElement.innerText);
        // console.log(target.parentElement.nextElementSibling.children);
        // console.log(
        //     target.closest('ul').parentElement.firstElementChild
        //         .firstElementChild
        // );

        if (target.parentElement.nextElementSibling) {
            let childParentNextElement =
                target.parentElement.nextElementSibling.children;

            [...childParentNextElement].forEach((elem) => {
                elem.firstElementChild.firstElementChild.checked = true;

                if (target.checked == false) {
                    elem.firstElementChild.firstElementChild.checked = false;
                }
            });
        }

        // ДОДЕЛАТЬ ПОВЫШЕННЫЙ УРОВЕНЬ СЛОЖНОСТИ

        if (target.checked == true) {
            return (target.closest(
                'ul'
            ).parentElement.firstElementChild.firstElementChild.indeterminate = true);
        } else {
            target.closest(
                'ul'
            ).parentElement.firstElementChild.firstElementChild.indeterminate = false;
        }
    }

    interests.addEventListener('change', clickCheckbox);
}

checkedBox();
