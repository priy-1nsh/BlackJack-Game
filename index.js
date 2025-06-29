let cards = [] // initial card array
let sum = 0 // initially sum is set to 0
let hasBlackJack = false // one state variable indicating whether we have a black jack or not
let isAlive = false // another state variable indicating whether the player is alive or not
let message = "" // message to be displayed on the screen after each round
let messageEl = document.getElementById("message-el") 
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// generating the random card, to be used in the startGame() function as well as the newCard() function.
function getRandomCard() {
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}

// starting the game - setting isAlive to true and generating two random cards, updating the `cards` array and the sum variable set to sum of the first two cards, then render the game applying the game logic.
function startGame() {
    isAlive = true
    // Generate two random numbes
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    // Re-assign the cards and sum variables so that the game can start
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// display the `Cards: ` and `Sum: ` and the `message on the screen based on the game logic`
function renderGame() {
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
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

// making the `NEW CARD` button work by first generating a new card, adding to the `cards` array and updating the `sum` variable, then re-rendering the game
function newCard() {
    // Only allow the player to get a new card if she IS alive and does NOT have Blackjack
    if (isAlive && !hasBlackJack) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    } else {
        messageEl.textContent = "You're out of the game. Please start a new game."
    }
}