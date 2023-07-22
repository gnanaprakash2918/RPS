const choices = document.querySelectorAll(".choice");
const score = document.getElementById("score");
const result = document.getElementById("result");
const restart = document.getElementById("restart");
const modal = document.querySelector(".modal");

const scoreboard = {
  player: 0,
  computer: 0,
};

//Play game
function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];

  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
  //   clearModal();
}

//get game winner
function getWinner(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "draw";
  }

  if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      return "player";
    } else if (computerSelection == "scissors") {
      return "computer";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "player";
    } else if (computerSelection == "scissors") {
      return "computer";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "computer";
    } else if (computerSelection == "paper") {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  if (winner === "player") {
    scoreboard.player++;
    result.innerHTML = `
    <h1 class="text-win">You Win !</h1> 
    <i class="fas fa-hand-${computerChoice} fa-10x"></i> 
    <p>Computer chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>`;
  } else if (winner === "computer") {
    scoreboard.computer++;
    result.innerHTML = `
    <h1 class="text-lose">You Lose !</h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i> 
    <p>Computer chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>`;
  } else {
    result.innerHTML = `<h1> It's A Draw !</h1> 
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p>Computer chose <strong>${
      computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
    }</strong></p>`;
  }

  score.innerHTML = `<p>Player:${scoreboard.player}</p>
  <p>Computer:${scoreboard.computer}</p>`;
  modal.style.display = "block";
}

function clearModal(e) {
  if (e.target == modal) modal.style.display = "none";
}

//Event listeners
choices.forEach((choice) => choice.addEventListener("click", play));
window.addEventListener("click", clearModal);
