'use strict';

function checkedBox() {
    const interests = document.getElementsByClassName('interest');

    const checkedParents = (e) => {
        let target = e.currentTarget;
        const inputsParentTarget = target.closest('ul').parentElement.firstElementChild.children;
        const targetChild = e.target.closest('ul').children;

        [...inputsParentTarget].forEach((parent) => {
            let inpt = [...targetChild].map((elem) => elem.querySelector('.interest__check'));

            const everyCheckChild = [...inpt].every((elem) => elem.checked == true);
            const someCheckChild = [...inpt].some((elem) => elem.checked == true);

            if (e.target.checked == false) {
                parent.indeterminate = false;
                parent.checked = false;
            }
            if (someCheckChild == true) {
                parent.indeterminate = true;
            }
            if (everyCheckChild == true) {
                parent.indeterminate = false;
                parent.checked = true;
            }
        });
    };

    const checkedChildrens = (e) => {
        let target = e.target;
        const inputsChildTarget = target.parentElement.parentElement.children;

        [...inputsChildTarget].forEach((elem) => {
            const inputs = elem.getElementsByClassName('interest__check');

            [...inputs].forEach((elem) => {
                if (elem != target) {
                    elem.checked = true;
                }
                if (target.checked == false) {
                    elem.checked = false;
                }
            });
        });
    };

    [...interests].forEach((elem) => {
        elem.addEventListener('change', checkedChildrens);
        elem.addEventListener('change', checkedParents);
    });
}

checkedBox();
