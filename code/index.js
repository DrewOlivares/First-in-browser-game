let character = new Image();
let runner = new Image();
let flyer = new Image();
let building = new Image();


character.className = 'character';
runner.className = 'runner';
flyer.className = 'flyer';
building.className = 'building';

character.src = '../Pics/character.png';
runner.src = '../Pics/running-enemy.png';
flyer.src ='../Pics/flying-enemy.png';
building.src = '../Pics/building.png';

function hideMenu(){
    document.getElementById('start-screen').remove()
}

function startGame() {
    hideMenu()
    document.getElementById('container').appendChild(character)
    document.getElementById('container').appendChild(runner)
    document.getElementById('container').appendChild(flyer)
    document.getElementById('container').appendChild(building)
}



// score counter
var myScore;

