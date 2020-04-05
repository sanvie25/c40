var gameState = 0, playerCount=0,form,player,game;
var database,position;
var allplayers;
var car1,car2,car3,car4,cars;
 function preload(){
     car1img = loadImage("images/car1.png");
     car2img = loadImage("images/car2.png");
     car3img = loadImage("images/car3.png");
     car4img = loadImage("images/car4.png");
     groundimg = loadImage("images/ground.png");
     trackimg = loadImage("images/track.jpg");

     
 }

function setup(){
    database = firebase.database(); 
    createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
if(playerCount === 4){
    game.update(1);
}
if (gameState === 1){
    clear();
    game.play();
}
if (gameState === 2){
    game.end();
}
}