
//Creating character and enemys
const player = new Image();
player.id = 'player';
player.src = 'Pics/character.png';

const runner = new Image();
runner.id = 'runner';
runner.src = 'Pics/running-enemy.png';

const flyer = new Image();
flyer.id = 'flyer';
flyer.src ='Pics/flying-enemy.png';

//Restart 

function goAgain(){
    document.location.reload()
}

//Timer
var startingMinutes = 1;
let time = startingMinutes * 60;

const timer = document.getElementById('timer');

function updateCountdown(){
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    timer.innerHTML= `${minutes}: ${seconds}`;
    time--;
    
    if(minutes == 0 && seconds == 0){
        player.remove()
        runner.remove()
        flyer.remove()
        timer.remove()

        const winScreen= document.getElementById('condition');
        let winTitle = document.createElement('h1');
        winTitle.innerText= 'You Won!';
        winScreen.appendChild(winTitle);

        let congrats= document.createElement('h2');
        congrats.innerText= 'Congratulations! You are the ultimate ninja!';
        winScreen.appendChild(congrats)

        let tryAgain = document.createElement('button');
        tryAgain.innerText= 'Try Again';
        tryAgain.addEventListener('click',goAgain)
        winScreen.appendChild(tryAgain)
    }
};


// Game Start

const startScreen= document.getElementById('start-screen');
let title = document.createElement('h1');
title.innerText= 'Ninja Dodge';
startScreen.appendChild(title);

let challenge= document.createElement('h2');
challenge.innerText= 'Can you survive a minute?';
startScreen.appendChild(challenge)

let gameStart = document.createElement('button');
gameStart.innerText= 'Start Game';
gameStart.addEventListener('click',startGame)
startScreen.appendChild(gameStart)

const container = document.getElementById('container');

function hideMenu() {
    startScreen.remove();
};


function startGame() {
    hideMenu();
    setInterval(updateCountdown, 1000)
    container.appendChild(player);
    container.appendChild(runner);
    container.appendChild(flyer);
};

// Game Over
// collision

var checkPosition = setInterval(function(){
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    let runnerLeft = parseInt(window.getComputedStyle(runner).getPropertyValue("left"));
    let runnerBottom = parseInt(window.getComputedStyle(runner).getPropertyValue("bottom"));
    let flyerLeft = parseInt(window.getComputedStyle(flyer).getPropertyValue("left"));
    let flyerBottom = parseInt(window.getComputedStyle(flyer).getPropertyValue("bottom"));

    if (playerLeft === runnerLeft && playerBottom === runnerBottom || playerLeft === flyerLeft && playerBottom === flyerBottom){
    gameOver()
    };
});
setInterval(checkPosition,1);

function gameOver() {
    player.remove()
    runner.remove()
    flyer.remove()
    timer.remove()

    let secondsLeft= time;
    
    const loseScreen= document.getElementById('condition');
    let loseTitle = document.createElement('h1');
    loseTitle.innerText= 'Game Over';
    loseScreen.appendChild(loseTitle);

    let survivalTime= document.createElement('h2');
    survivalTime.innerText= 'You had '+ secondsLeft + ' seconds left to survive';
    loseScreen.appendChild(survivalTime)

    let tryAgain = document.createElement('button');
    tryAgain.innerText= 'Try Again';
    tryAgain.addEventListener('click',goAgain)
    loseScreen.appendChild(tryAgain)
};


// Character Movement
let direction = null;
let x = 0;

setInterval(function(){
    if(direction === 'west' && x >= 1){
    x = x - 1
    player.src = 'Pics/character1.png'
    }
    if (direction === 'east' && x <= 917){
    x = x + 1
    player.src = 'Pics/character.png'
    };
    player.style.left = x + 'px'
},1);

document.addEventListener('keydown', function(e) {
    if(e.repeat) return;

    if(e.key === 'd'){
        direction = 'east'
    } 
    if(e.key === 'a'){
        direction = 'west'
    }
    if(e.key === 'w'){
        jump()
    }
});

document.addEventListener('keyup', function(e) {
    direction = null;
});

function jump(){
    if(player.classList != 'jump'){
        player.classList.add('jump');
    }
    setTimeout(function(){
        player.classList.remove('jump')
    },1300)
}
