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

// console.log(getComputerChoice())

function getHumanChoice() {
	const humanChoice = prompt("Write your choice(rock, paper or scissors):");

	return humanChoice.toLowerCase();
}

// console.log(getHumanChoice());
