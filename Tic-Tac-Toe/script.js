
// Accessing buttons 

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true ; // player X , player O
let count = 0;

// winning patterns

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => { 
        if(turnO) {
            box.innerText = "O";
            box.style.color="red";
            //box.style.backgroundColor="white";
            turnO = false;
        } 
        else {
            box.innerText = "X";
            box.style.color="green";
            //box.style.backgroundColor="black";
            turnO = true;
        }
        box.disabled = true; // button will be disabled --> u cannot  click for 2nd time
        count++;
        let isWinner = checkWinner();
        
        if(count === 9 && !isWinner) {
            gameDraw();
        }
    });
});


const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide"); // removes/displays the hidden content (winner msg and newGame button)
    disableBoxes();

};


const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if(pos1Val!="" && pos2Val!="" && pos3Val!="") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) { // winning condition ..
                showWinner(pos1Val);

            }
        }      
    }
};

const gameDraw = () => {
    msg.innerText = `Game was Draw.`
    msgContainer.classList.remove('hide');
    disableBoxes();

};

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add('hide');
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;  // boxes will be disabled
    }
};
    
const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";     // boxes empty --> to start new game 
    }
};

    
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



