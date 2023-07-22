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
  console.log(playerChoice, computerChoice, winner);
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

//Event listeners
choices.forEach((choice) => choice.addEventListener("click", play));
