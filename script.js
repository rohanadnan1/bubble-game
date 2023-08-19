
let timer = 60;
let score = 0;
let hitVal;

function makeBubble(){
 let bubbleMaker = "";

for(let i = 1; i < 201 ; i++){
    var rn = Math.floor(Math.random() * 10)
    bubbleMaker += `<div class = "bubble">${rn}</div>`
}

document.getElementById("panel-bottom").innerHTML = bubbleMaker;
}

function runTimer(){
    var timerInt = setInterval(function(){
        if (timer > 0){
            timer --;
            document.getElementById("timer-box").textContent = timer;;
        }
        else{
            clearInterval(timerInt)
            document.getElementById("panel-bottom").innerHTML = `<div class="center" >
            <h2 class "final-score"> Your final score is ${score}. </h2>
            <h1>Game Over!</h1>
            </div> `
        }
    },1000)
}

function hitNumber(){
    hitVal = Math.floor(Math.random() * 10);
    document.getElementById("hit-box").textContent = hitVal;
}

function increaseScore(){
    score += 10;
    document.getElementById("score-box").textContent = score;;
}

document.querySelector("#panel-bottom").addEventListener("click", function(details){
    let clickedNum = Number(details.target.textContent);
    if (clickedNum === hitVal){
        increaseScore();
        makeBubble();
        hitNumber();
    }
})

runTimer();

hitNumber();

makeBubble();


