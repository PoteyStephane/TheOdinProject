let playerSelection = prompt("What is your choice ?");
let computerChoices = getComputerChoice();

function getComputerChoice() {
  let computerChoices = ["paper", "rock", "scissors"];
  return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function playRound(playerSelection, computerChoice) {
  if (
    (playerSelection.toLowerCase() == "scissors" &&
      computerChoice === "paper") ||
    (playerSelection.toLowerCase() == "paper" && computerChoice === "rock") ||
    (playerSelection.toLowerCase() == "rock" && computerChoice === "scissors")
  ) {
    console.log(
      "You won ! " +
        `${playerSelection.toLowerCase()} win ` +
        " on " +
        `${computerChoice}`
    );
  } else if (playerSelection.toLowerCase() == computerChoice) {
    console.log("You are tied");
  } else {
    console.log(
      "You lost ! " +
        `${computerChoice} win ` +
        " on " +
        `${playerSelection.toLowerCase()}`
    );
  }
}

playRound(playerSelection, computerChoices);
