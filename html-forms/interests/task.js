'use strict';

function checkedBox() {
    const interests = document.getElementsByClassName('interest');

    const checkedParents = (e) => {
        let target = e.currentTarget;
        const inputsParentTarget = target.closest('ul').parentElement.firstElementChild.children;

        [...inputsParentTarget].forEach((elem) => {
            if (elem != e.target) {
                elem.indeterminate = true;
            }
            if (e.target.checked == false) {
                elem.indeterminate = false;
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
