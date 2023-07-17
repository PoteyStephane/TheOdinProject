let endGame = false;

let playerScoreCount = 0,
  computerScoreCount = 0,
  gameRoundCount = 0;

const mainGamePage = document.querySelector(".main-game");
const playerInformationPage = document.querySelector(".player-information");

let inputPlayerName = document.getElementById("inputPlayerName");
let playerName = document.getElementById("playerName");

const myForm = document.getElementById("myForm");

const txtPlayerScore = document.getElementById("player-score");
const txtComputerScore = document.getElementById("computer-score");
const txtGameRoundScore = document.getElementById("played-game-count");
const txtWinnerName = document.getElementById("winner-name");

const btnsSelection = document.querySelectorAll(".btn-selection");
const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const btnRestart = document.getElementById("restart");

const playerChoices = ["rock", "paper", "scissors"];
const computerChoices = ["rock", "paper", "scissors"];

const tieResult = "TIE";
const playerResult = "PLAYER WON";
const computerResult = "COMPUTER WON";

mainGamePage.classList.add("hide");

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * computerChoices.length);
  return computerChoices[randomChoice];
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return tieResult;
  } else if (
    (playerChoice === playerChoices[0] &&
      computerChoice === computerChoices[2]) ||
    (playerChoice === playerChoices[1] &&
      computerChoice === computerChoices[0]) ||
    (playerChoice === playerChoices[2] && computerChoice === computerChoices[1])
  ) {
    return playerResult;
  } else {
    return computerResult;
  }
}

function updateCount(result) {
  if (result === playerResult) {
    playerScoreCount++;
    gameRoundCount++;
  } else if (result === computerResult) {
    computerScoreCount++;
    gameRoundCount++;
  }
  txtPlayerScore.textContent = playerScoreCount;
  txtComputerScore.textContent = computerScoreCount;
  txtGameRoundScore.textContent = gameRoundCount;
}

function checkWinner() {
  if (playerScoreCount === computerScoreCount) {
    txtWinnerName.textContent = "NOBODY";
  } else if (playerScoreCount > computerScoreCount) {
    txtWinnerName.textContent = playerName.textContent;
  } else {
    txtWinnerName.textContent = "COMPUTER";
  }
}

function checkIfEndGame() {
  if (
    playerScoreCount === 3 ||
    computerScoreCount === 3 ||
    gameRoundCount === 5
  ) {
    checkWinner();
    endGame = true;
    btnRestart.classList.remove("hide");
  }
}

function playGame() {
  const playerChoice = this.id;
  if (!endGame) {
    const result = playRound(playerChoice, getComputerChoice());
    updateCount(result);
    checkIfEndGame();
  }
}

function restarGame() {
  (playerScoreCount = 0), (computerScoreCount = 0), (gameRoundCount = 0);
  txtPlayerScore.textContent = playerScoreCount;
  txtComputerScore.textContent = computerScoreCount;
  txtGameRoundScore.textContent = gameRoundCount;
  txtWinnerName.textContent = "";
  playerInformationPage.classList.remove("hide");
  mainGamePage.classList.add("hide");
  btnRestart.classList.add("hide");
  endGame = false;

  btnsSelection.forEach((btn) => {
    btn.addEventListener("click", playGame);
  });
}

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  playerName.textContent = inputPlayerName.value;
  inputPlayerName.value = "";
  mainGamePage.classList.remove("hide");
  playerInformationPage.classList.add("hide");
  btnRestart.classList.add("hide");
});

btnsSelection.forEach((btn) => {
  btn.addEventListener("click", playGame);
});

btnRestart.addEventListener("click", restarGame);
