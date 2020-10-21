const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const winnerMsg = document.querySelector(".winnerMessage");
const userScoreSpan = document.querySelector("#user");
const computerScoreSpan = document.querySelector("#computer");
const resetButton = document.querySelector(".reset-btn");
let userScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomNum];
    return computerChoice;
}


function game() {
    let userChoice = this.id;
    let computerChoice = getComputerChoice();
    let compareChoice = computerChoice+userChoice;
    console.log(compareChoice);
    let message;
    switch(compareChoice) {
        case "scissorsscissors":
        case "rockrock":
        case "paperpaper":
            message = "It was a tie!";
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            message = "Player wins!";
            userScore++;
            userScoreSpan.innerHTML = userScore;
            break;
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
            message = "Computer wins!";
            computerScore++;
            computerScoreSpan.innerHTML = computerScore;
            break;
    }
    winnerMsg.innerHTML = message;
}

function reset() {
    userScore = 0;
    computerScore = 0;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
}



rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);
resetButton.addEventListener("click", reset);