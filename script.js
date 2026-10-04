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
	let humanChoice = prompt("Write your choice(rock, paper or scissors):");

	let keepGoing = true;
	while(keepGoing) {
		humanChoice = humanChoice.toLowerCase();

		if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
			keepGoing = false;
		} else {
			humanChoice = prompt("Wrong choice write rock, paper or scissors:");
		}
	}

	return humanChoice;
}

function playGame() {

	let humanScore = 0;
	let computerScore = 0;

	function playRound(humanSelection, computerSelection) {
		humanSelection = humanSelection.toLowerCase();

		console.log(`You select: ${humanSelection}, computer select: ${computerSelection}`);

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
		
		console.log("Your score: " + humanScore);
		console.log("Computer score: " + computerScore);
		console.log("");

	}

	for (let i = 1; i <= 5; i++) {
		console.log(`Round ${i}.`);

		playRound(getHumanChoice(), getComputerChoice());
	}

	if (humanScore > computerScore) {
		console.log("Congratulations you win!");
	} else if (humanScore < computerScore) {
		console.log("Computer wins!");
	} else {
		console.log("It's a tie.");
	}
	
	console.log("Your score: " + humanScore);
	console.log("Computer score: " + computerScore);
}

playGame();