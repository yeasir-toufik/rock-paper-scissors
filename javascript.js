console.log("hello");

function getComputerChoice(){

     let randomNumber= Math.floor(Math.random() * 3); // expected result 0 or 1 or 2
     let comChoice= 0;

     if(randomNumber === 0){
         comChoice= "rock";

     }
     else if (randomNumber===1){
         comChoice= "paper";

     }
     else {
        comChoice="scissors";
     }

    return comChoice;

}





// function getHumanChoice(){
//     let choice= prompt("Input your choice");
//     choice=choice.toUpperCase();
//     return choice; 
// }







let humanScore=0; 
let computerScore=0;


function playGame(playerClick){

     
    let humanSelection=playerClick;
    humanSelection=humanSelection.toUpperCase();
    //const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();



    const score= playRound(humanSelection, computerSelection);

    


    function playRound(humanChoice,computerChoice){






        if((humanChoice==="ROCK" && computerChoice==="rock")||(humanChoice==="PAPER" && computerChoice==="paper")||(humanChoice==="SCISSORS" && computerChoice==="scissors")){
            console.log("Match Draw.");
            
    
        }
    
        else if((humanChoice==="ROCK" && computerChoice==="scissors")||(humanChoice==="PAPER" && computerChoice==="rock")||(humanChoice==="SCISSORS" && computerChoice==="paper")){
    
            console.log(`You Win! ${humanChoice} beats ${computerChoice}.`)
            humanScore=humanScore+1;
            return humanScore;
        }
    
        else if((humanChoice==="ROCK" && computerChoice==="paper")||(humanChoice==="PAPER" && computerChoice==="scissors")||(humanChoice==="SCISSORS" && computerChoice==="rock")){
    
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
            computerScore=computerScore+1;
            return computerScore;
        }
    
        else {
            console.log("Error!");
    
        }
    }
    let currentResult = document.querySelector("#currentResult");
    let para=document.createElement("p");
    para.textContent=`Current Result is: Human score is ${humanScore} and computer score is ${computerScore}`;
    currentResult.appendChild(para);



   

  



     return score;




}


let btn = document.querySelector('#rock');

btn.addEventListener('click',(event) => {
    let game1=playGame("rock");
    if ((humanScore || computerScore) >= 5)
        {
        
        if ( humanScore> computerScore){
        
         
            let para1=document.createElement("h1");
            para1.textContent= "Match finish. Human wins!";
            currentResult.appendChild(para1);
        
        }
        
        else if (computerScore> humanScore){
        
            let para1=document.createElement("h1");
            para1.textContent= "Match finish. Computer wins!";
            currentResult.appendChild(para1);
        
        }
        
        else if (computerScore == humanScore) {
            
            let para1=document.createElement("h1");
            para1.textContent= "Match finish. Draw!";
            currentResult.appendChild(para1);
             
        }
        else {
        
        }
        
        }

});


let btn1 = document.querySelector('#paper');

btn1.addEventListener('click',(event) => {
   
    let game1=playGame("paper");
    if ((humanScore || computerScore) >= 5)
        {
        
        if ( humanScore> computerScore){
        
         
            let para1=document.createElement("h1");
            para1.textContent= "Match finish. Human wins!";
            currentResult.appendChild(para1);
        
        }
        
        else if (computerScore> humanScore){
        
            let para1=document.createElement("h1");
            para1.textContent= "Match finish. Computer wins!";
            currentResult.appendChild(para1);
        
        }
        
        else if (computerScore == humanScore) {
            
            let para1=document.createElement("h1");
            para1.textContent= "Match finish. Draw!";
            currentResult.appendChild(para1);
             
        }
        else {
        
        }
        
        }


});

let btn2 = document.querySelector('#scissors');

btn2.addEventListener('click',(event) => {
    
    let game1=playGame("scissors");
    if ((humanScore || computerScore) >= 5)
        {
        
        if ( humanScore> computerScore){
        
         
            let para1=document.createElement("h1");
            para1.textContent= "Match finish. Human wins!";
            currentResult.appendChild(para1);
        
        }
        
        else if (computerScore> humanScore){
        
            let para1=document.createElement("h1");
            para1.textContent= "Match finish. Computer wins!";
            currentResult.appendChild(para1);
        
        }
        
        else if (computerScore == humanScore) {
            
            let para1=document.createElement("h1");
            para1.textContent= "Match finish. Draw!";
            currentResult.appendChild(para1);
             
        }
        else {
        
        }
        
        }

    
});






// const game1= playGame();
// console.log(game1);
// const game2= playGame();
// console.log(game2);
// const game3= playGame();
// console.log(game3);
// const game4= playGame();
// console.log(game4);
// const game5= playGame();
// console.log(game5);




if (humanScore || computerScore >= 5)
{

if ( humanScore> computerScore){

 
    let para1=document.createElement("h1");
    para1.textContent= "Match finish. Human wins!";
    currentResult.appendChild(para1);

}

else if (computerScore> humanScore){

    let para1=document.createElement("h1");
    para1.textContent= "Match finish. Computer wins!";
    currentResult.appendChild(para1);

}

else if (computerScore == humanScore) {

    let para1=document.createElement("h1");
    para1.textContent= "Match finish. Draw!";
    currentResult.appendChild(para1);
     
}
else {

}

}