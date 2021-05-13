'use strict';

function chat() {
    const chatWidget = document.getElementsByClassName('chat-widget')[0];
    const chatSide = document.getElementsByClassName('chat-widget__side');
    const messageContainer = document.getElementsByClassName(
        'chat-widget__messages-container'
    )[0];
    const chatInput = document.getElementById('chat-widget__input');
    const chatMessages = document.getElementById('chat-widget__messages');

    const chatEvent = (e) => {
        let target = e.target;
        target.closest('.chat-widget').classList.toggle('chat-widget_active');

        // НЕ РЕАЛИЗОВАЛ СООБЩЕНИЯ ПО ТАЙМЕРУ ЧЕРЕЗ 30 СЕК ЕСЛИ НЕ БЫЛО КЛИКА С ОТКРЫТЫМ ЧАТОМ

        if (chatWidget.classList.contains('chat-widget_active')) {
            setTimeout(() => {
                chatMessages.innerHTML += `
                <div class="message">
                    <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
                    <div class="message__text">
                        ${printMessages()}
                    </div>
                </div>`;
            }, 30000);
        }
    };

    function printMessages() {
        const message = [
            'Привет',
            'Не пиши',
            'Молчишь?',
            'Как дела',
            'Не понял! Ты где?',
            'До свидания',
            'Погода норм',
            'Зачем вы тут?',
            'Повторите плиз',
        ];
        let mess = Math.floor(Math.random() * message.length);

        return message[mess];
    }

    const onChange = () => chatInput.value;

    function liveChat(e) {
        if (e.key.toLowerCase() == 'enter') {
            if (chatInput.value.length <= 0) {
                alert('Пустое поле сообщения!');
                return;
            }
            chatMessages.innerHTML += `
                <div class="message message_client">
                    <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
                    <div class="message__text">
                        ${chatInput.value}
                    </div>
                </div>`;

            chatMessages.innerHTML += `
                <div class="message">
                    <div class="message__time">${new Date().getHours()}:${new Date().getMinutes()}</div>
                    <div class="message__text">
                        ${printMessages()}
                    </div>
                </div>`;

            chatInput.value = '';
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
    }

    document.addEventListener('keyup', liveChat);
    chatInput.addEventListener('change', onChange);
    chatSide[0].addEventListener('click', chatEvent);
}

chat();
