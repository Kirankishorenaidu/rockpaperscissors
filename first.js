let myscore=0;
let compscore=0;
const userscorepara=document.querySelector("#myscore");
const compscorepara=document.querySelector("#cscore");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const generateComputerChoiceRandomly=()=>{
    const options=["rock","paper","scissors"];//storing in an array beacuse we can acces them uniquely  throught their indices
    let comprandomindex=Math.floor(Math.random()*3);
    return options[comprandomindex];
}
const showWinner=(userWin,userchoiceId,computerchoiceId)=>{
    if(userWin){
        myscore++;
        userscorepara.innerText=myscore;
        // console.log("User Wins");
        msg.innerText=`You win! Your ${userchoiceId} beats ${computerchoiceId}`;
        msg.style.backgroundColor="green";
    }else{
        compscore++;
        compscorepara.innerText=compscore;
        // console.log("Computer Wins");
        msg.innerText=`You Lose. ${computerchoiceId} beats your ${userchoiceId}`;
        msg.style.backgroundColor="red";
    }
};
drawgame=()=>{
    // console.log("Game is Drawn.");
    msg.innerText="GAME DRAWN .Play Again";
    msg.style.backgroundColor="#081b31";
};
const playgame=(userchoiceId)=>{
    // console.log("user's choice=",userchoiceId);
    const computerchoiceId=generateComputerChoiceRandomly();
    // console.log("computer's choice=",computerchoiceId);
    if(userchoiceId===computerchoiceId){
        drawgame();
    }else{
        let userWin=true;
        if(userchoiceId==="rock"){
            userWin=computerchoiceId==="paper"?false:true;
        }else if(userchoiceId==="paper"){
            userWin=computerchoiceId==="scissors"?false:true;
        }else{
            userWin=computerchoiceId==="rock"?false:true;
        }
        showWinner(userWin,userchoiceId,computerchoiceId);
    }
    
};

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener(("click"),()=>{
        const userchoiceId=choice.getAttribute("id");
        // console.log("choice was clicked",userchoiceId);
        playgame(userchoiceId);
    });

});