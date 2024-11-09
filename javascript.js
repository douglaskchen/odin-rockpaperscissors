let computerScore = 0;
let humanScore = 0
playGame();

function getComputerChoice () {
    let x = Math.floor(Math.random()* (3));
    if (x == 0)
        return "rock";
    else if (x == 1)
        return "paper";
    else
        return "scissors";
}

function getHumanChoice () {
    return prompt("Enter your pick: rock, paper, scissors");
}

function playRound (humanChoice, computerChoice) {
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
}

function playGame () {
    for (let i = 0; i<5; i++) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);

        console.log("");

    }
    if (humanScore > computerScore)
        console.log("You won more rounds! Congrats!");
    else if (computerScore > humanScore)
        console.log("The computer won more rounds! Try again!");
    else
        console.log("Draw. Play again!");
}