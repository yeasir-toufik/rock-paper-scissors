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

// let comChoice= getComputerChoice();
// console.log(comChoice);



function getHumanChoice(){
    let choice= prompt("Input your choice");
    choice=choice.toUpperCase();
    return choice; 
}

// let userChoice= getHumanChoice();

// userChoice=userChoice.toUpperCase();

// console.log(userChoice);





let humanScore=0; 
let computerScore=0;


function playGame(){

     

    const humanSelection = getHumanChoice();
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
     return score;




}

const game1= playGame();
console.log(game1);
const game2= playGame();
console.log(game2);
const game3= playGame();
console.log(game3);
const game4= playGame();
console.log(game4);
const game5= playGame();
console.log(game5);


if ( humanScore> computerScore){

    console.log("human win");

}

else if (computerScore> humanScore){
    console.log("computer win");
}

else{
    console.log("Draw");
}





