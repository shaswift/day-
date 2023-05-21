let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]//array-ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEL = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function startGame() {
    cardsEl.textContent = "Cards : "  + cards[0] + " " + cards[1]
    sumEL.textContent = "Sum: " + sum

if (sum <= 20) {
    message = "Do you want to draw a new card?"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}
message.textContent = message 
}
function newCard(){
    console.log("Drawing a new card from the deck!")//
    let card = 8
    sum += card
    startGame()
}