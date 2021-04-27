function menu() {
    const menuLinks = document.getElementsByClassName('menu__link');
    [...menuLinks].forEach((elem) => elem.addEventListener('click', menuClick));

    function menuClick(e) {
        let target = e.target;
        if (target.nextElementSibling) {
            e.preventDefault();
            this.nextElementSibling.classList.toggle('menu_active');
        }

        const subMenu = document.querySelectorAll('.menu__item .menu_sub');
        for (let i = 0; i < subMenu.length; i++) {
            if (subMenu[i] != target.nextElementSibling) {
                subMenu[i].classList.remove('menu_active');
            }
        }
    }
}

menu();
