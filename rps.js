let score=JSON.parse(localStorage.getItem('score'));
if (score===null) {
    score={
        wins:0,
        losses:0,
        ties:0
    };
}
else{
    document.getElementById('wins').innerHTML=score.wins;
    document.getElementById('losses').innerHTML=score.losses;
    document.getElementById('ties').innerHTML=score.ties;
}

let computerMove='';
let humanMove='';
function cal(hmove){
    humanMove=hmove;
    temp=Math.random();
    if(temp<1/3)
        computerMove='✊';
    else if(temp<2/3)
        computerMove='🤚';
    else
        computerMove='✌️';
    document.getElementById('dline').style.display="block";
    document.getElementById('hmove').innerHTML=humanMove;
    document.getElementById('cmove').innerHTML=computerMove;
    if(humanMove===computerMove){
        document.getElementById('ties').innerHTML=++score.ties;
        document.getElementById('result').innerHTML='Tie.';
    }
    else if((humanMove==='✊'&&computerMove==='✌️')||(humanMove==='🤚'&&computerMove==='✊')||(humanMove==='✌️'&&computerMove==='🤚')){
        document.getElementById('wins').innerHTML=++score.wins;
        document.getElementById('result').innerHTML='You Won';
    }
    else{
        document.getElementById('losses').innerHTML=++score.losses;
        document.getElementById('result').innerHTML='You lost';
    }
    console.log(score)
    localStorage.setItem("score", JSON.stringify(score));
}
function reset(){
    localStorage.removeItem('score');
    score={
        wins:0,
        losses:0,
        ties:0
    };
    document.getElementById("wins").innerHTML=0;
    document.getElementById("losses").innerHTML=0;
    document.getElementById("ties").innerHTML=0;
    document.getElementById("dline").style.display="none";
    document.getElementById('result').innerHTML='';
}