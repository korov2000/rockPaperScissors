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
}

function playGame(playerChoice) {
	console.log(`Round ${round++}.`);

	playRound(playerChoice, getComputerChoice());

	console.log("");
	
	if (humanScore === 5) {
		console.log("Congratulations you win!");
	} else if (computerScore === 5) {
		console.log("Computer wins!");
	} 
	
	console.log("Your score: " + humanScore);
	console.log("Computer score: " + computerScore);
	console.log("");
}

let humanScore = 0;
let computerScore = 0;
let round = 1;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playGame(rockButton.textContent));
paperButton.addEventListener("click", () => playGame(paperButton.textContent));
scissorsButton.addEventListener("click", () => playGame(scissorsButton.textContent));
