let firstCard = getRandomCard() 
let secondCard = getRandomCard() 
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let cards = [firstCard, secondCard] //ordered array list

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")

function getRandomCard() {
    return Math.floor(Math.random() * 10) + 2;
}

function startGame() {
    renderGame()
}

function renderGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    // cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    //render all the cards

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


function newGame() {
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = getRandomCard() 
    
    // 2. Add the new card to the sum variable
    sum += card
    cards.push(card)
    // 3. Call startGame()
    renderGame()
}


