"use strict";

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

let pScore = document.querySelector(".score-container1");
let cScore = document.querySelector(".score-container2");
let playerScore = 0;
let computerScore = 0;

function compChoice() {
  const selections = ["rock", "paper", "scissors"];
  let computerSelection =
    selections[Math.floor(Math.random() * selections.length)];
  return computerSelection;
}

function playerChoice() {
  rock.addEventListener("click", function () {
    game("rock");
  });
  paper.addEventListener("click", function () {
    game("paper");
  });
  scissors.addEventListener("click", function () {
    game("scissors");
  });
}
playerChoice();

function game(playerChoice) {
  const computerSelection = compChoice();
  switch (true) {
    case playerChoice === computerSelection:
      console.log("TIE");
      break;
    case playerChoice === "scissors" && computerSelection === "paper":
    case playerChoice === "rock" && computerSelection === "scissors":
    case playerChoice === "paper" && computerSelection === "rock":
      playerScore++;
      console.log("Player wins");
      console.log(playerScore);
      win();
      break;
    case playerChoice === "paper" && computerSelection === "scissors":
    case playerChoice === "scissors" && computerSelection === "rock":
    case playerChoice === "rock" && computerSelection === "paper":
      computerScore++;
      console.log("Computer wins");
      console.log(computerScore);
      win();
      break;
  }

  console.log("user choice =>" + playerChoice);
  console.log("computer choice = " + computerSelection);
}

function win() {
  if (playerScore === 5) {
    alert("you win");
    playerScore = 0;
  } else if (computerScore === 5) {
    computerScore = 0;
    alert("computer wins");
  }
  pScore.innerHTML = playerScore;
  cScore.innerHTML = computerScore;
}

function lose() {
  if (computerScore === 5) {
    alert("you lose");
  }
}
