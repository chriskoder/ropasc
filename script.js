const available = ["rock", "paper", "scissors"];
let run = true;
function computerPlay() {
    let r = Math.floor(Math.random() * 3);
    let cGuess = available[r];
    return cGuess;
}
function playRound() {
    let pGuess = prompt('Rock, paper, or scissors? Write "stop" for exit.');
    let cGuess = computerPlay();
    let result;
    if (pGuess === cGuess) {
        result = "It's a draw! Your " + pGuess + " doesn't beat the computer's " + pGuess + ".";
    } else if (pGuess==='rock' && cGuess==='scissors') {
        result = "You win! Rock beats scissors.";
    } else if (pGuess==='rock' && cGuess==='paper') {
        result = "You lose! Paper beats rock.";
    } else if (pGuess==='scissors' && cGuess==='paper') {
        result = "You win! Scissors beat paper.";
    } else if (pGuess==='scissors' && cGuess==='rock') {
        result = "You lose! Rock beats scissors.";
    } else if (pGuess==='paper' && cGuess==='scissors') {
        result = "You lose! Scissors beat paper.";
    } else if (pGuess==='paper' && cGuess==='rock') {
        result = "You win! Rock beats scissors.";
    } else if (pGuess==='stop') {
        run = false;
    }
    return result;
}
while(run) {
    console.log(playRound())
}