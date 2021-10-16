function printDeckOfCards(cards) {
    result = [];

    for (const cardStr of cards) {
        const cardFace = cardStr.slice(0, -1);
        const cardSuit = cardStr.slice(-1);

        try {
            result.push(createCard(cardFace, cardSuit));
        } catch (error) {
            console.log(error.message);
            return;
        }
    }
    
    console.log(result.join(' '));

    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };

        if (faces.includes(face) == false || Object.keys(suits).includes(suit) == false) {
            throw new Error(`Invalid card: ${face + suit}`);
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        };
    }
}

//printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);
