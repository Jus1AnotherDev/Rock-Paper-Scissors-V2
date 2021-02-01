//To generate a random computer play.
function computerPlay() {
    const actions = ["rock", "paper", "sciccors"];
    return actions[Math.floor(Math.random() * actions.length)];
}

//Function which outputs the result of a round.
function playRound(computerSelection, playerSelection) {
    if (playerSelection == "rock") {
    if (computerSelection == "rock") {
        document.getElementById("roundResult").innerHTML = "Round Result: It's a tie.";
        document.getElementById("playerSelectionImage").src = "css/images/Rock.png";
        document.getElementById("computerSelectionImage").src = "css/images/Rock.png";
        return 0;
    } else if (computerSelection == "paper") {
        document.getElementById("roundResult").innerHTML = "Round Result: You lost the round. Paper beats rock.";
        document.getElementById("playerSelectionImage").src = "css/images/Rock.png";
        document.getElementById("computerSelectionImage").src = "css/images/Paper.png";
        return -1;
    } else {
        document.getElementById("roundResult").innerHTML = "Round Result: You won the round! Rock beats sciccors.";
        document.getElementById("playerSelectionImage").src = "css/images/Rock.png";
        document.getElementById("computerSelectionImage").src = "css/images/Scissors.png";
        return 1;
    }
    } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
        document.getElementById("roundResult").innerHTML = "Round Result: You won the round! Paper beats rock.";
        document.getElementById("playerSelectionImage").src = "css/images/Paper.png";
        document.getElementById("computerSelectionImage").src = "css/images/Rock.png";
        return 1;
    } else if (computerSelection == "paper") {
        document.getElementById("roundResult").innerHTML = "Round Result: It's a tie.";
        document.getElementById("playerSelectionImage").src = "css/images/Paper.png";
        document.getElementById("computerSelectionImage").src = "css/images/Paper.png";
        return 0;
    } else {
        document.getElementById("roundResult").innerHTML = "Round Result: You lost the round. Scissors beats paper.";
        document.getElementById("playerSelectionImage").src = "css/images/Paper.png";
        document.getElementById("computerSelectionImage").src = "css/images/Scissors.png";
        return -1;
    }
    } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
        document.getElementById("roundResult").innerHTML = "Round Result: You lost the round. Rock beats scissors.";
        document.getElementById("playerSelectionImage").src = "css/images/Scissors.png";
        document.getElementById("computerSelectionImage").src = "css/images/Scissors.png";
        return -1;
    } else if (computerSelection == "paper") {
        document.getElementById("roundResult").innerHTML = "Round Result: You won the round! Scissors beats paper.";
        document.getElementById("playerSelectionImage").src = "css/images/Scissors.png";
        document.getElementById("computerSelectionImage").src = "css/images/Paper.png";
        return 1;
    } else{
        document.getElementById("roundResult").innerHTML = "Round Result: It's a tie.";
        document.getElementById("playerSelectionImage").src = "css/images/Scissors.png";
        document.getElementById("computerSelectionImage").src = "css/images/Scissors.png";
        return 0;
    }
    }
}

var playerScore = 0;

var computerScore = 0;

//Function which conducts the game.
function game(playerSelection) {
    var computerSelection = computerPlay();

    var roundResult = playRound(computerSelection, playerSelection);
    console.log(roundResult);

    if (roundResult == 1) {
    playerScore += 1;
    console.log(playerScore);
    } else if(roundResult == -1) {
    computerScore += 1;
    console.log(playerScore);
    }

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if (playerScore == 5) {
        alert("You won!");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("roundResult").innerHTML = "Round Result: ";
        document.getElementById("playerSelectionImage").src = "css/images/Rock Paper Scissors.png";
        document.getElementById("computerSelectionImage").src = "css/images/Rock Paper Scissors.png";
    } else if (computerScore == 5) {
        alert("The computer won.");
        playerScore = 0;
        computerScore = 0;
        document.getElementById("playerScore").innerHTML = playerScore;
        document.getElementById("computerScore").innerHTML = computerScore;
        document.getElementById("roundResult").innerHTML = "Round Result: ";
        document.getElementById("playerSelectionImage").src = "css/images/Rock Paper Scissors.png";
        document.getElementById("computerSelectionImage").src = "css/images/Rock Paper Scissors.png";
    }

    return;
}

document.getElementById('rock').onclick = function() {
    var playerSelection = "rock";
    game(playerSelection);
}

document.getElementById('paper').onclick = function() {
    var playerSelection = "paper";
    game(playerSelection);
}

document.getElementById('scissors').onclick = function() {
    var playerSelection = "scissors";
    game(playerSelection);
}