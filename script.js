const available = ["rock", "paper", "scissors"];
const score = document.querySelector(".score");
const resultText = document.querySelector('.result');
const note = document.querySelector(".note");
let pGuess, cGuess, pScore, cScore;
let init = (function (){
    resultText.textContent = ' ';
    pScore = 0;
    cScore = 0;
    updateScore();
    document.querySelector('.rock').addEventListener("click", function(){
        simulateRound('rock');
    });
    document.querySelector('.paper').addEventListener("click", function(){
        simulateRound('paper');
    });
    document.querySelector('.scissors').addEventListener("click", function(){
        simulateRound('scissors');
    });
})();
function simulateRound(str) {
    pGuess = str;
    cGuess = computerPlay();
    note.textContent = playRound();
}
function updateScore() {
    score.textContent = pScore + " - " + cScore;
}
function computerPlay() {
    let r = Math.floor(Math.random() * 3);
    cGuess = available[r];
    return cGuess;
}
function playRound() {
    let result;
    if (pGuess === cGuess) {
        result = "Your " + pGuess + " doesn't beat the computer's " + pGuess + ".";
        resultText.textContent = "It's a draw!"
    } else if (pGuess==='rock' && cGuess==='scissors') {
        result = "Rock beats scissors.";
        resultText.textContent = "You win"
        pScore++;
    } else if (pGuess==='rock' && cGuess==='paper') {
        result = "Paper beats rock.";
        resultText.textContent = "You lose!"
        cScore++;
    } else if (pGuess==='scissors' && cGuess==='paper') {
        result = "Scissors beat paper.";
        resultText.textContent = "You win!"
        pScore++;
    } else if (pGuess==='scissors' && cGuess==='rock') {
        result = "Rock beats scissors.";
        resultText.textContent = "You lose!"
        cScore++;
    } else if (pGuess==='paper' && cGuess==='scissors') {
        result = "Scissors beat paper.";
        resultText.textContent = "You lose!"
        cScore++;
    } else if (pGuess==='paper' && cGuess==='rock') {
        result = "Paper beats rock.";
        resultText.textContent = "You win!"
        pScore++;
    }
    updateScore();
    return result;
}