// As a user, I want to start the game by clicking on a button.

possibleWords = ["string", "boolean", "bit", "byte", "integer", "double", "float", "variable", "constant", "function"]

var startGame = document.querySelector("#startGame");

//  Start the game when you press a button

startGame.addEventListener("click", function(){
    startGames();
});

function startGames() {
    //Initialize the game
    alert("Game start now");
}

// As a user, I want to try and guess a word by filling in a number of blanks that match the number of letters in that word.