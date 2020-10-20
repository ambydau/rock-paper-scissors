const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playerScoreSpan = document.querySelector("#user");
const computerScoreSpan = document.querySelector("#computer");
const winnerSpan = document.querySelector("#winner");

let userScore = 0;
let computerScore = 0;

function play(e) {
    const computerChoice = "rock";
    if(this.id === "rock") {
        console.log("Tie!");
    } else if (this.id === "paper") {
        console.log("User Wins!");
        userScore++;
        playerScoreSpan.innerHTML = userScore;
    } else {
        console.log("Computer Wins!");
        computerScore++;
        computerScoreSpan.innerHTML = computerScore;
    }
    if(userScore === 5 || computerScore === 5) {
        
        reset();
    } 
}

function reset() {
    userScore = 0;
    computerScore = 0;
    playerScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
}

rock.addEventListener("click", play);
paper.addEventListener("click", play);
scissors.addEventListener("click", play);