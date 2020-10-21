const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

function getComputerChoice() {
    let computerChoice = "rock";
    return computerChoice;
}


function game() {
    let userChoice = this.id;
    let computerChoice = getComputerChoice();
    console.log(computerChoice + userChoice);
}


rock.addEventListener("click", game);
paper.addEventListener("click", game);
scissors.addEventListener("click", game);