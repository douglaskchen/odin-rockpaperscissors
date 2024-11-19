let computerScore = 0;
let humanScore = 0

const body = document.querySelector("body");

const divConsole = document.createElement("div");
divConsole.classList.add("consoleOutput");

const roundResult = document.createElement("p");
roundResult.classList.add("roundResult");

const score = document.createElement("p");
score.classList.add("scoreTracker");

const winAnnounce = document.createElement("p");
winAnnounce.classList.add("winAnnounce");


const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", function (){
    playRound("rock");
});

const btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", function (){
    playRound("paper");
});

const btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", function (){
    playRound("scissors");
});

function getComputerChoice () {
    let x = Math.floor(Math.random()* (3));
    if (x == 0)
        return "rock";
    else if (x == 1)
        return "paper";
    else
        return "scissors";
}

function playRound (humanChoice) {
    let computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == "rock"){
        if (computerChoice == "rock"){
            roundResult.textContent = "This round is a draw.";
        }
        else if (computerChoice == "paper"){
            roundResult.textContent = "You lose! Paper beats Rock.";
            computerScore++;
        }
        else {
            roundResult.textContent = "You win! Rock beats Scissors.";
            humanScore++;
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            roundResult.textContent = "You win! Paper beats Rock.";
            humanScore++;
        }
        else if (computerChoice == "paper"){
            roundResult.textContent = "This round is a draw.";
        }
        else {
            roundResult.textContent = "You lose! Scissors beats Paper.";
            computerScore++;
        }
    }
    else {
        if (computerChoice == "rock"){
            roundResult.textContent = "You lose! Rock beats Scissors.";
            computerScore++;
        }
        else if (computerChoice == "paper"){
            roundResult.textContent = "You win! Scissors beats Paper.";
            humanScore++;
        }
        else {
            roundResult.textContent = "This round is a draw.";
        }
    }

    
    score.textContent =
    "\nComputer chose: " + computerChoice + 
    "\nYou chose: " + humanChoice +
    "\nComputer score: " + computerScore + 
    "\nYour score: " + humanScore;

    if (humanScore > 4)
        winAnnounce.textContent = "\nYou won 5 rounds, congrats!";
    else if (computerScore > 4)
        winAnnounce.textContent = "\nThe computer won 5 rounds, try again!";


    divConsole.appendChild(roundResult);
    divConsole.appendChild(score);
    divConsole.appendChild(winAnnounce);
    body.appendChild(divConsole);
}