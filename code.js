const play = document.querySelector(".btn");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
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
      console.log("Player wins");
      playerScore++;
      console.log(playerScore);
      win();
      break;
    case playerChoice === "paper" && computerSelection === "scissors":
    case playerChoice === "scissors" && computerSelection === "rock":
    case playerChoice === "rock" && computerSelection === "paper":
      console.log("Computer wins");
      computerScore++;
      console.log(computerScore);
      lose();
      break;
  }

  console.log("user choice =>" + playerChoice);
  console.log("computer choice = " + computerSelection);
}

function win() {
  if (playerScore === 5) {
    alert("You win");
  }
}

function lose() {
  if (computerScore === 5) {
    alert("you lose");
  }
}
