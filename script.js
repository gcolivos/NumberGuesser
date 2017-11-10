console.log("In script.js");

$(document).ready(readyNow);


var randomNumber = Math.floor( Math.random() * 10 + 1);

function readyNow(){
    console.log("Ready to roll");
    $(".container").append("<H1>Enter a number between 0 and 10 in the box!</H1>");
    $inputBox = $('<input type="text" id="numberGuess" value="Enter number here"/>');
    $('.container').append($inputBox);
    $('.container').append('<button id="submitButton">Submit!</button>');
    $('#submitButton').on('click', compareNumbers)
}

function compareNumbers(){
    console.log("In compareNumbers");
    var guessedNumber= $('#numberGuess').val();
    if (guessedNumber<0 || guessedNumber >10){
        $('.container').append("<p>Follow directions!</p>")
        $('.container').append("<img src='http://www.brothersonsports.com/wp-content/uploads/2014/09/images-214.jpg'>")
    }
    else if (guessedNumber<randomNumber){
        $('.container').append("<p>Higher!</p>")
        $('.container').css("background-color", "orange");
    }
    else if (guessedNumber>randomNumber){
        $('.container').append("<p>Lower!</p>")
        $('.container').css("background-color", "yellow");
    }
    else if (guessedNumber==randomNumber){
        $('.container').append("<p>Congrats! You're the best guesser!</p>")
        $('.container').css("background-color", "green");
        $('#submitButton').replaceWith('<button id="newGame">New Game?</button>');
        $('#newGame').on('click', newGame)
    }
    else{
        $('.container').append("<p>Follow directions!</p>")
        $('.container').append("<img src='http://www.brothersonsports.com/wp-content/uploads/2014/09/images-214.jpg'>")
    }
}

function newGame(){
    $('.container').empty();
    $('.container').removeAttr('style');
    readyNow();
    randomNumber = Math.floor( Math.random() * 10 + 1);
}