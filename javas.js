let rock = document.querySelector('.Rock');
let paper = document.querySelector('.Paper');
let scissors = document.querySelector('.Scissors');
let Wins = 0, Losses = 0, Ties = 0;
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
    if(randnum >= 0 && randnum < 1/3)
        computerMove = 'Rock';
    else if(randnum >= 1/3 && randnum < 2/3)
        computerMove = 'Paper';
    else if(randnum >= 2/3 && randnum < 1)
        computerMove = 'Scissors'

    if(userMove === 'Rock' && computerMove === 'Rock'){Ties += 1; result = 'Tie'; updateScore();} 
    else if(userMove === 'Rock' && computerMove === 'Paper') {Losses += 1; result = 'You Loss';updateScore();}
    else if(userMove === 'Rock' && computerMove === 'Scissors') {Wins += 1; result = 'You Win'; updateScore();}
    else if(userMove === 'Paper' && computerMove === 'Rock') {Wins += 1;result = 'You Win';  updateScore();}
    else if(userMove === 'Paper' && computerMove === 'Paper') {Ties += 1; result = 'Tie'; updateScore();}
    else if(userMove === 'Paper' && computerMove === 'Scissors') {Losses += 1; result = 'You Loss'; updateScore();}
    else if(userMove === 'Scissors' && computerMove === 'Rock') {Losses += 1;  result = 'You Loss'; updateScore();}
    else if(userMove === 'Scissors' && computerMove === 'Paper') {Wins += 1;  result = 'You Win'; updateScore();}
    else if(userMove === 'Scissors' && computerMove === 'Scissors') {Ties += 1; result = 'Tie'; updateScore();}
}

function resetScore(){
    Wins = 0;
    Losses = 0;
    Ties = 0;
    let scoreBoard = document.querySelector('.scoreBoard');
    scoreBoard.innerHTML = `Wins: ${Wins}, Losses: ${Losses}, Ties : ${Ties}`;
    let res = document.querySelector('.result');
    res.innerHTML = '';
    let moves = document.querySelector('.moves');
    moves.innerHTML = ``;
}

function updateScore(){
    let scoreBoard = document.querySelector('.scoreBoard');
    scoreBoard.innerHTML = `Wins: ${Wins}, Losses: ${Losses}, Ties : ${Ties}`;
    let res = document.querySelector('.result');
    res.innerHTML = result;
    let moves = document.querySelector('.moves');
    moves.innerHTML = `You ${userMove} - ${computerMove} Computer`;
}