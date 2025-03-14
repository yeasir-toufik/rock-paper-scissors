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

let comChoice= getComputerChoice();
console.log(comChoice);



