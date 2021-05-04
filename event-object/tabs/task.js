'use strict';

function activedTabs() {
    const tabs = document.getElementsByClassName('tab');
    const tabContent = document.getElementsByClassName('tab__content');

    function selectedTab(e) {
        let target = e.target;

        target.classList.add('tab_active');
        [...tabContent].forEach((elem) => {
            elem.classList.toggle('tab__content_active');
        });

        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i] != target) {
                tabs[i].classList.remove('tab_active');
                tabContent[i].classList.remove('tab__content_active');
            }
        }
    }

    [...tabs].forEach((elem) => elem.addEventListener('click', selectedTab));
}

activedTabs();
