let humanChoice = null
let computerChoice = null

let humanScore = 0;
let computerScore = 0;

const humanScoreText = document.querySelector(".humanScore");
const computerScoreText = document.querySelector(".computerScore");
const resultMessageText = document.querySelector(".roundResults p")

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

function announceWinner() {
    let winner = "";
    if (humanScore >= 5) {
        winner = "human"
    } else {
        winner = "computer"
    }

    resultMessageText.textContent = `Round over! The ${winner} won.`

    humanScore = 0;
    computerScore = 0;
}

function sendResultMessage(result) {
    let resultMessage = null;
    
    if (result == "humanWon") {
        resultMessage = `You won - ${humanChoice} beats ${computerChoice}!`

        humanScore++;
    } else if (result == "humanLost") {
        resultMessage = `You lost - ${computerChoice} beats ${humanChoice}.`

        computerScore++;
    } else if (result == "tie") {
        resultMessage = `It's a tie! The computer and the human both chose ${humanChoice}.`
    }

    if (humanScore >= 5 || computerScore >= 5) {
        announceWinner()
    } else {
        resultMessageText.textContent = resultMessage;
    }

    humanScoreText.textContent = humanScore;
    computerScoreText.textContent = computerScore;
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

const selections = document.querySelectorAll(".selection");

selections.forEach(element => {
    element.addEventListener("click", () => {
        switch (element.textContent.toLowerCase()) {
            case "rock":
                humanChoice = "rock";
                break;
            case "paper":
                humanChoice = "paper";
                break;
            case "scissors":
                humanChoice = "scissors";
                break;
        }
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    })
});