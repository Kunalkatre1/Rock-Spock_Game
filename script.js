const playerScoreEl = document.getElementById('player-score');
const playerChoiceEl = document.getElementById('player-choice');
const computerScoreEl = document.getElementById('computer-score');
const computerChoiceEl = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');

const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

//Call Function to process turn:
function checkResult(playerChoice){
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}


//Random Computer Choice Generator
function computerRandomChoice(){
    const computerChoiceNumber = Math.random();

    if(computerChoiceNumber < 0.2){
        computerChoice = 'rock';
    }
    else if(computerChoiceNumber <= 0.4){
        computerChoice = 'paper';
    }
    else if (computerChoiceNumber <= 0.6){
        computerChoice = 'scissors';
    }
    else if (computerChoiceNumber <=0.8){
        computerChoice = 'lizard';
    }
    else{
        computerChoice = 'spock';
    }
}


//Reset all selected icons
function resetSelected(){
    allGameIcons.forEach((icon) => {
        icon.classList.remove('selected');
    });
}

//Reset All : score, player & computer choice reset
function resetAll(){
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    computerScoreEl.textContent = computerScoreNumber;
    playerChoiceEl.textContent = '';
    computerChoiceEl.textContent = '';
    resultText.textContent = '';
    resetSelected();
}

//Passing player selection value & styling icons
function select(playerChoice){
    
    checkResult(playerChoice);

    //Add selected styling & playerChoice
    switch(playerChoice){
        case "rock":
            playerRock.classList.add('selected');
            playerChoiceEl.textContent = '   - - - Rock';
            break;
        case "paper":
            playerPaper.classList.add('selected');
            playerChoiceEl.textContent = '   - - - Paper';
            break;
        case "scissors":
            playerScissors.classList.add('selected');
            playerChoiceEl.textContent = '   - - - Scissors';
            break;
        case "lizard":
            playerLizard.classList.add('selected');
            playerChoiceEl.textContent = '   - - - Lizard';
            break;
        case "spock":
            playerSpock.classList.add('selected');
            playerChoiceEl.textContent = '   - - - Spock';
            break;
        default:
            break;
    }
}


//Add Styling & Computer choice
function displayComputerChoice(){
    //Add selected styling & playerChoice
    switch(computerChoice){
        case "rock":
            computerRock.classList.add('selected');
            computerChoiceEl.textContent = '   - - - Rock';
            break;
        case "paper":
            computerPaper.classList.add('selected');
            computerChoiceEl.textContent = '   - - - Paper';
            break;
        case "scissors":
            computerScissors.classList.add('selected');
            computerChoiceEl.textContent = '   - - - Scissors';
            break;
        case "lizard":
            computerLizard.classList.add('selected');
            computerChoiceEl.textContent = '   - - - Lizard';
            break;
        case "spock":
            computerSpock.classList.add('selected');
            computerChoiceEl.textContent = '   - - - Spock';
            break;
        default:
            break;
    }
}

//Update Score, increase score, Check result
function updateScore(playerChoice){
    if(playerChoice === computerChoice){
        resultText.textContent = "It's a tie";
    }
    else{
        const choice = choices[playerChoice];
        if(choice.defeats.indexOf(computerChoice)){
            resultText.textContent = "You WON!";
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber;
        }
        else{
            resultText.textContent = "You Lose!";
            computerScoreNumber++;
            computerScoreEl.textContent = computerScoreNumber;
        }
    }
}


//Initial values on startup
resetAll();



