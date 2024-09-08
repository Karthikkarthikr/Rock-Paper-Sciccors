const playerScoreElem = document.getElementById("player-score");
const computerScoreElem = document.getElementById("computer-score");
const roundElem = document.getElementById("round");
const playerChoiceElem = document.getElementById("player-choice");
const computerChoiceElem = document.getElementById("computer-choice");
const roundResultElem = document.getElementById("round-result");
const restartButton = document.getElementById("restart");

const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let round = 0;

document.getElementById("rock").addEventListener("click", () => playGame("rock"));
document.getElementById("paper").addEventListener("click", () => playGame("paper"));
document.getElementById("scissors").addEventListener("click", () => playGame("scissors"));

function playGame(playerChoice) {
  if (round >= 20) return;  // Game ends after 20 rounds
  
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const winner = getRoundWinner(playerChoice, computerChoice);
  
  playerChoiceElem.textContent = playerChoice;
  computerChoiceElem.textContent = computerChoice;
  
  if (winner === "player") {
    playerScore++;
    roundResultElem.textContent = "You win this round!";
  } else if (winner === "computer") {
    computerScore++;
    roundResultElem.textContent = "Computer wins this round!";
  } else {
    roundResultElem.textContent = "It's a draw!";
  }
  
  round++;
  updateScoreboard();
  
  if (round === 20) {
    roundResultElem.textContent = playerScore > computerScore ? "You win the game!" : "Computer wins the game!";
  }
}

function getRoundWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "draw";
  if ((playerChoice === "rock" && computerChoice === "scissors") || 
      (playerChoice === "paper" && computerChoice === "rock") || 
      (playerChoice === "scissors" && computerChoice === "paper")) {
    return "player";
  } else {
    return "computer";
  }
}

function updateScoreboard() {
  playerScoreElem.textContent = playerScore;
  computerScoreElem.textContent = computerScore;
  roundElem.textContent = round;
}

restartButton.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  playerChoiceElem.textContent = "None";
  computerChoiceElem.textContent = "None";
  roundResultElem.textContent = "Result will appear here";
  updateScoreboard();
});