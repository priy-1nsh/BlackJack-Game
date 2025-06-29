# Logic of the Blackjack Game -
Blackjack, also known as *Twenty-One*, is a widely played card game in casinos around the world, known for offering some of the best odds for players. The objective of the game is to have a hand total (of cards) that is higher than the dealer's without exceeding twenty-one.
Logic -
``` js
let firstCard = 6
let secondCard = 9
let sum = firstCard + secondCard

if (sum < 21) { // if ... else if ... else statement
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
} else (sum > 21) {
    console.log("You're out of the game! 😭")
}
```
> [!NOTE]
> Difference between `===` and `==` :
> `===` is stricter in comparison to the `==` operator, in the sense that `===` checks for both value and type, whereas `==` only checks for value. For example, `5 == "5"` returns `true` because the value is the same, but `5 === "5"` returns `false` because the type is different.

## Booleans in JavaScript
`let isVegan = true;`, here, in the variable name, we say `is` is the verb.
Similarly, `let hasDiscountCode = false;` is also a boolean variable and the verb used here is `has` in the variable name.
Example 👍
``` js
let hasDiscountCode = true

function processOrder() {
    if (hasDiscountCode) {
        console.log('Discount applied to food order')
        hasDiscountCode = false
    } else {
        console.log('No discount applied')
    }
}

processOrder()
processOrder()
```
Also, note that in JS, an empty string is a falsy value, that is, `if("") {}` will be seen as `if(false) {}`.
### Add the hasBlackJack variable
``` js
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false

if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
}

// CASH OUT!
console.log(hasBlackJack)
```
### Add the isAlive variable 
``` js
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackJack = false
// 1. Create a variable called isAlive and assign it to true
let isAlive = true

// 2. Flip its value to false in the appropriate code block 
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

// 3. Log it out to check that you're doing it right
console.log(isAlive)
```

### Add the message variable
``` js
let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string
let message = ""

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

// 3. Log it out!
console.log(message)
```
### Link to Stylesheet
``` html
<html>
    <head>
        <!-- Link to the index.css file
        E.g. search for "how to link to css from html" -->
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Blackjack</h1>
        <script src="index.js"></script>
    </body>
</html>
```
### Add Basic Styling
``` cs
/* Complete the CSS styling according to the provided design */

body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-image: url("images/table.png");
    background-size: cover;
    text-align: center;
    color: white;
    font-weight: bold;
}

h1 {
    color: goldenrod;
}

#message-el {
    font-style: italic;
}
```
### Make the start button work
HTML
``` HTML
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Blackjack</h1>
        <p id="message-el">Want to play a round?</p>
        <p>Cards:</p>
        <p>Sum:</p>
        <!-- 1. Create a button that says START GAME. 
        Make it call a startGame() function when clicked -->
        <button onclick="startGame()">START GAME</button>
        <script src="index.js"></script>
    </body>
</html>
```
CSS 
``` css
body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', Arial, sans-serif;
    background-image: url("images/table.png");
    background-size: cover;
    font-weight: bold;
    color: white;
    text-align: center;
}

h1 {
    color: goldenrod;
}

#message-el {
    font-style: italic;
}

/* 
3. Style the button according to the provided design
text color - #016f32
width      - 150px
background - goldenrod
 */
 
button {
    color: #016f32;
    width: 150px;
    background: goldenrod;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: bold;
    border: none;
    border-radius: 2px;
}
```
JavaScript
``` js
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 2. Create a startGame() function. Move the conditional
// below (line 11-20) inside the body of the function.

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    console.log(message)    
}
```
### Display the message 
``` js
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

// 1. Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    // 2. Display the message in the messageEl using messageEl.textContent
    messageEl.textContent = message
}
```
### Display the sum
HTML
``` html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Blackjack</h1>
        <p id="message-el">Want to play a round?</p>
        <p>Cards:</p>
        <!-- 1. Give the sum paragraph and id of sum-el -->
        <p class="sum-el">Sum:</p>
        <button onclick="startGame()">START GAME</button>
        <script src="index.js"></script>
    </body>
</html>
```
JavaScript
``` js
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// 2. Store the sum paragraph in a variable called sumEl
let sumEl = document.getElementById("sum-el")

function startGame() {
    // 3. Render the sum on the page using this format -> "Sum: 14"
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
```
> [!NOTE]
> There is another way to select the elements by using their IDs and CLASSes using `.querySelector` method. How to use it -
> `document.querySelector("#idName or .className or tagName")`. Here we need to use `#` and `.` with the idName and the className respectively since we are not specifying in the method name `querySelector("")`.

