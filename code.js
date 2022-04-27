"use strict";

const play = document.querySelector(".btn");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");

console.log(rock.textContent);
let playerScore = 0;
let ComputerScore = 0;

play.addEventListener("click");

function game() {
  for (let i = 0; i < 5; i++) {
    function playRound(playerSelection, computerSelection) {
      const selections = [rock, paper, scissors];
      // playerSelection = prompt(
      //   "What will you choose Rock, Paper, Scissors"
      // ).toLocaleLowerCase();cd ..
      // console.log(playerSelection);

      computerSelection =
        selections[Math.floor(Math.random() * selections.length)];
      console.log(computerSelection);
      if (playerSelection === computerSelection) {
        console.log("TIE");
        // player win conditons. by default if the player doesnt win or tie. the computer wins
      } else if (
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock")
      ) {
        console.log("Player wins");
        i++;
      } else {
        console.log("computer wins");
        i++;
      }
    }
    playRound();
  }
}
