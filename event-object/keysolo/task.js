class Game {
    constructor(container) {
        this.container = container;
        this.wordElement = container.querySelector('.word');
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');

        this.reset();

        this.registerEvents();
    }

    reset() {
        this.setNewWord();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }

    registerEvents() {
        const counterValue = document.getElementsByClassName('counter');
        const text = document.querySelectorAll('.word span');
        const wins = document.getElementsByClassName('status__wins');
        const loss = document.getElementsByClassName('status__loss');

        counterValue[0].innerHTML = text.length;

        const counter = () => {
            counterValue[0].innerHTML -= 1;
        };

        const keys = (e) => {
            console.log(this.currentSymbol);
            console.log(e.key);
            console.log(e.keyCode);

            if (
                text[0]
                    .closest('.word')
                    .lastElementChild.classList.contains('symbol_correct')
            ) {
                counterValue[0].innerHTML = text.length;
            }

            if (
                e.key.toLowerCase() ===
                this.currentSymbol.innerHTML.toLowerCase()
            ) {
                this.success();
            } else {
                this.fail();
            }
        };

        let interval = setInterval(counter, 1000);

        document.addEventListener('keyup', keys);
    }

    success() {
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;
        if (this.currentSymbol !== null) {
            return;
        }

        if (++this.winsElement.textContent === 10) {
            alert('Победа!');
            this.reset();
        }
        this.setNewWord();
    }

    fail() {
        if (++this.lossElement.textContent === 5) {
            alert('Вы проиграли!');
            this.reset();
        }
        this.setNewWord();
    }

    setNewWord() {
        const word = this.getWord();

        this.renderWord(word);
    }

    getWord() {
        const words = [
                'bob',
                'awesome',
                'netology',
                'hello',
                'kitty',
                'rock',
                'youtube',
                'popcorn',
                'cinema',
                'love',
                'javascript',
                // 'я люблю kitkat',
            ],
            index = Math.floor(Math.random() * words.length);

        return words[index];
    }

    renderWord(word) {
        const html = [...word]
            .map(
                (s, i) =>
                    `<span class="symbol ${
                        i === 0 ? 'symbol_current' : ''
                    }">${s}</span>`
            )
            .join('');
        this.wordElement.innerHTML = html;

        this.currentSymbol = this.wordElement.querySelector('.symbol_current');
    }
}

new Game(document.getElementById('game'));
