const btns = document.querySelectorAll("button");
btns.forEach(btn => {
  btn.addEventListener("click", getPlayerChoice);
});

const container = document.querySelector(".container");
const score = document.querySelector(".score");
const buttons = document.querySelector(".buttons");
let playerScore = 0;
let computerScore = 0;

const text = document.createElement("div");
text.classList.add("text");
container.appendChild(text);
container.insertBefore(text, buttons);

const replayButton = document.createElement("button");

function getPlayerChoice(e) {
  const playerChoice = e.target.className;
  playRound(playerChoice);
  return playerChoice;
}

function getComputerChoice() {
  let random = Math.floor(Math.random() * 3 + 1);
  if (random === 1) {
    random = "rock";
  } else if (random === 2) {
    random = "paper";
  } else {
    random = "scissors";
  }
  return random;
}

function gameOver() {
  if (computerScore === 5 || playerScore === 5) {
    container.removeChild(buttons);
    score.textContent = "Game Over! You Lose!";
    replayButton.classList.add("replay");
    replayButton.textContent = "Replay";
    container.appendChild(replayButton);
    replayButton.addEventListener("click", replay);
  }
}

function replay() {
  container.removeChild(replayButton);
  text.setAttribute("style", "visibility: hidden");
  container.appendChild(buttons);
  playerScore = 0;
  computerScore = 0;
  score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  text.setAttribute("style", "visibility: visible");

  const upperComputerChoice =
    computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
  const upperPlayerChoice =
    playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);

  const loseText = `You lose! ${upperComputerChoice} beat ${playerChoice}!`;
  const winText = `You win! ${upperPlayerChoice} beat ${computerChoice}!`;

  if (playerChoice === "rock" && computerChoice === "paper") {
    text.textContent = loseText;
    computerScore++;
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    gameOver();
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    text.textContent = winText;
    playerScore++;
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    gameOver();
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    text.textContent = loseText;
    computerScore++;
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    gameOver();
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    text.textContent = winText;
    playerScore++;
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    gameOver();
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    text.textContent = loseText;
    computerScore++;
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    gameOver();
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    text.textContent = winText;
    playerScore++;
    score.textContent = `Player ${playerScore} - ${computerScore} Computer`;
    gameOver();
  } else if (playerChoice === computerChoice) {
    text.textContent = "Draw!";
  }
}
