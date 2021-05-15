'use strict';

function addingToCart() {
    const cartProducts = document.getElementsByClassName('cart__products')[0];
    const product = document.getElementsByClassName('product');
    const productQuantityValue = document.getElementsByClassName(
        'product__quantity-value'
    );
    const productImage = document.getElementsByClassName('product__image');
    const cart = document.getElementsByClassName('cart')[0];

    const clickProduct = (e) => {
        let target = e.target;
        let productId = target.closest('.product').dataset.id - 1;

        if (target.classList.contains('product__quantity-control_dec')) {
            productQuantityValue[productId].innerText -= 1;
        }
        if (target.classList.contains('product__quantity-control_inc')) {
            productQuantityValue[productId].innerText =
                +productQuantityValue[productId].innerText + 1;
        }
        if (productQuantityValue[productId].innerText < 1) {
            productQuantityValue[productId].innerText = 1;
        }
        if (target.classList.contains('product__add')) {
            let productToCart = `
                <div class="cart__product" data-id="${productId + 1}">
                    <img class="cart__product-image" src="${
                        productImage[productId].src
                    }" />
                    <div class="cart__product-count">${
                        productQuantityValue[productId].innerText
                    }</div>
                    <a class="cart__product-remove" href="#">X</a>
                </div>`;

            cart.classList.add('cart-show');

            let productInCart = [...cartProducts.children].find((elem) => {
                if (elem.dataset.id == productId + 1) {
                    return elem;
                }
            });

            if (productInCart) {
                const count = productInCart.getElementsByClassName(
                    'cart__product-count'
                )[0];

                count.innerText =
                    +count.innerText +
                    +productQuantityValue[productId].innerText;
            } else {
                cartProducts.insertAdjacentHTML('beforeEnd', productToCart);
            }
        }
    };

    const removeProduct = (e) => {
        e.preventDefault();
        let target = e.target;

        if (target.classList.contains('cart__product-remove')) {
            target.parentElement.remove();
        }
    };

    [...product].forEach((elem) =>
        elem.addEventListener('click', clickProduct)
    );
    cartProducts.addEventListener('click', removeProduct);
}

addingToCart();