### Display the Cards
HTML
``` html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Blackjack</h1>
        <p id="message-el">Want to play a round?</p>
        <!-- 1. Give the cards paragraph and id of cards-el -->
        <p id="cards-el">Cards:</p>
        <p id="sum-el">Sum:</p>
        <button onclick="startGame()">START GAME</button>
        <script src="index.js"></script>
    </body>
</html>
```
JavaScript
``` js
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// 2. Store the cards paragraph in a variable called cardsEl
let cardsEl = document.getElementById("cards-el")

function startGame() {
    // 3. Render the cars on the page using this format -> "Cards: 10 4"
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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
```
> [!NOTE]
> The comments in the code are showing the required changes.

### New Card Button
HTML
``` html
<html>
    <head>
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
        <h1>Blackjack</h1>
        <p id="message-el">Want to play a round?</p>
        <p id="cards-el">Cards:</p>
        <p id="sum-el">Sum:</p>
        <button onclick="startGame()">START GAME</button>
        <!-- 1. Create a NEW CARD button, make it run newCard() on click -->
        <button onclick="newCard()">NEW CARD</button>
        <script src="index.js"></script>
    </body>
</html>
```
CSS
``` css
body {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', Arial, sans-serif;
    background-image: url("images/table.png");
    background-size: cover;
    font-weight: bold;
    color: white;
    text-align: center;
}

h1 {
    color: goldenrod;
}

#message-el {
    font-style: italic;
}

/* 3. Make sure that the two buttons have some space between
each other when they are rendered out vertically */
button {
    color: #016f32;
    width: 150px;
    background: goldenrod;
    padding-top: 5px;
    padding-bottom: 5px;
    font-weight: bold;
    border: none;
    border-radius: 2px;
    margin-bottom: 2px;
    margin-top: 2px;
}
```
JS
``` js
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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

function newCard() {
    console.log("Drawing a new card from the deck!")
}

// 2. Create a function newCard() that logs out "Drawing a new card from the deck!"
```

### Add to the sum when the newCard is clicked
JS
``` js
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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


function newCard() {
    console.log("Drawing a new card from the deck!")
    // 1. Create a card variable, and hard code its value to a number (2-11)
    let card = 4
    // 2. Add the new card to the sum variable
    sum += card
    // 3. Call startGame()
    startGame()
}
```

### Rename the startGame() function
The thing is that we are calling startGame() function inside newCard() function, hence it doesn't add up semantically. We should rename the startGame() function to something like updateGame() or renderGame() or something similar.
Hence let's rename the startGame() function to renderGame() function and make a new function startGame() which then calls the renderGame() function inside it.
``` js
let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Create a new function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
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

function newCard() {
    let card = 6
    sum += card
    renderGame()
}
```
Essentially, what renderGame() function does is to display the cards and the sum of the cards, and compares the sum of the cards drawn to 21, and then displays the message accordingly and controls the isAlive variable to control the flow of the game.

THERE IS A PROBLEM WITH OUR CODE THAT IT DOESN'T SHOW YET ALL THE CARDS WE HAVE DRAWN FROM THE START OF THE GAME, IT ONLY SHOWS THE FIRST TWO CARDS. IT DISPLAYS THE SUM OF THE CARDS CORRECTLY BUT IT DOESN'T SHOW ALL THE CARDS WE HAVE DRAWN.

