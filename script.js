const rock_btn          = document.getElementById("rock");
const paper_btn         = document.getElementById("paper");
const scissors_btn      = document.getElementById("scissors");
const questionBox1      = document.getElementById("user-question-mark");
const questionBox2      = document.getElementById("computer-question-mark");
const userEmoji         = document.getElementById("user-emoji");
const computerEmoji     = document.getElementById("computer-emoji");
const winnerExp         = document.getElementById("winner-exp");
const winningCon        = document.getElementById("winning-condition");
const playerCountText   = document.getElementById("player-count");
const computerCountText = document.getElementById("computer-count"); 
let userCode;
let computerCode;
let playerCount = 0;
let computerCount = 0;

rock_btn.addEventListener("click",
()=>
{
    questionBox1.style.display  = "none"; 
    userEmoji.style.display     = "block";  
    userEmoji.innerText         = "✊";
    questionBox2.style.display  = "none";
    computerEmoji.style.display ="block";
    userCode                    = 0;
    computerCode                = random();
    if(computerCode==0)
    {
        computerEmoji.innerText     = "✊";
        winnerExp.innerText         = "It's a tie!";
        winningCon.innerText        = "Rock ties with Rock";
        playerCountText.innerText   = playerCount;
        computerCountText.innerText = computerCount;
    }
    else if(computerCode==1)
    {
        computerEmoji.innerText     = "✋";
        winnerExp.innerText         = "You lose!";
        winningCon.innerText         = "Rock is beaten by Paper";
        computerCount++;
        playerCountText.innerText   = playerCount;
        computerCountText.innerText = computerCount;
    }
    else
    {
        computerEmoji.innerText     = "✌";
        winnerExp.innerText         = "You win!";
        winningCon.innerText         = "Rock beats scissors";
        playerCount++;
        playerCountText.innerText   = playerCount;
        computerCountText.innerText = computerCount;
    }
}
)

paper_btn.addEventListener("click",
()=>
{
    questionBox1.style.display  = "none"; 
    userEmoji.style.display     = "block";  
    userEmoji.innerText         = "✋";
    questionBox2.style.display  = "none";
    computerEmoji.style.display ="block";
    userCode                    = 1;
    computerCode                = random();
    if(computerCode==0)
    {
        computerEmoji.innerText     = "✊";
        winnerExp.innerText         = "You win!";
        winningCon.innerText        = "Paper beats Rock";
        playerCount++;
        playerCountText.innerText   = playerCount;
        computerCountText.innerText = computerCount;
    }
    else if(computerCode==1)
    {
        computerEmoji.innerText     = "✋";
        winnerExp.innerText         = "It's a tie!";
        winningCon.innerText         = "Paper ties with Paper";
        playerCountText.innerText   = playerCount;
        computerCountText.innerText = computerCount;
    }
    else
    {
        computerEmoji.innerText     = "✌";
        winnerExp.innerText         = "You lose!";
        winningCon.innerText         = "Paper is beaten by scissors";
        computerCount++;
        playerCountText.innerText   = playerCount;
        computerCountText.innerText = computerCount;
    }
}
)

scissors_btn.addEventListener("click",
()=>
{
    questionBox1.style.display  = "none"; 
    userEmoji.style.display     = "block";  
    userEmoji.innerText         = "✌";
    questionBox2.style.display  = "none";
    computerEmoji.style.display ="block";
    userCode                    = 2
    computerCode                = random();
    if(computerCode==0)
    {
        computerEmoji.innerText     = "✊";
        winnerExp.innerText         = "You lose!";
        winningCon.innerText        = "Scissors is beaten by Rock";
        computerCount++;
        playerCountText.innerText   = playerCount;
        computerCountText.innerText = computerCount;
    }
    else if(computerCode==1)
    {
        computerEmoji.innerText     = "✋";
        winnerExp.innerText         = "You win!";
        winningCon.innerText         = "Scissors beats Paper";
        playerCount++;
        playerCountText.innerText   = playerCount;
        computerCountText.innerText = computerCount;
    }
    else
    {
        computerEmoji.innerText     = "✌";
        winnerExp.innerText         = "It's a tie!";
        winningCon.innerText         = "Scissors ties with Scissors";
        playerCountText.innerText   = playerCount;
        computerCountText.innerText = computerCount;
    }
}
)

function random() {
    let x=Math.floor(Math.random()*3);
    return x;
}