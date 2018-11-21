// Create Variables
var winCount = 0
var lossCount = 0
var startingScore = 0
var randomNum = getRandomInt(19, 120);
var numButton1 = getRandomInt(1, 12);
var numButton2 = getRandomInt(1, 12);
var numButton3 = getRandomInt(1, 12);
var numButton4 = getRandomInt(1, 12);
var currentScore = 0;

// get random number function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// gets html ready before js
$(document).ready(function () {

    startGame = function () {

        // create random number gen from 19-120
        //get random number you have to add up to 
        $("#randomNum").text(randomNum);
        $("#winCount").text(winCount);
        $("#lossCount").text(lossCount);
        $("#currentScore").text(currentScore);
       

        // picks a number 1-12 
        $("#image1").on("click", function () {
            currentScore += numButton1;
            $(".yourScore").text(currentScore);
            checkIfWon();
        });

        $("#image2").on("click", function () {
            currentScore += numButton2;
            $(".yourScore").text(currentScore);
            checkIfWon();
        });

        $("#image3").on("click", function () {
            currentScore += numButton3;
            $(".yourScore").text(currentScore);
            checkIfWon();

        });
        $("#image4").on("click", function () {
            currentScore += numButton4;
            $(".yourScore").text(currentScore);
            checkIfWon();

        });

    };

    checkIfWon = function () {

        if (currentScore > randomNum) {
            lossCount++;
            $("#lossCount").text(lossCount);


            startingScore = 0
            randomNum = getRandomInt(19, 120);
            $("#randomNum").text(randomNum);
            numButton1 = getRandomInt(1, 12);
            numButton2 = getRandomInt(1, 12);
            numButton3 = getRandomInt(1, 12);
            numButton4 = getRandomInt(1, 12);
            currentScore = 0;

            // displaying win loss count
            $("#winCount").text(winCount);
            $("#lossCount").text(lossCount);
        
            //reset
            // reset();
        };


    };
    // not sure if i put this if else statement in the startgame function

    startGame();

});

//pseudo coding.

//This is a guessing game using numbers where the player will guess with numbers.

//There will be four crystals displayed as buttons on the page.

//The player will be shown a random number at the start of the game.

//When the player clicks on a crystal it will add a specific amount of points to the player's total score.

//The player wins the game if their total score matches the random number and the player loses the game if their total score goes above the random number.

//The amount of points each crystal adds is not shown to the player, but their total score is displayed and updated after each crystal is clicked.

//The number of games won and lost will be displayed.

//If the player successfully matches their total score to the random number they get 1 win, if the player's total score is above the random number the player get 1 loss, either way the game restarts.

//When the game is restarted, the player will be shown a new random number, all the crystals will now have 4 different hidden values, and the player's total score is reset to 0.