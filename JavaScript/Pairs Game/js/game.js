(() => {
    const game = document.getElementById('game');

    function startGame(game, cardsCount) {
        const cardsNumberArray = [];
        let firstCard = null;
        let secondCard = null;

        // Создание чисел массива
        for (let i = 1; i <= cardsCount; i++) {
            cardsNumberArray.push(i, i)
        };

        // Перемешивание массива чисел
        for (let i = 0; i < cardsNumberArray.length; i++) {
            let randomIndex = Math.floor(Math.random() * cardsNumberArray.length);

            let temp = cardsNumberArray[i];
            cardsNumberArray[i] = cardsNumberArray[randomIndex];
            cardsNumberArray[randomIndex] = temp;
        };

        // Настройка сетки
        let colums = 4;

        if (cardsCount === 3) {
            colums = 3
        };

        if (cardsCount === 5) {
            colums = 5
        };

        if (cardsCount === 7) {
            colums = 7
        };

        game.style = `grid-template-columns: repeat(${colums}, 1fr)`

        // Создание карточек
        for (const cardNumber of cardsNumberArray) {
            let card = document.createElement('div');
            card.textContent = cardNumber;
            card.classList.add('card');

            // Клик по карточке
            card.addEventListener('click', () => {
                if (card.classList.contains('open') || card.classList.contains('success')) {
                    return
                };

                if (firstCard !== null && secondCard !== null) {
                    firstCard.classList.remove('open');
                    secondCard.classList.remove('open');
                    firstCard = null;
                    secondCard = null;
                };

                card.classList.add('open');

                if (firstCard === null) {
                    firstCard = card
                } else {
                    secondCard = card
                };

                if (firstCard !== null && secondCard !== null) {
                    let firstCardNumber = firstCard.textContent;
                    let secondCardNumber = secondCard.textContent;

                    if (firstCardNumber === secondCardNumber) {
                        firstCard.classList.add('success');
                        secondCard.classList.add('success');
                    };
                };

                if (cardsNumberArray.length === document.querySelectorAll('.success').length) {
                    setTimeout(() => {
                        game.innerHTML = '';
                        alert('Победа!!');
                        let cardsCount = Number(prompt("Введите кол-во пар", 4));
                        startGame(game, cardsCount);
                    }, 400);
                };
            });

            game.append(card);
        };
    }

    let cardsCount = Number(prompt("Введите кол-во пар", 4));
    startGame(game, cardsCount)

})();