### Solving our cards problem with an *ARRAY*
WE SOLVE THIS PROBLEM BY STORING ALL OUR CARDS IN AN ARRAY
ARRAY - An array is a collection of items that can be of the same kind or different kinds stored in a single variable.
Let's add the array variable to our code -
`let cards = [firstCard, secondCard]`,
we also need to change the `cardsEl.textContent = "Cards: " + firstCard + " " + secondCard` to `cardsEl.textContent = "Cards: " + cards[0] + cards[1]`.
JS CODE
``` js
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard] // array - ordered list of items
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    // render out firstCard and secondCard
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    // render out ALL the cards we have
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


function newCard() {
    let card = 6
    sum += card
    renderGame()
}
```
#### Arrays
``` js
// Arrays - ordered lists of items

let featuredPosts = [
    "Check out my Netflix clone",
    "Here's the code for my project",
    "I've just relaunched my portfolio"
]
```
> NOTE - Arrays follow the 0-based indexing, that is, the first element is 0th, the next is 1st and so on...
> Also, `arrayName.length` returns the number of the elements in the array. (length of the arrays are not 0-indexed, and always one larger than the last index).
> *ARRAYS* WITH MULTIPLE DATA TYPES - Arrays are the ordered list of items, which contain composite/complex data types.
> The numbers, strings, booleans are the primitive data types while objects, arrays, functions are composite/complex data types.

##### Array Methods (method is just a fancy way to say function on an object)
- `push()`: Adds one or more elements to the end of an array and returns the new length. Example - `let cards = [7, 4]; cards.push(6); console.log(cards);` prints `[7, 4, 6]`.
- `pop()`: Removes the last element from an array and returns that element.

### Push a new card to the cards array
Hence, we need to modify the `newCard()` function a bit -
``` js
function newCard() {
    let card = 6
    sum += card
    // Push the card to the cards array
    cards.push(card)
    renderGame()
}
```
But there is a problem that we are not rendering out the newly drawn cards in the `Cards: ` paragraph, and for that, we need to learn about the `for` loop.

#### Loops in JavaScript
##### For Loop
``` js
// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 21;  count += 1 )  {
    
    console.log(count)

}
```
prints `1 to 20`.

**FOR Loop for ARRAYS -**
``` js
let messages = [
    "Hey, how's it going?",        
    "I'm great, thank you! How about you?",
    "All good. Been working on my portfolio lately.",
    "Same here!",
    "Great to hear",
    "🙌"
]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

for (let i = 0; i < messages.length; i += 1) { // we wrote `<` not `<=` since length of the array is one more than the last index
    console.log(messages[i])
}
```
Working with for loops, arrays, and the DOM -
``` js
let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent += sentence[i] + " "
}

greetingEl.textContent += "."
```
---
### Using a loop to render the cards -
``` js
let firstCard = 10
let secondCard = 4
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    // Create a for loop that renders out all the cards instead of just two
    // wow !
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


function newCard() {
    let card = 6
    sum += card
    // Push the card to the cards array
    cards.push(card)
    renderGame()
}
```
### Now the question is, How can we avoid to hard-code card values -
**FUNDAMENTAL CONCEPT : Returning values in functions**
EXAMPLE -
``` js
let player1Time = 102
let player2Time = 107

// cmd+d - ctrl+d
function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()
console.log(fastestRace)
```
**TO IMPLEMENT THIS, LET'S CREATE A DUMMY FUNCTION THAT RETURNS A RANDOM CARD VALUE BETWEEN 1 AND 11**
``` js
// 2. Use getRandomCard() to set the values of firstCard and secondCard
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// 1. Create a function, getRandomCard(), that always returns the number 5
function getRandomCard() {
    return 5 // This is a dummy function
}


function startGame() {
    renderGame()
}

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


function newCard() {
    // 3. Use the getRandomCard() to set the value of card
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
}
```
> [!NOTE]
> We are declaring the `getRandomCard` function after using it, but why does it work ? - The thing is that in JavaScript, you can use a function before it's declared, cause all the function declarations gets hoisted to the top of the script.

---

> [!IMPORTANT]
> **Math.random() method and it's use cases**
> ### 🔢 `Math.random()` in JavaScript
Note that `Math` is an object.
The `Math.random()` function returns a **floating-point number** in the **range**:

```
≥ 0 and < 1
```

So it gives you a **random decimal number** between `0` (inclusive) and `1` (exclusive).

---

### 🧪 Example:

```javascript
console.log(Math.random());
```

✅ Possible outputs:

```
0.273412374
0.945134291
0.001239871
```

---

## 📦 Use Cases

### 🎲 1. Random Number Between 0 and N

```javascript
let random0to9 = Math.floor(Math.random() * 10); // 0 to 9
```

### 🎯 2. Random Number Between Min and Max

