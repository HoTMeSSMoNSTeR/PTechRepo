// will need a Deck class that handles creating the deck of cards, shuffling and dealing
// ♠️ ♣️ ♥️ ♦️ array
// class to creat a card object, card needs a rank, a suit and a value()
// will need a player arrays that will hold the cards
// need a class to make both players draw the next card






class Card {
    constructor(suit, rank, score) {
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}

class Deck {
    constructor() {
        this.cardDeck = []
    }


    createDeck() {
        const suits = ['♠️', '♣️', '♥️', '♦️'];
        const rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < rank.length; x++) {
                this.cardDeck.push(new Card(suits[i], rank[x], score[x]))
            }
        }
    }
}


let deck = new Deck();
deck.createDeck()
let shuffledDeck = deck.cardDeck.sort(() => Math.random() - 0.5)
console.log(shuffledDeck)

let player1 = []
let player2 = []

for (let i = 0; i < shuffledDeck.length; i++) {
    if (i % 2 == 0) {
        player1.push(shuffledDeck[i])
    } else {
        player2.push(shuffledDeck[i])
    }
}

console.log(player1)
console.log(player2)

function getScore(playerDeck) {
    let finalScore = 0
    for (let i = 0; i < playerDeck.length; i++) {
        finalScore += playerDeck[i].score;
        return finalScore
    }
}


console.log(getScore(player1))
console.log(getScore(player2))

// create cards
// shuffle cards
// push 24 to each player
// add the totals of the cards together
// higher numbered card wins, that player gets a point
// points pushed to separate arrays
//  equal cards results in no points
// highest total wins