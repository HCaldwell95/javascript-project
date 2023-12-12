// Variables to store user and computer choices
var userChoice;
var computerChoice;

// Compares user and computer choices to determine the winner
function compare(comChoice) {
    // Checks for a draw
    if (userChoice === comChoice) {
        return "The computer also chose " + computerChoice + ":" + "<br>" + "the result is a draw! :|";
    
    // Checks outcome if user chooses candy cane
    } else if (userChoice === "candy cane") {
        if (comChoice === "star") {
            return "star eradicates candy cane <br> You Lose!";
        } else if (comChoice === "bauble") {
            return "candy cane bursts bauble <br> You Win!";
        } else if (comChoice === "gingerbread") {
            return "candy cane destroys <br> You Win!";
        } else if (comChoice === "jingle") {
            return "jingle shatters candy cane <br> You Lose!";
        }

    }






}