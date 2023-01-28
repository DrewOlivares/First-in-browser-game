
//Creating character and enemys
const player = new Image();
player.id = 'player';
player.src = '../Pics/character.png';

const runner = new Image();
runner.id = 'runner';
runner.src = '../Pics/running-enemy.png';

const flyer = new Image();
flyer.id = 'flyer';
flyer.src ='../Pics/flying-enemy.png';

const building = new Image();
building.id = 'building';
building.src = '../Pics/building.png';

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

        
    function goAgain(){
    document.location.reload()
    }

    if(minutes == 0 && seconds == 0){
        player.remove()
        runner.remove()
        flyer.remove()
        timer.remove()

        const winScreen= document.getElementById('win');
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
    setInterval(updateCountdown, 1000);
    container.appendChild(player);
    container.appendChild(runner);
    container.appendChild(flyer);
    // container.appendChild(building);
};

// Game Over

var checkDead = setInterval(function(){
    let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    let playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue("bottom"));
    let runnerLeft = parseInt(window.getComputedStyle(runner).getPropertyValue("left"));
    let runnerBottom = parseInt(window.getComputedStyle(runner).getPropertyValue("bottom"));
    let flyerLeft = parseInt(window.getComputedStyle(flyer).getPropertyValue("left"));
    let flyerBottom = parseInt(window.getComputedStyle(flyer).getPropertyValue("bottom"));

    if (playerLeft === runnerLeft && playerBottom === runnerBottom || playerLeft === flyerLeft && playerBottom === flyerBottom){
    gameOver()
    };

    if (playerLeft >= '900px'){
        player.style.left= '0px'
    }
});
setInterval(checkDead,1);

let currentTime= 1;

function gameOver() {
    player.remove()
    runner.remove()
    flyer.remove()
    // building.remove()
    let secondsLived= time;
    let currentTime= Math.floor(secondsLived/60);
    timer.remove()
    
    const loseScreen= document.getElementById('lose');
    let loseTitle = document.createElement('h1');
    loseTitle.innerText= 'Game Over';
    loseScreen.appendChild(loseTitle);

    let survivalTime= document.createElement('h2');
    survivalTime.innerText= 'You had '+ currentTime + ' minutes left to survive';
    loseScreen.appendChild(survivalTime)

    let tryAgain = document.createElement('button');
    tryAgain.innerText= 'Try Again';
    tryAgain.addEventListener('click',goAgain)
loseScreen.appendChild(tryAgain)

};

// Character Movement
let direction = null;
let x = 150;

setInterval(function(){
    if(direction === 'west'){
    x = x - 1
    player.src = '../Pics/character1.png'
    }
    if (direction === 'east'){
    x = x + 1
    player.src = '../Pics/character.png'
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


//Attack
// const ninjaStar = new Image();
// ninjaStar.src = '../Pics/ninja-star.png';
// ninjaStar.className = 'projectile'

// let shoot = false;

// var checkPosition = setInterval(function(){
//     let playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
//     return playerLeft
// })
// setInterval(checkPosition, 10);

// setInterval(function(){
//     if(shoot === true){
//         attack();
//     }
// },500);

// document.addEventListener('keydown', function(e){
//     if(e.code === 'Space'){
//        shoot = true;
//     }
// });

// document.addEventListener('keyup', function(e){
//     if(e.code === 'Space'){
//        shoot = false;
//     }
// });

// function attack(){
//     ninjaStar.style.left = checkPosition+'px'
//     container.appendChild(ninjaStar)