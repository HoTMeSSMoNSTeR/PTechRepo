// will need a Deck class that handles creating the deck of cards, shuffling and dealing
// ♠️ ♣️ ♥️ ♦️ array
// class to creat a card object, card needs a rank, a suit and a value()
// will need a player arrays that will hold the cards
// need a class to make both players draw the next card

// create cards
// shuffle cards
// push 26 to each player
// add the totals of the cards together
// higher numbered card wins, that player gets a point
// points pushed to separate arrays
//  equal cards results in no points
// highest total wins


// the card class makes it so that the program can create each card with the values passed in to the constructor instead of hard coding
// all 52 cards.
class Card {
    constructor(suit, rank, score) {
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}

// within the Deck class, the card deck is built. We have three arrays holding the values that are needed to create each "card object"
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

// here we create a new instance of Deck, and then call to "create" the deck. And use Math.random to randomize our cards. 
let deck = new Deck();
deck.createDeck()
let shuffledDeck = deck.cardDeck.sort(() => Math.random() - 0.5)
console.log(shuffledDeck)

let player1 = []
let player2 = []
// i initialize each player's deck


// next i used a for loop to give each player every other card like I was actually dealing the deck! 
for (let i = 0; i < shuffledDeck.length; i++) {
    if (i % 2 == 0) {
        player1.push(shuffledDeck[i])
    } else {
        player2.push(shuffledDeck[i])
    }
}
console.log(player1)
console.log(player2)

let p1Score = [];
let p2Score = [];
// here i initialize the arrays that will hold the points that each player gets or doesnt get each round


// the function below is where the players both "pull a card" and th higher card is the "winner", and that player's array is pushed a point
function getScore(p1Deck, p2Deck) {
    for (let i = 0; i < p1Deck.length; i++) {
        if (p1Deck[i].score > p2Deck[i].score) {
            p1Score.push(1)
        } else if (p2Deck[i].score > p1Deck[i].score) {
            p2Score.push(1)
        } else { }
    }
}

getScore(player1, player2)

function total(array) {
    let finalScore = 0
    for (let i = 0; i < array.length; i++) {
        finalScore += array[i]
    }
    return finalScore
}


// below we console log the total score of each player and after that ,the winner is nnounced. 
console.log(total(p1Score))
console.log(total(p2Score))

if (p1Score > p2Score) {
    console.log('PLAYER ONE WINS!!!')
} else {
    console.log('PLAYER TWO WINS!!!')
}




