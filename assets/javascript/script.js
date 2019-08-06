//initialize variables and values needed

let goalValue = Math.floor(Math.random() * (120 - 19 + 1) ) + 19;
let crystal1Value = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
let crystal2Value = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
let crystal3Value = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
let crystal4Value = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;


let liveScore = 0;
let wins = 0;
let losses = 0;

//this function runs once the user is ready to start the game

function startGame(){


    console.log("game started");
    console.log(goalValue);
    console.log(crystal1Value);
    console.log(crystal2Value);
    console.log(crystal3Value);
    console.log(crystal4Value);

        //display inital goal value to viewport

    document.getElementById("yourNumber").innerHTML = "<strong>"+ goalValue + "</strong>";

    //listen for click on each of the four crystals then update the accumulated value with the value of the most recent click then update scoreboard

    document.getElementById("crystal1").addEventListener("click", function () {
        //update livescore when crystal 1 is clicked
        liveScore = liveScore + crystal1Value;
        console.log("Crystal1 Clicked, Value: " + crystal1Value);
        
        updateScoreboard();
    });

    document.getElementById("crystal2").addEventListener("click", function () {
        //update livescore when crystal 2 is clicked
        liveScore = liveScore + crystal2Value;
        console.log("Crystal2 Clicked, Value: " + crystal2Value);
        updateScoreboard();

       
    });

    document.getElementById("crystal3").addEventListener("click", function () {
        //update livescore when crystal 3 is clicked
        liveScore = liveScore + crystal3Value;
        console.log("Crystal3 Clicked, Value: " + crystal3Value);
        updateScoreboard();

    });

    document.getElementById("crystal4").addEventListener("click", function () {
        //update livescore when crystal 4 is clicked
        liveScore = liveScore + crystal4Value;
        console.log("Crystal4 Clicked, Value: " + crystal4Value);
        updateScoreboard();
    });

}

//this function runs after each user click

function updateScoreboard() {
    console.log("Goal Value: " + goalValue);
    console.log("Live Score: " + liveScore);

    if (liveScore === goalValue) {
        wins++;
        console.log("Wins: " + wins);
        //reset random numbers to play again
        goalValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        crystal1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal4Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        liveScore = 0;

        //display new goal value to viewport
        document.getElementById("yourNumber").innerHTML = goalValue;

        //display updated wins & losses to viewport
        document.getElementById("scoreBoard").innerHTML = "<strong>Wins: "+ wins + "<br/>Losses: " + losses + "</strong>";

    }
    if (liveScore > goalValue) {
        losses++;
        console.log("Losses: " + losses);
        //reset random numbers to play again
        goalValue = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
        crystal1Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal2Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal3Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        crystal4Value = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        liveScore = 0;
        //display new goal value to viewport

        document.getElementById("yourNumber").innerHTML = goalValue;

        //display updated wins & losses to viewport
        document.getElementById("scoreBoard").innerHTML = "<strong>Wins: " + wins + "<br/>Losses: " + losses + "</strong>";
    }

    document.getElementById("liveScore").innerHTML = liveScore;
}


document.getElementById("allCrystals").addEventListener("click", startGame); //listen for initialization click to start the game