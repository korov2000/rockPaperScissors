function getComputerChoice() {
	const randomNumber = Math.floor(Math.random() * 3) + 1;
	let computerChoice = "";

	if (randomNumber === 1) {
		computerChoice = "rock";
	} else if (randomNumber === 2) {
		computerChoice = "paper";
	} else {
		computerChoice = "scissors";
	}

	return computerChoice;
}

function getHumanChoice() {
	const humanChoice = prompt("Write your choice(rock, paper or scissors):");

	return humanChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
	humanSelection = humanSelection.toLowerCase();

	if (humanSelection === "rock") {
		if (computerSelection === "rock") {
			console.log("It's a tie. You both choose Rock.");
		} else if (computerSelection === "paper") {
			console.log("You lose! Paper beats Rock.")
			computerScore++;
		} else {
			console.log("You win! Rock beats Scissors.");
			humanScore++;
		}
	}

	if (humanSelection === "paper") {
		if (computerSelection === "paper") {
			console.log("It's a tie. You both choose Paper.");
		} else if (computerSelection === "scissors") {
			console.log("You lose! Scissors beats Paper.")
			computerScore++;
		} else {
			console.log("You win! Paper beats Rock.");
			humanScore++;
		}
	}

	if (humanSelection === "scissors") {
		if (computerSelection === "scissors") {
			console.log("It's a tie. You both choose Scissors.");
		} else if (computerSelection === "rock") {
			console.log("You lose! Rock beats Scissors.")
			computerScore++;
		} else {
			console.log("You win! Scissors beats Paper.");
			humanScore++;
		}
	}

}
