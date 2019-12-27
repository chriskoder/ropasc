const available = ["rock", "paper", "scissors"];
const score = document.querySelector(".score");
const resultText = document.querySelector('.result');
const computerRock = document.querySelector('.cr');
const computerPaper = document.querySelector('.cp');
const computerScissors = document.querySelector('.cs');
const note = document.querySelector(".note");
let pGuess, cGuess, pScore, cScore;
let init = (function (){
    makeOpacity();
    resultText.textContent = ' ';
    note.textContent = ' ';
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
function makeOpacity() {
    computerRock.style.opacity = "0.5";
    computerPaper.style.opacity = "0.5";
    computerScissors.style.opacity = "0.5";
}
function playRound() {
    let result;
    if (pGuess === cGuess) {
        if (cGuess === 'rock') {
            makeOpacity();
            computerRock.style.opacity = "1";
        } else if (cGuess==='paper') {
            makeOpacity();
            computerPaper.style.opacity = "1";
        } else {
            makeOpacity();
            computerScissors.style.opacity = "1";
        }
        result = "Your " + pGuess + " doesn't beat the computer's " + pGuess + ".";
        resultText.textContent = "It's a draw!"
    } else if (pGuess==='rock' && cGuess==='scissors') {
        makeOpacity();
        computerScissors.style.opacity = "1";
        result = "Rock beats scissors.";
        resultText.textContent = "You win"
        pScore++;
    } else if (pGuess==='rock' && cGuess==='paper') {
        makeOpacity();
        computerPaper.style.opacity = "1";
        result = "Paper beats rock.";
        resultText.textContent = "You lose!"
        cScore++;
    } else if (pGuess==='scissors' && cGuess==='paper') {
        makeOpacity();
        computerPaper.style.opacity = "1";
        result = "Scissors beat paper.";
        resultText.textContent = "You win!"
        pScore++;
    } else if (pGuess==='scissors' && cGuess==='rock') {
        makeOpacity();
        computerRock.style.opacity = "1";
        result = "Rock beats scissors.";
        resultText.textContent = "You lose!"
        cScore++;
    } else if (pGuess==='paper' && cGuess==='scissors') {
        makeOpacity();
        computerScissors.style.opacity = "1";
        result = "Scissors beat paper.";
        resultText.textContent = "You lose!"
        cScore++;
    } else if (pGuess==='paper' && cGuess==='rock') {
        makeOpacity();
        computerRock.style.opacity = "1";
        result = "Paper beats rock.";
        resultText.textContent = "You win!"
        pScore++;
    }
    updateScore();
    return result;
}