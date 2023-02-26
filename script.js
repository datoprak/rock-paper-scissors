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

function playRound() {
  const computerChoice = getComputerChoice();
  const playerChoice = prompt("Enter your choice:").toLowerCase();
  const loseText = `You lose! ${computerChoice} beat ${playerChoice}!`;
  const winText = `You win! ${playerChoice} beat ${computerChoice}!`;
  if (playerChoice === "rock" && computerChoice === "paper") {
    alert(loseText);
    return loseText;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    alert(winText);
    return winText;
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    alert(loseText);
    return loseText;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    alert(winText);
    return winText;
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    alert(loseText);
    return loseText;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    alert(winText);
    return winText;
  } else if (playerChoice === computerChoice) {
    alert("Draw!");
    return "Draw!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const result = playRound();
    if (result.slice(4, 5) === "w") {
      playerScore++;
    } else if (result.slice(4, 5) === "l") {
      computerScore++;
    }
    alert(`Player ${playerScore} - ${computerScore} Computer`);
  }

  if (playerScore > computerScore) {
    return alert(
      `YOU WIN THE GAME!!!\nPlayer ${playerScore} - ${computerScore} Computer`
    );
  } else if (playerScore < computerScore) {
    return alert(
      `YOU LOSE THE GAME!!!\nPlayer ${playerScore} - ${computerScore} Computer`
    );
  } else {
    return alert(`DRAW!!!\nPlayer ${playerScore} - ${computerScore} Computer`);
  }
}

game();
