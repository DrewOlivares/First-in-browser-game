let character = new Image();
character.className = 'character';
character.src = '../Pics/character.png';

let runner = new Image();
runner.className = 'runner';
runner.src = '../Pics/running-enemy.png';

let flyer = new Image();
flyer.className = 'flyer';
flyer.src ='../Pics/flying-enemy.png';

let building = new Image();
building.className = 'building';
building.src = '../Pics/building.png';

function hideMenu() {
    document.getElementById('start-screen').firstChild.remove()
    document.getElementById('start-screen').lastChild.remove()
}


function startGame() {
    hideMenu()
    hideMenu()
    document.getElementById('container').appendChild(character)
    document.getElementById('container').appendChild(runner)
    document.getElementById('container').appendChild(flyer)
    document.getElementById('container').appendChild(building)
}



var checkDead = setInterval(function(){
let runnerLeft = parseInt(window.getComputedStyle(runner).getPropertyValue("left"));
let flyerLeft = parseInt(window.getComputedStyle(flyer).getPropertyValue("left"));
    if (flyerLeft<20 && flyerLeft>-20 && runnerLeft<20 && runnerLeft>-20){
    gameOver()
    }

})
setInterval(checkDead, 10)

function gameOver() {
    document.getElementById('container').remove(character)
    document.getElementById('container').remove(runner)
    document.getElementById('container').remove(flyer)
    document.getElementById('container').remove(building)
}

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
}


character.style.left = x + 'px'
},1)

document.addEventListener('keydown', function(e){
    if(e.repeat) return;

    if(e.key === 'd'){
        direction = 'east'
    } 
    if(e.key === 'a'){
        direction = 'west'
    }
})

document.addEventListener('keyup', function(e){
    direction = null
})

//Attack
let ninjaStar= new Image()
ninjaStar.src = '../Pics/ninja-star.png'

function ninjaStar(){

}