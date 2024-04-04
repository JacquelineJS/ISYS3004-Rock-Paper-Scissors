/* Lets keep score! */
let win = 0;
let lose = 0;
let tie = 0;

function say(theMessage) {
    let msg = new SpeechSynthesisUtterance(theMessage);
    speechSynthesis.speak(msg);
}


/* This is a simplified version of the game.
The Computer ALWAYS picks ROCK.  
Does the user's choose win,lose, or tie vs ROCK? */
function play(user) {
    let result = "";
    if (user === 'rock') {
        result = "tie";
        tie++;
    }
    if (user === 'paper') {
        result = "win";
        win++;
    }
    if (user === 'scissors') {
        result = "lose";
        lose++;
    }
    let myMessage = ("Computer chose rock, you " + result + "!" +
    "\n\n" + "win" + "win" +
    "\n" + loss + "loss" +
    "\n" + tie +"tie");
    alert(myMessage)
    say(myMessage)

}