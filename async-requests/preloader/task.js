'use strict';

function getCurrencies() {
    const loader = document.getElementById('loader');
    const items = document.getElementById('items');

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
    xhr.send();

    const createItem = (data) => {
        let valute = data.response.Valute;
        let item;

        for (let key in valute) {
            item = `
                    <div class="item">
                        <div class="item__code">${valute[key].CharCode}</div>
                        <div class="item__value">${valute[key].Value}</div>
                        <div class="item__currency">руб.</div>
                    </div>`;

            items.insertAdjacentHTML('beforeEnd', item);
        }
    };

    const viewCurrencies = () => {
        if (xhr.readyState == xhr.DONE) {
            loader.classList.toggle('loader_active');

            let response = JSON.parse(xhr.responseText);
            createItem(response);
        }
    };

    xhr.addEventListener('readystatechange', viewCurrencies);
}

getCurrencies();
