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

	playerScore.textContent = "Your score: " + humanScore;
	resultsDiv.appendChild(playerScore);
	compScore.textContent = "Computer score: " + computerScore;
	resultsDiv.appendChild(compScore);
	
	if (humanScore === 5) {
		winText.textContent = "Congratulations you win!";
		winText.style.fontWeight = "bold";
		resultsDiv.appendChild(winText);
		resetGame();
	} else if (computerScore === 5) {
		winText.textContent = "Computer wins!";
		winText.style.fontWeight = "bold";
		resultsDiv.appendChild(winText);
		resetGame();
	} 
}

function resetGame() {
	const playAgainButton = document.createElement("button");
	playAgainButton.textContent = "Play Again";
	resultsDiv.appendChild(playAgainButton);

	rockButton.removeEventListener("click", play);
	paperButton.removeEventListener("click", play);
	scissorsButton.removeEventListener("click", play);

	playAgainButton.addEventListener("click", () => {
		humanScore = 0;
		computerScore = 0;
		round = 1;

		displayRound.remove();
		roundText.remove();
		choiceText.remove();
		winText.remove();
		playerScore.remove();
		compScore.remove();

		playAgainButton.remove();

		rockButton.addEventListener("click", play);
		paperButton.addEventListener("click", play);
		scissorsButton.addEventListener("click", play);
	});
}

function play() {
	playGame(this.textContent);
}

let humanScore = 0;
let computerScore = 0;
let round = 1;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const resultsDiv = document.querySelector("#results");
const displayRound = document.createElement("p");
const roundText = document.createElement("p");
const choiceText = document.createElement("p");
const winText = document.createElement("p");
const playerScore = document.createElement("p");
const compScore = document.createElement("p");

rockButton.addEventListener("click", play);
paperButton.addEventListener("click", play);
scissorsButton.addEventListener("click", play);