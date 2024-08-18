

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const gencompChoice = () => {
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random()*3)  // to generate a random number from 0 to 2
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "Draw Play again..!";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin)
    {
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"; // if u win bgcolor will be green
    }
    else
    {
        msg.innerText = `You loose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // computer choice
    const compChoice = gencompChoice(); // random number stored in comChoice variable

    if(userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            // comChoice may be either scissor or paper but not rock
            userWin = compChoice === "paper" ? false : true ;
        }
        else if(userChoice === "paper") {
            //comChoice may be either scissor or paper but not rock
            userWin = compChoice === "scissor" ? false : true ;
        }
        else if(userChoice==="scissor"){
            // userChoice = scissors
            // comChoice = paper or rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)

    })
})