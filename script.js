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
	choiceText.textContent = `You select: ${humanSelection}, computer select: ${computerSelection}`;
	resultsDiv.appendChild(choiceText);

	if (humanSelection === "rock") {
		if (computerSelection === "rock") {
			roundText.textContent = "It's a tie. You both choose Rock.";
			resultsDiv.appendChild(roundText);
		} else if (computerSelection === "paper") {
			roundText.textContent = "You lose! Paper beats Rock.";
			resultsDiv.appendChild(roundText);
			computerScore++;
		} else {
			roundText.textContent = "You win! Rock beats Scissors.";
			resultsDiv.appendChild(roundText);
			humanScore++;
		}
	}

	if (humanSelection === "paper") {
		if (computerSelection === "paper") {
			roundText.textContent = "It's a tie. You both choose Rock.";
			resultsDiv.appendChild(roundText);
		} else if (computerSelection === "scissors") {
			roundText.textContent = "You lose! Scissors beats Paper.";
			resultsDiv.appendChild(roundText);
			computerScore++;
		} else {
			roundText.textContent = "You win! Paper beats Rock.";
			resultsDiv.appendChild(roundText);
			humanScore++;
		}
	}

	if (humanSelection === "scissors") {
		if (computerSelection === "scissors") {
			roundText.textContent = "It's a tie. You both choose Rock.";
			resultsDiv.appendChild(roundText);
		} else if (computerSelection === "rock") {
			roundText.textContent = "You lose! Rock beats Scissors.";
			resultsDiv.appendChild(roundText);
			computerScore++;
		} else {
			roundText.textContent = "You win! Scissors beats Paper.";
			resultsDiv.appendChild(roundText);
			humanScore++;
		}
	}
}

function playGame(playerChoice) {
	displayRound.textContent = `Round ${round++}.`;
	resultsDiv.appendChild(displayRound);

	playRound(playerChoice, getComputerChoice());

	if (humanScore === 5) {
		winText.textContent = "Congratulations you win!";
		resultsDiv.appendChild(winText);
	} else if (computerScore === 5) {
		winText.textContent = "Computer wins!";
		resultsDiv.appendChild(winText);
	} 
	
	playerScore.textContent = "Your score: " + humanScore;
	resultsDiv.appendChild(playerScore);
	compScore.textContent = "Computer score: " + computerScore;
	resultsDiv.appendChild(compScore);
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

const resultsDiv = document.querySelector("#results");
const displayRound = document.createElement("p");
const roundText = document.createElement("p");
const choiceText = document.createElement("p");
const winText = document.createElement("p");
const playerScore = document.createElement("p");
const compScore = document.createElement("p");