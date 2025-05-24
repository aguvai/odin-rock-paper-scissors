let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

function sendResultMessage(result, humanChoice, computerChoice) {
    if (result == "humanWon") {
        console.log(`You won! ${humanChoice} beats ${computerChoice}.`)
    } else if (result == "humanLost") {
        console.log(`You lost! ${computerChoice} beats ${humanChoice}.`)
    } else if (result == "tie") {
        console.log(`It's a tie! The computer and the human both chose ${humanChoice}.`)
    }
}

function playRound(humanChoice, computerChoice) {
    switch(humanChoice.toLowerCase()) {
        case "rock":
            sendResultMessage("humanWon", humanChoice, computerChoice)
            break;
        case "paper":
            sendResultMessage("humanLost", humanChoice, computerChoice)
            break;
        case "scissors":
            sendResultMessage("tie", humanChoice, computerChoice)
            break;
    }

}

playRound(getHumanChoice(), getComputerChoice())