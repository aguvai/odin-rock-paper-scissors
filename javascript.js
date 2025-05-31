let humanChoice = null
let computerChoice = null

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

function sendResultMessage(result) {
    if (result == "humanWon") {
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`)

        humanScore++;
    } else if (result == "humanLost") {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}.`)

        computerScore++;
    } else if (result == "tie") {
        console.log(`It's a tie! The computer and the human both chose ${humanChoice}.`)
    }

    console.log(`Current score:
        Computer: ${computerScore}
        Human: ${humanScore}
        `);
}

function playRound(humanChoice, computerChoice) {
    switch (humanChoice.toLowerCase()) {
        case "rock":
            if (computerChoice == "rock") {
                sendResultMessage("tie");
            } else if (computerChoice == "paper") {
                sendResultMessage("humanLost");
            } else if (computerChoice == "scissors") {
                sendResultMessage("humanWon");
            }
            break;
        case "paper":
            if (computerChoice == "rock") {
                sendResultMessage("humanWon");
            } else if (computerChoice == "paper") {
                sendResultMessage("tie");
            } else if (computerChoice == "scissors") {
                sendResultMessage("humanLost");
            }
            break;
        case "scissors":
            if (computerChoice == "rock") {
                sendResultMessage("humanLost");
            } else if (computerChoice == "paper") {
                sendResultMessage("humanWon");
            } else if (computerChoice == "scissors") {
                sendResultMessage("tie");
            }
            break;
    }
}


humanChoice = getHumanChoice();
computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);