let rock = document.querySelector('.Rock');
let paper = document.querySelector('.Paper');
let scissors = document.querySelector('.Scissors');

let src = JSON.parse(localStorage.getItem('score'));
document.querySelector('.scoreBoard').innerHTML = `Wins: ${Number(src.Wins)}, Losses: ${Number(src.Losses)}, Ties: ${Number(src.Ties)}`;
let scores = {
    Wins : Number(src.Wins),
    Losses : Number(src.Losses),
    Ties : Number(src.Ties)
}
let userMove;

function funrock(){
    userMove = 'Rock';
    logic();
}
function funpaper(){
    userMove = 'Paper';
    logic();
}
function funscissors(){
    userMove = 'Scissors';
    logic();
}

let computerMove, result;
function logic(){
    let randnum = Math.random();
    Wins = Number(src.Wins);
    Losses = Number(src.Losses);
    Ties = Number(src.Ties);
    if(randnum >= 0 && randnum < 1/3)
        computerMove = 'Rock';
    else if(randnum >= 1/3 && randnum < 2/3)
        computerMove = 'Paper';
    else if(randnum >= 2/3 && randnum < 1)
        computerMove = 'Scissors'

    if(userMove === 'Rock' && computerMove === 'Rock'){scores.Ties += 1; result = 'Tie'; updateScore();} 
    else if(userMove === 'Rock' && computerMove === 'Paper') {scores.Losses += 1; result = 'You Loss';updateScore();}
    else if(userMove === 'Rock' && computerMove === 'Scissors') {scores.Wins += 1; result = 'You Win'; updateScore();}
    else if(userMove === 'Paper' && computerMove === 'Rock') {scores.Wins += 1;result = 'You Win';  updateScore();}
    else if(userMove === 'Paper' && computerMove === 'Paper') {scores.Ties += 1; result = 'Tie'; updateScore();}
    else if(userMove === 'Paper' && computerMove === 'Scissors') {scores.Losses += 1; result = 'You Loss'; updateScore();}
    else if(userMove === 'Scissors' && computerMove === 'Rock') {scores.Losses += 1;  result = 'You Loss'; updateScore();}
    else if(userMove === 'Scissors' && computerMove === 'Paper') {scores.Wins += 1;  result = 'You Win'; updateScore();}
    else if(userMove === 'Scissors' && computerMove === 'Scissors') {scores.Ties += 1; result = 'Tie'; updateScore();}

    localStorage.setItem('score', JSON.stringify(scores));
}

function resetScore(){
    scores.Wins = 0;
    scores.Losses = 0;
    scores.Ties = 0;
    console.log(src);
    let scoreBoard = document.querySelector('.scoreBoard');
    scoreBoard.innerHTML = `Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties : ${scores.Ties}`;
    localStorage.setItem('score', JSON.stringify(scores));
    let res = document.querySelector('.result');
    res.innerHTML = '';
    let moves = document.querySelector('.moves');
    moves.innerHTML = ``;
}

function updateScore(){
    let scoreBoard = document.querySelector('.scoreBoard');
    scoreBoard.innerHTML = `Wins: ${scores.Wins}, Losses: ${scores.Losses}, Ties : ${scores.Ties}`;
    localStorage.setItem('score', JSON.stringify(src));
    let res = document.querySelector('.result');
    res.innerHTML = result;
    let moves = document.querySelector('.moves');
    moves.innerHTML = `You ${userMove} - ${computerMove} Computer`;
}