```javascript
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(getRandom(5, 15));  // e.g. 7.234
```

### 🔢 3. Random Integer Between Min and Max (inclusive)

```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 6));  // Simulates a dice roll
```

---

## 🧠 Key Points

* `Math.random()` **does not take any arguments.**
* Always gives a **new random number** each time it's called.
* If you need **true randomness** (e.g. for cryptography), use `crypto.getRandomValues()` instead.

---

> So, basically `Math.random()` gives you a random number between 0 (inclusive) and 1 (exclusive). And, if you need a random number between 0 and N, you can simply multiply it by N, that is, `Math.random() * N`.

##### `Math.floor()` function -
The `Math.floor()` function returns the largest integer less than or equal to a given number.
Example -
*Creating a dice function:*
```javascript
function rollDice() {
    return Math.floor( Math.random() * 6 ) + 1 
}

console.log( rollDice() )
```
This function will return a random number between 1 and 6, simulating a dice roll.
One more Example -
Make a function which returns a random number between 1 and 13.
```javascript
function getRandomCard() {
    return Math.floor(Math.random() * 13) + 1 // [0, 1) -> [0, 13) -> [0, 1, 2, ... , 12] -> [1, 2, ... , 13]
}
```

### Make getRandomCard() work -
Let's treat Ace card as `11` instead of `either 1 or 11` as in the real blackjack game.
Modifying the `getRandomCard()` function -
```javascript
function getRandomCard() {
    // if 1     -> return 11
    // if 11-13 -> return 10
    let randomNumer = Math.floor( Math.random()*13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
        return randomNumer
    }
}
```
### Now, initially we don't want to keep the `isAlive` variable set as `true` when we load the game initially, also we want to get our two cards only when we hit on the `START GAME` button.
SO, LET'S CHANGE THE CODE -
```javascript
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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
```

### Now two things we need to correct 👍
- first adding a gameOver functionality if the player gets busted after drawing a newCard and the `sum` variable gets over `21`
- we shouldn't be able to draw a newCard if we haven't yet started the game.
Let's add these two functionalities 👍:
> [!NOTE] The Logical Operators -
> `&&` - both expressions before and after this logical operator must be true for the expression to be true.
> `||` - if either of the expressions before and after this logical operator is true, the expression will be true.
> `!` - the logical NOT operator, it will return the opposite of the expression it is applied to, that is, it flips the boolean value of the expression.

Now, we can allow a person who is playing our game to `draw a new card` or say, hit the `NEW CARD` button only if they are still alive and they have not get the `blackjack`, that is, they are neither `above 21` nor `exactly 21`.
*Modified `newCard()` function -*
```javascript
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
```
SO, THE FINAL JS CODE IS-
```javascript
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
```

That's IT, we can add more features to this game, like a Dealer's turn, and even a betting system with fake money.
---
## OBJECT SNEAK PEAK
What are OBJECTS ?
- Some variables which are inherently connected together, for example , a person's name, age, and address, OR, a player's information in our blackJack game, with his name and his money.For such variables, we can create an object.
- Syntax - 
```javascript
let player = {
    name: "Per", // key: value
    chips: 145
}
```
- For accessing the properties of an object, we use the dot notation, like `player.name` or `player.chips`
- Objects - store data in-depth - composite/complex data types
- Example -
```javascript
let course = {
    title: "Learn CSS Grid for free",
    lessons: 16,
    creator: "Per Harald Borgen",
    length: 63,
    level: 2,
    isFree: true,
    tags: ["html", "css"]
}

console.log( course.tags ) // dot-notation
console.log( course["tags"] ) // bracket-notation 
```
- functions inside an object, also called as methods
- Syntax for that -
```javascript
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}
```
- To access this function, we use the dot notation - `player.sayHello()`.
> Note that we are actually using this same notation when we use `console.log()` or `document.getElementById()`, means we are accessing a method of the `console` object or the `document` object.
> Hence, methods are just the functions attached to objects.

---

## Recap 👍:
- Arrays
- Objects
- boolean variables
- if ... else if ... else statements
- comparison operators
- logical operators
- for loops
- for loops alongwith DOM and arrays
- the MATH object, and it's two methods - `Math.random()` and `Math.floor()`
- return statements
---
