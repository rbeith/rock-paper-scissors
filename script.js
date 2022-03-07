// Given a string, the computer will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// each string should be represented by a number 1-3. the computer will randomly choose a number 1-3.
// then assign the string to the number. 
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#results');
const content = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
      let playerSelection = button.id;
      content.classList.add('content');
      container.appendChild(content);
      playRound(playerSelection);
      console.log(playRound(playerSelection))
      //game();
    });
});

function computerPlay() {
        let number = Math.ceil(Math.random() * 3);
        return number;  
};

// function humanPlay(val, score) {
//     if (val == 1) {
//         score = 1;
//     } else if (val == 2) {
//         score = 2;
//     } else if (val == 3) {
//         score = 3;
//     }; return score;
// };

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    console.log(playerSelection)
    console.log(computerSelection)
    let playerScore = 0;
    let computerScore = 0; 
    if ((playerSelection == 1) && (computerSelection == 3)) {
        content.textContent = 'Rock breaks scissors. You win.';
        return playerScore = playerScore + 1;
    }  else if ((playerSelection == 1) && (computerSelection == 2)) {
        content.textContent = 'Paper covers rock. You lose.';
        return computerScore;
    }  else if ((playerSelection == 2) && (computerSelection == 1)) {
        content.textContent = 'Paper covers rock. You win.';
        return playerScore = playerScore + 1;
    }  else if ((playerSelection == 2) && (computerSelection == 3)) {
        content.textContent = 'Scissors cut paper. You lose.';
        return computerScore;
    }  else if ((playerSelection == 3) && (computerSelection == 2)) {
        content.textContent = 'Scissors cut paper. You win.';
        return playerScore = playerScore + 1;
    }  else if ((playerSelection == 3) && (computerSelection == 1)) {
        content.textContent = 'Rock break scissors. You lose.';
        return computerScore;
    }  else if (playerSelection == computerSelection) {   
        content.textContent = 'It\s a draw. No point awarded.';
        return 0;
    }  
};

function game() {
    let humanScore = 0;
    let computerScore = 0;
    if (score == 2) {
        humanScore++;
        content.textContent = 'You got one point. Your score is ' + humanScore + '. Computer\'s score is '
        + computerScore + '.'               
    } else if (score == 1) {
        computerScore++;
        content.textContent = 'That\'s one for the computer, my man. Your score is '
        + humanScore + '. Computer\'s score is ' + computerScore + '.'
    } else if (score == 0) {
        content.textContent = 'Tie. Your score is ' + humanScore +
        '. Computer\'s score is ' + computerScore + '.'
    }

    //for (let i = 0; i < 5; i++) {     
        function finalAlert() {
            if (humanScore > computerScore) {
                content.textContent = 'Your final score is ' + humanScore + '. ' + 'The computer got '
                + computerScore + '. ' + 'You are the champion!'
            } else if (computerScore > humanScore) {
                content.textContent = 'Your final score is ' + humanScore + '. ' + 'The computer got '
                + computerScore + '. ' + 'You are no match for a machine. Computer victory!'
            }
        } return content.textContent = finalAlert();
    // };
};
            // Play a single round of Rock Paper Scissors from two players: the player and the computer.
            // The player should input either rock, paper or scissors in any case input.
            // Return a string that declares the winner of the round: "You lose! Paper beats Rock."
            // The following are the conditions for winning: paper beats rock. rock beats scissors. scissors beat paper.
            // If the player chooses paper and the computer chooses rock, player wins, but if the computer chooses scissors, computer wins.
            // If the player chooses rock and the computer chooses scissors, player wins, but if the computer chooses paper, computer wins.
            // If the player chooses scissor and the computer chooses paper, player wins, b ut if the computer chooses rock, computer wins.
            // If both players choose the same, re-roll.