let computerScore = 0;
let humanScore = 0

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
            console.log("This round is a draw.");
        }
        else if (computerChoice == "paper"){
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        }
        else {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        }
    }
    else if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You win! Paper beats Rock.");
            humanScore++;
        }
        else if (computerChoice == "paper"){
            console.log("This round is a draw.");
        }
        else {
            console.log("You lose! Scissors beats Paper.");
            computerScore++;
        }
    }
    else {
        if (computerChoice == "rock"){
            console.log("You lose! Rock beats Scissors.");
            computerScore++;
        }
        else if (computerChoice == "paper"){
            console.log("You win! Scissors beats Paper.");
            humanScore++;
        }
        else {
            console.log("This round is a draw.");
        }
    }

    console.log("Computer chose: " + computerChoice);
    console.log("You chose: " + humanChoice);
    console.log("Computer score: " + computerScore);
    console.log("Your score: " + humanScore);
    console.log("");

    if (humanScore > 4)
        console.log("You won! Congrats!");
    else if (computerScore > 4)
        console.log("The computer won! Try again!");
}