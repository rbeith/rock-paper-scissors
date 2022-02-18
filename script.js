

// Given a string, the computer will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// each string should be represented by a number 1-3. the computer will randomly choose a number 1-3.
// then assign the string to the number. 



function playRound() {
    function computerPlay() {
        let number = Math.ceil(Math.random() * 3);
        return number;  
    }

    function humanPlay() {
        let playerChoice = prompt('Rock, Paper, or Scissors?')
        let choiceLower = playerChoice.toLowerCase();
        if (choiceLower == 'rock') {
            return 1;
        } else if (choiceLower == 'paper') {
            return 2;
        } else if (choiceLower == 'scissors') {
            return 3;
        } else {
            alert('Check your spelling and try again.')
        } return choiceLower;
    }
    
    const playerSelection = humanPlay();
    console.log(playerSelection);
    const computerSelection = computerPlay();
    console.log(computerSelection);

    let playerScore = 1;
    let computerScore = 1; 
    if ((playerSelection == 1) && (computerSelection == 3)) {
        alert('Rock breaks scissors. You win.');
        return playerScore = playerScore + 1;
    }  else if ((playerSelection == 1) && (computerSelection == 2)) {
        alert('Paper covers rock. You lose.');
        return computerScore;
    }  else if ((playerSelection == 2) && (computerSelection == 1)) {
        alert('Paper covers rock. You win.');
        return playerScore = playerScore + 1;
    }  else if ((playerSelection == 2) && (computerSelection == 3)) {
        alert('Scissors cut paper. You lose.');
        return computerScore;
    }  else if ((playerSelection == 3) && (computerSelection == 2)) {
        alert('Scissors cut paper. You win.');
        return playerScore = playerScore + 1;
    }  else if ((playerSelection == 3) && (computerSelection == 1)) {
        alert('Scissors break rock. You lose.');
        return computerScore;
    }  else if (playerSelection == computerSelection) {   
        alert('It\s a draw. No point awarded.');
        return 0;
    }  
    return (playerScore + computerScore);
}

// console.log(playRound());


// play a 5 round game that keeps score and reports a winner or loser at the end.
function game() {
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) { 
        let score = playRound();
        if (score == 2) {
            humanScore++;
            alert('You got one point. Your score is ' + humanScore + '. Computer\'s score is ' + computerScore + '.');
                     
        }
        else if (score == 1) {
            computerScore++;
            alert('That\'s one for the computer, my man. Your score is ' + humanScore + '. Computer\'s score is ' + computerScore + '.')
            
        }
        else if (score == 0) {
            alert('No change. Your score is ' + humanScore + '. Computer\'s score is ' + computerScore + '.')
        } 
    }
    function finalAlert() {
        if (humanScore > computerScore) {
            alert('Your final score is ' + humanScore + '. ' + 'The computer got ' + computerScore + '. ' + 'You are the champion!');
        } else if (computerScore > humanScore) {
            alert('Your final score is ' + humanScore + '. ' + 'The computer got ' + computerScore + '. ' + 'You are no match for a machine. Computer victory!')
        }
    }
    console.log(finalAlert()); 
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

