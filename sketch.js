var form,player, game;
var database,playerCount;
var gameState=0
var distance=0;
var allPlayers;

var car1,car2,car3,car4, cars;
var car1Img,car2Img,car3Img,car4Img,ground,track;
var carsAtEnd

function preload(){
car1Img=loadImage("images/car1.png");
car2Img=loadImage("images/car2.png");
car3Img=loadImage("images/car3.png");
car4Img=loadImage("images/car4.png");
ground=loadImage("images/ground.png");
track=loadImage("images/track.jpg")

}
function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    
    game=new Game();
    game.getState();

    game.start();
}

function draw(){
    background("white");
  if(playerCount===4){
      game.update(1)
  } 
  if(gameState===1){
      clear();
      game.play();
  } 
  if(gameState===2){
      game.end();
  }
  if(carsAtEnd===4){
      clear();
      game.showLeaderboard();
  }
}


