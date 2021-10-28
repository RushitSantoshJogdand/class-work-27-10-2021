var canvas;
var backgroundImage, car1_img, car2_img, track;
var bgImg;
var database, gameState, car1, car2;
var form, player;
var playerCount;
var cars = []
var allPlayers;
var rank = 0;
var score = 0;
var fuelImg, powerCoinImg, obstacleImg1, obstacleImg2;
var fuels, powerCoins, obstacles;
var positions;
var lifeImage, life;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  fuelImg = loadImage("./assets/fuel.png");
  powerCoinImg = loadImage("./assets/goldCoin.png");
  obstacleImg1 = loadImage("./assets/obstacle1.png");
  obstacleImg2 = loadImage("./assets/obstacle2.png");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImage);
  if(playerCount===2){
  game.update(1);
  }
  if(gameState===1){
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
