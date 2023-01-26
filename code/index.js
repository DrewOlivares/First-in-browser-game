//Creating character and enemys
const character = new Image();
character.className = 'character';
character.src = '../Pics/character.png';

const runner = new Image();
runner.className = 'runner';
runner.src = '../Pics/running-enemy.png';

const flyer = new Image();
flyer.className = 'flyer';
flyer.src ='../Pics/flying-enemy.png';

const building = new Image();
building.className = 'building';
building.src = '../Pics/building.png';

//Timer
var startingMinutes = 4;
let time = startingMinutes * 60;

const timer = document.getElementById('timer');

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer.innerHTML= `${minutes}: ${seconds}`;
    time--;

};


// Game Start

const startScreen= document.getElementById('start-screen');
let title = document.createElement('h1');
title.innerText= 'Ninja Defense';
startScreen.appendChild(title);

let gameStart = document.createElement('button');
gameStart.innerText= 'Start Game';
gameStart.addEventListener('click',startGame)
startScreen.appendChild(gameStart)

const container = document.getElementById('container');

function hideMenu() {
    startScreen.remove();
};

function startGame() {
    hideMenu()
    setInterval(updateCountdown, 1000);
    container.appendChild(character);
    container.appendChild(runner);
    container.appendChild(flyer);
    container.appendChild(building);
};

// Game Over

var checkDead = setInterval(function(){
let runnerLeft = parseInt(window.getComputedStyle(runner).getPropertyValue("left"));
let flyerLeft = parseInt(window.getComputedStyle(flyer).getPropertyValue("left"));
    if (flyerLeft<20 && flyerLeft>-20 && runnerLeft<20 && runnerLeft>-20){
    gameOver()
    };

});
setInterval(checkDead, 10);

let currentTime= 0

function gameOver() {
    character.remove()
    runner.remove()
    flyer.remove()
    building.remove()
    let secondsLived= time;
    let currentTime= Math.floor(secondsLived/60);
    timer.remove()
    
const loseScreen= document.getElementById('lose');
let loseTitle = document.createElement('h1');
loseTitle.innerText= 'Game Over';
loseScreen.appendChild(loseTitle);

let survivalTime= document.createElement('h2');
survivalTime.innerText= 'You survived for '+ currentTime + ' minutes';
loseScreen.appendChild(survivalTime)

let tryAgain = document.createElement('button');
tryAgain.innerText= 'Try Again';
tryAgain.addEventListener('click',goAgain)
loseScreen.appendChild(tryAgain)

function goAgain(){
    loseScreen.remove()
    startGame()
}
};

// Character Movement
let direction = null;
let x = 150;

setInterval(function(){
if(direction === 'west'){
    x = x - 1
    character.src = '../Pics/character1.png'
}
if (direction === 'east'){
    x = x + 1
    character.src = '../Pics/character.png'
};


character.style.left = x + 'px'
},1);

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'd'){
        direction = 'east'
    } 
    if(e.key === 'a'){
        direction = 'west'
    }
});

document.addEventListener('keyup', function(e){
    direction = null
});

//Attack
// let ninjaStar= new Image()
// ninjaStar.src = '../Pics/ninja-star.png'

// function ninjaStar(){

// }