let playerCountScore = 0;
let computerCountScore = 0;
let gameCountScore = 0;

let gameEnd = false;

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnRestart = document.getElementById("restart");
const btnChoices = document.querySelectorAll(".btn-selection");

const txtPlayerScore = document.getElementById("player-score");
const txtComputerScore = document.getElementById("computer-score");
const txtPlayedScore = document.getElementById("played-game-count");
const txtWinnerName = document.getElementById("winner-name");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "TIE";
  } else if (
    (playerSelection == "scissors" && computerSelection === "paper") ||
    (playerSelection == "paper" && computerSelection === "rock") ||
    (playerSelection == "rock" && computerSelection === "scissors")
  ) {
    return "PLAYER WON";
  } else {
    return "COMPUTER WON";
  }
}

function checkWinner() {
  if (playerCountScore > computerCountScore) {
    txtWinnerName.textContent = "PLAYER";
  } else {
    txtWinnerName.textContent = "COMPUTER";
  }
}

function checkEndGame() {
  if (
    playerCountScore === 3 ||
    computerCountScore === 3 ||
    gameCountScore === 5
  ) {
    checkWinner();
    gameEnd = true;
  }
}

function updateScore(result) {
  if (result === "PLAYER WON") {
    playerCountScore++;
    gameCountScore++;
  } else if (result === "COMPUTER WON") {
    computerCountScore++;
    gameCountScore++;
  }
  txtPlayerScore.textContent = playerCountScore;
  txtComputerScore.textContent = computerCountScore;
  txtPlayedScore.textContent = gameCountScore;
}

function buttonClickHandler() {
  if (!gameEnd) {
    const playerChoice = this.id;
    const computerChoice = getComputerChoice();

    const result = playRound(playerChoice, computerChoice);
    updateScore(result);
    checkEndGame();
  }
}

function restart() {
  playerCountScore = 0;
  computerCountScore = 0;
  gameCountScore = 0;
  gameEnd = false;

  txtPlayerScore.textContent = playerCountScore;
  txtComputerScore.textContent = computerCountScore;
  txtPlayedScore.textContent = gameCountScore;

  btnChoices.forEach((btn) => {
    btn.addEventListener("click", buttonClickHandler);
  });
}

btnChoices.forEach((btn) => {
  btn.addEventListener("click", buttonClickHandler);
});

btnRestart.addEventListener("click", restart);

// btnChoices.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const playerChoice = btn.id;
//     const computerChoice = getComputerChoice();

//     const result = playRound(playerChoice, computerChoice);
//     updateScore(result);
//     checkEndGame();
//     console.log(result);
//   });
// });
