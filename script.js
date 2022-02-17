// let rock = 'Rock';
// let paper = 'Paper';
// let scissors = 'Scissors';

function computerPlay() {
    let number = Math.ceil(Math.random() * 3);
    // if (number === 1) {
    //     return 'Rock';
    // } 
    // else if (number === 2) {
    //     return 'Paper';
    // }
    // else {
    //     return 'Scissors';
    // }
    return number;  
}

// Given a string, the computer will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// each string should be represented by a number 1-3. the computer will randomly choose a number 1-3.
// then assign the string to the number. 

function humanPlay() {
    let playerChoice = prompt('Rock, Paper, or Scissors?')
    let choiceLower = playerChoice.toLowerCase();
    if (choiceLower == 'rock') {
        return 1;
    }
    else if (choiceLower == 'paper') {
        return 2;
    }
    else if (choiceLower == 'scissors') {
        return 3;
    }
    else {
        alert('Check your spelling and try again.')
    }
    return choiceLower;
}

const playerSelection = humanPlay();
console.log(playerSelection);
const computerSelection = computerPlay();
console.log(computerSelection);

function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore = 0;
    if (playerSelection == computerSelection) {
      alert('It\s a draw. Please try again.');
    }  else if (playerSelection == 1 && computerSelection == 3) {
        alert('Rock breaks scissors. You win.');
        return playerScore + 1;
    }  else if (playerSelection == 1 && computerSelection == 2) {
        alert('Paper covers rock. You lose.');
        return computerScore + 1;
    }  else if (playerSelection == 2 && computerSelection == 1) {
        alert('Paper covers rock. You win.');
        return playerScore + 1;
    }  else if (playerSelection == 2 && computerSelection == 3) {
        alert('Scissors cut paper. You lose.');
        return computerScore + 1;
    }  else if (playerSelection == 3 && computerSelection == 2) {
        alert('Scissors cut paper. You win.');
        return playerScore + 1;
    }  else if (playerSelection == 3 && computerSelection == 1) {
        alert('Scissors break rock. You lose.');
        return computerScore + 1;
    }    
    return (playerScore + computerScore);
    }

console.log(playRound(playerSelection, computerSelection));

function game() {
    // play a 5 round game that keeps score and reports a winner or loser at the end.
    for (let i = 0; i < 5; i++) {
        // humanPlay();
        playRound();
    }
}

console.log(game());

// Play a single round of Rock Paper Scissors from two players: the player and the computer.
// The player should input either rock, paper or scissors in any case input.
// Return a string that declares the winner of the round: "You lose! Paper beats Rock."
// The following are the conditions for winning: paper beats rock. rock beats scissors. scissors beat paper.
// If the player chooses paper and the computer chooses rock, player wins, but if the computer chooses scissors, computer wins.
// If the player chooses rock and the computer chooses scissors, player wins, but if the computer chooses paper, computer wins.
// If the player chooses scissor and the computer chooses paper, player wins, b ut if the computer chooses rock, computer wins.
// If both players choose the same, re-roll. 

