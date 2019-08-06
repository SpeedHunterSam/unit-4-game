//initialize variables and values needed


const goalValue = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
const crystal1Value = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
const crystal2Value = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
const crystal3Value = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
const crystal4Value = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;


let liveScore = 0;
let wins = 0;
let losses = 0;



function startGame(){


    alert("game started");
    console.log(goalValue);
    console.log(crystal1Value);
    console.log(crystal2Value);
    console.log(crystal3Value);
    console.log(crystal4Value);

//execute loop while liveScore is less than goalValue
   while(liveScore < goalValue){

        document.getElementById("crystal1").addEventListener("click", function(){
                //update livescore when crystal 1 is clicked
            liveScore = liveScore + crystal1Value;
        });
        document.getElementById("crystal2").addEventListener("click", function(){
                //update livescore when crystal 2 is clicked
            liveScore = liveScore + crystal2Value;
        });
        document.getElementById("crystal3").addEventListener("click", function(){
            //update livescore when crystal 3 is clicked
        liveScore = liveScore + crystal3Value;
        });
        document.getElementById("crystal4").addEventListener("click", function(){
            //update livescore when crystal 4 is clicked
        liveScore = liveScore + crystal4Value;
        });

        console.log(goalValue);
        console.log(liveScore);

    }

    if(liveScore === goalValue){
         wins++;
        console.log("Wins: " + wins);

    }else if(liveScore > goalValue){
        losses++;
        console.log("Losses: " + losses);


    }


}





document.getElementById("allCrystals").addEventListener("click", startGame); //listen for initialization click to start the game