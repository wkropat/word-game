// As a user, I want to start the game by clicking on a button.

const possibleWords = ["string", "boolean", "bit", "byte", "integer", "double", "float", "variable", "constant", "function"]

var startGame = document.querySelector("#startGame");

//  Start the game when you press a button

startGame.addEventListener("click", function(){
    startGames();
});

function startGames() {
    //Initialize the game
    alert("Does this run???");

    // Select a random word from list
    rando = Math.floor(Math.random() * possibleWords.length());
    word = possibleWords[rando];

    // Makes word into array where each letter is displayed seperately



    // Make div for each letter in word, put in the gameBoard div
    for (let i=1; i < word.length(); i++) {
        var guessBox = document.createElement(div);
        guessBox.textContent(word[i])
        guessBox.setAttribute("style", "display:none")
        document.getElementById("#gameBoard").appendChild(div);
    }



}



function guessLetters() {
    // User inputs keystroke    
    var entry = addEventListener("input", function(keystroke){
        
        console.log(entry)
    });

    entry.toLowerCase();

    if (wordArray.includes(entry)) {
        // Make that div with id=entry turn visible


    }
        
    // As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.



    // IF keystroke is a letter, set lowercase and check if it is in the word

        // If it it in the word, then update the page with the letter in the right text box (switch to display from display:none)

        // Else do nothing

    // IF display has switched for each box created, then set win=true

    // Log win/loss



}

