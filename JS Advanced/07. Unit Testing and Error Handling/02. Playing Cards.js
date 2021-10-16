function createCard(face, suit) {
    const faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suits = { 'S': '\u2660', 'H': '\u2665', 'D': '\u2666', 'C': '\u2663' };

    if (faces.includes(face) == false || Object.keys(suits).includes(suit) == false) {
        throw new Error('There is no such card face or suit!');
    }

    return {
        face,
        suit: suits[suit],
        toString() {
            return this.face + this.suit;
        }
    };
}

// let card1 = card('A', 'S');
// console.log(card1.toString());

// let card2 = card('10', 'H');
// console.log(card2.toString());

let card3 = card(1, 'S');
console.log(card3.toString());