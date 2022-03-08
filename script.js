// Given a string, the computer will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
// each string should be represented by a number 1-3. the computer will randomly choose a number 1-3.
// then assign the string to the number. 
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#results');
const content = document.createElement('div');
content.classList.add('content', 'round', 'victory');        
container.appendChild(content);

const round = document.createElement('div')
content.appendChild(round);

const victory = document.createElement('div')
content.appendChild(victory);
victory.style.fontWeight = '900';

let humanScore = 0;
let computerScore = 0; 

buttons.forEach((button) => {
    button.addEventListener('click', () => {


        const playerSelection = button.id;
        game(playerSelection);
    });
});

function computerPlay() {
        let number = Math.ceil(Math.random() * 3);
        return number;  
};

function game(playerSelection) {
    const computerSelection = computerPlay();
    console.log(playerSelection)
    console.log(computerSelection)
   
    
    function gameRound() {    
        let score = 1;
        if ((playerSelection == 1) && (computerSelection == 3)) {
            round.textContent = 'Rock breaks scissors. You win.';
            score++;
        }  else if ((playerSelection == 1) && (computerSelection == 2)) {
            round.textContent = 'Paper covers rock. You lose.';
        }  else if ((playerSelection == 2) && (computerSelection == 1)) {
            round.textContent = 'Paper covers rock. You win.';
            score++;
        }  else if ((playerSelection == 2) && (computerSelection == 3)) {
            round.textContent = 'Scissors cut paper. You lose.';
        }  else if ((playerSelection == 3) && (computerSelection == 2)) {
            round.textContent = 'Scissors cut paper. You win.';
            score++;
        }  else if ((playerSelection == 3) && (computerSelection == 1)) {
            round.textContent = 'Rock break scissors. You lose.';
        }  else if (playerSelection == computerSelection) {   
            round.textContent = 'It\s a draw. You both chose the same.';
            score--;
        } return score;  
    };    console.log(gameRound())

    function gameScore() {   
            if (gameRound() == 2) {
                humanScore++;
                round.textContent = (`You got one point. Your score is ${humanScore}. Computer\'s score is
                ${computerScore}.`)              
                return humanScore;
            } else if (gameRound() == 1) {
                computerScore++
                round.textContent = (`That\'s one for the computer, my man. Your score is
                ${humanScore}. Computer\'s score is ${computerScore}.`)
                return computerScore;
            } else if (gameRound() == 0) {
                round.textContent = (`Tie. Your score is ${humanScore}. Computer\'s score is ${computerScore}.`)
            }   return;
    }; console.log(gameScore())
    console.log(humanScore)
    console.log(computerScore)

    if (humanScore == 5) {
        victory.textContent = `Your final score is ${humanScore}. The computer got ${computerScore}. You are the champion!`
    } else if (computerScore == 5) {
        victory.textContent = `Your final score is ${humanScore}. The computer got ${computerScore}. You are no match for a machine. Computer victory!`
    }
};






    // finalAlert();
    // console.log(finalAlert())


            // Play a single round of Rock Paper Scissors from two players: the player and the computer.
            // The player should input either rock, paper or scissors in any case input.
            // Return a string that declares the winner of the round: "You lose! Paper beats Rock."
            // The following are the conditions for winning: paper beats rock. rock beats scissors. scissors beat paper.
            // If the player chooses paper and the computer chooses rock, player wins, but if the computer chooses scissors, computer wins.
            // If the player chooses rock and the computer chooses scissors, player wins, but if the computer chooses paper, computer wins.
            // If the player chooses scissor and the computer chooses paper, player wins, b ut if the computer chooses rock, computer wins.
            // If both players choose the same, re-roll.