/**
 * JavaScript for the 'Rock, Paper, Scissors, Lizard, Spock' style game (lines 5 - 101)
 */

/* Variables to store user and computer choices */
var userChoice;
var computerChoice;

/* Variables to store score counts */
var wins = 0;
var losses = 0;

/* Defines rules for each combination */
var rules = {
    "candy-cane": {
        "star": "star eradicates candy cane <br> You Lose!",
        "jingle": "jingle shatters candy cane <br> You Lose!",
        "bauble": "candy cane bursts bauble <br> You Win!",
        "gingerbread": "candy cane obliterates gingerbread <br> You Win!"
    },

    "bauble": {
        "candy-cane": "candy cane bursts bauble <br> You Lose!",
        "gingerbread": "gingerbread smothers bauble <br> You Lose!",
        "jingle": "bauble isolates jingle <br> You Win!",
        "star": "bauble captures star <br> You Win!"
    },

    "star": {
        "bauble": "bauble captures star <br> You Lose!",
        "jingle": "jingle outshines star <br> You Lose!",
        "candy-cane": "star eradicates candy cane <br> You Win!",
        "gingerbread": "star evaporates gingerbread <br> You Win!"
    },

    "gingerbread": {
        "star": "star evaporates gingerbread <br> You Lose!",
        "candy cane": "candy cane obliterates gingerbread <br> You Lose!",
        "bauble": "gingerbread smothers bauble <br> You Win!",
        "jingle": "gingerbread consumes jingle <br> You Win!"
    },

    "jingle": {
        "bauble": "bauble isolates jingle <br> You Lose!",
        "gingerbread": "gingerbread consumes jingle <br> You Lose!",
        "candy cane": "jingle shatters candy cane <br> You Win!",
        "star": "jingle outshines star <br> You Win!"
    },
};

/* Compares user and computer choices to determine the winner */
function compare(comChoice) {
    /* Checks for a draw */
    if (userChoice === comChoice) {
        return "The computer also chose " + computerChoice + ":" + "<br>" + "the result is a draw! :|";
    }

    /* Use the rules variable to determine the outcome */
    var outcome = rules[userChoice][comChoice];

    /* Update score based on the outcome */
    if (outcome.includes("You Win!")) {
        wins++;
    } else {
        losses++;
    }

    return outcome;
}

/* jQuery function to be executed when the document is ready */
$(document).ready(function(){

    /* jQuery function on click */
    $("button").click(function(){
        userChoice = this.id;
        computerChoice = Math.floor(Math.random() * 5);
    
        /* Convert the random number to a corresponding choice */
        switch (computerChoice) {
            case 0: computerChoice = "candy-cane";
                break;
            case 1: computerChoice = "bauble";
                break;
            case 2: computerChoice = "star";
                break;
            case 3: computerChoice = "gingerbread";
                break;
            case 4: computerChoice = "jingle";
                break;
        }
    
        /* Compare user and computer choices and present result in uppercase */
        var result = compare(computerChoice).toUpperCase();

        /* Display the result in the HTML element with class "result" */
        $(".result").html("<h2>Result:</h2><p>Player: " + userChoice.toUpperCase() + "<br>" + 
                            "Computer: " + computerChoice.toUpperCase() + "</p>" + "<p>" + result + "</p>" + 
                            "<p>Wins: " + wins + "<br>" + "Losses " + losses + "</p>");
    });
});

/**
 * JavaScript for countdown to christmas timer (lines 107 - 136)
 */

/* Sets the date that we are counting to */
var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime();

/* Updates the count down every one second */
var x = setInterval(function() {

    /* Get today's date and time */
    var now = new Date().getTime();

    /* Find the distance between now and the count down date */
    var distance = countDownDate - now;

    /* Time calculations for days, hours, minutes and seconds */
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    /* Display the result in our HTML element */
    document.getElementById("christmas-countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    /* if the countdown is finished, write some text */
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("christmas-countdown").innerHTML = "It's Christmas!";
    }
}, 1000);