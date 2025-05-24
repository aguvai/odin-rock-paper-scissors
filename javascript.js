function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

humanScore = 0;
computerScore = 0;