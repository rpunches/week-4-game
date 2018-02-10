
// Set global crystals
var crystal = {
    "blue": { 
        value: 0 
    }, 
    "green": { 
        value: 0 
    }, 
    "purple": { 
        value: 0 
    }, 
    "yellow": { 
        value: 0 
    }
};

// Set scoreboard and variables
var winScore = 0;
var loseScore = 0;
var totScore = 0;
var targetNum = 0;

// Template function
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Give game a start/reset point
function startGame() {
    totScore = 0;  

    $("#tarNum").empty();
    $("totSco").empty();

    // Get values for crystals and target number using the template function
    crystal["blue"].value = getRandom(1, 12);
    crystal.green.value = getRandom(1, 12);
    crystal.purple.value = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);

    targetNum = getRandom(19, 120);
    

// Connect to HTML
    $("#tarNum").text(targetNum);
    $("#totSco").text(totScore);

    console.log(crystal.blue.value);
    console.log(crystal.green.value);
    console.log(crystal.purple.value);
    console.log(crystal.yellow.value);
}

// Template for adding up score
function addScore(crystal){
   totScore = totScore + crystal.value;
    $("#current-score").html(totScore);
    checkWin();
}

// How to check if user has won  
// If the totScore reaches the value of the targetNum, the user wins, a value of 1 is added to winScore and the game is reset.
function checkWin(){
    if (totScore === targetNum){
        alert("You win!");
        winScore ++;
        $("#wins").html(winScore);
        startGame();
    }
// / If totScore goes over the targetNum, the user loses, a value of 1 is added to the winScore and the game is reset.
    else if (totScore > targetNum){
        alert("You lose!");
        loseScore ++;
        $("#lose").html(loseScore);
        startGame();
    }
}
// ________________________________________________END START GAME

// User clicks on each crystal and that value is added to equal the targetNum.  If the value hasn't yet reached the targetNum then the user continues to click on crystals.
$("#blue").on("click", function(){
   addScore(crystal.blue);
});

$("#green").on("click", function(){
    addScore(crystal.green);
 });

$("#purple").on("click", function(){
    addScore(crystal.purple);
 });

$("#yellow").on("click", function(){
    addScore(crystal.yellow);
 });

startGame();




// My first attempt**

// Scoreboard
// var numWins = 0;
// var numLosses = 0;

// document.getElementById("wins").innerHTML = numWins;
// document.getElementById("losses").innerHTML = numLosses;

// When the game restarts, new random values are assigned to the crystals and a new random target number is chosen.
// function startGame(){

// // A random number from 19-120 is chosen. 
// var targetNumber = Math.floor(Math.random() * 102) + 19;
// // Link to Index page
// $("number-to-guess").text(targetNumber);

// // Beginning Count/score set to 0
// var counter = 0;
// document.getElementById("counter").innerHTML = counter;

// Each crystal is given a random value
// var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


// for (var i = 0; i < numberOptions.length; i++) {
//     var blueCrystal = $("<img>");

//     blueCrystal.addClass("crystal-image");
//     blueCrystal.attr("src", "C:\Users\rmcdermo\Desktop\BOOT CAMP\Homework\week-4-game\assets\images\blue.png" )
//     blueCrystal.attr("data-crystalvalue", numberOptions[i]);
//     document.getElementById("blueCrystal").innerHTML = blueCrystal;

// }
// }

// When each crystal is clicked, that value is added to the user's score.
// $(".crystal-image").on("click", function () {
//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     counter += crystalValue;

    // $(".greenCrystal").on("click", function () {
    //     var crystalValue = ($(this).attr("data-crystalvalue"));
    //     crystalValue = parseInt(crystalValue);
    //     counter += crystalValue;

    //     $(".purpleCrystal").on("click", function () {
    //         var crystalValue = ($(this).attr("data-crystalvalue"));
    //         crystalValue = parseInt(crystalValue);
    //         counter += crystalValue;

    //         $(".yellowCrystal").on("click", function () {
    //             var crystalValue = ($(this).attr("data-crystalvalue"));
    //             crystalValue = parseInt(crystalValue);
    //             counter += crystalValue;

            //     // When the user score matches the random number, the user wins, a win is added to the scoreboard and the game restarts.
            //     if (counter === targetNumber) {
            //         numWins++;
            //         ("You win!");
            //         startGame();
            //     }

            //     // If the score goes over the random number, then the user loses, a loss is added to the scoreboard and the game restarts.  
            //     else if (counter > targetNumber) {
            //         numLosses++;
            //         ("You lose!");
            //         startGame();
            //     }
            // });


