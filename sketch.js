var form,game,player;
var database;
var playerCount,gameState = 0;
var allPlayers;
var cars , car1 , car2 , car3 , car4;
var distance;

function setup(){
    createCanvas(displayWidth , displayHeight);
    database = firebase.database();
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount === 4){
        game.updateState(1);
    }
    if (gameState === 1){
        clear();
        game.play();
    }
    if (gameState === 2){
        game.end();
    }
}
