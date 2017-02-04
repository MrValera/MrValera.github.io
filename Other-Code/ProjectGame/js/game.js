

window.onload = init;

var map;
var ctxMap;

var drawBtn;
var clearBtn;

var pl;
var ctxPlayer;

var enemyCv;
var ctxEnemy;

var stats;
var ctxStats;

var gameWidth = 800;
var gameHeight = 500;

var background = new Image();
background.src = 'img/bg-game2.jpg';

var tiles = new Image();
tiles.src = 'img/character.png';

var player;
var enemies = [];

var isPlaying;

var health;


// для создания врагов

var spawnInterval;
var spawnTime = 8000;
var spawnAmount = 4;

// Кроссбраузерность

var requestAnimFrame = window.requestAnimationFrame ||
                       window.webkitRequestAnimationFrame ||
                       window.mozRequestAnimationFrame ||
                       window.oRequestAnimationFrame ||
                       window.msRequestAnimationFrame;

// Иницилиазатор

function init () {
  map = document.getElementById("map");
  ctxMap = map.getContext("2d");

  pl = document.getElementById('player');
  ctxPlayer = pl.getContext('2d');

  enemyCv = document.getElementById('enemy');
  ctxEnemy = enemyCv.getContext('2d');

  stats = document.getElementById('stats');
  ctxStats = stats.getContext('2d');

  map.width = gameWidth;
  map.height = gameHeight;
  pl.width = gameWidth;
  pl.height = gameHeight;
  enemyCv.width = gameWidth;
  enemyCv.height = gameHeight;
  stats.width = gameWidth;
  stats.height = gameHeight;

  ctxStats.fillStyle = '#fff';
  ctxStats.font = 'bold 15pt Ubuntu';

  drawBtn = document.getElementById("drawBtn");
  clearBtn = document.getElementById('clearBtn');

  drawBtn.addEventListener("click", drawRect, false);
  clearBtn.addEventListener("click", clearRect, false);

  player = new Player();

  resetHealth();
  drawBg();
  startLoop();

  document.addEventListener('keydown', checkKeyDown, false);
  document.addEventListener('keyup', checkKeyUp, false);

}

// Обновление + Вызов команд
function draw() {
  player.draw();


  clearCtxEnemy();
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].draw();
  }
}

function update() {
  player.update();
  updateStats();

  for (var i = 0; i < enemies.length; i++) {
    enemies[i].update();
  }
}

function resetHealth() {
  health = 100;
}

// Характеристики игрока + Управление
function Player() {
  this.srcX = 0;
  this.srcY = 0;
  this.drawX = 10;
  this.drawY = 410;
  this.width = 33;
  this.height = 48;
  this.speed = 5;

  // for keyboard
  this.isUp = false;
  this.isDown = false;
  this.isRight = false;
  this.isLeft = false;

}

function clearCtxPlayer() {
  ctxPlayer.clearRect(0, 0, gameWidth, gameHeight);
}

Player.prototype.draw = function () {
  clearCtxPlayer();
  ctxPlayer.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
}

// Управление Игрока
Player.prototype.update = function () {
  this.chooseDir();

  if(health < 0) resetHealth();

  if(this.drawX < 0 ) this.drawX = 0;
  if(this.drawX > gameWidth - this.width) this.drawX = gameWidth - this.width;
  if(this.drawY < 0 ) this.drawY = 0;
  if(this.drawY > gameHeight - this.height) this.drawY = gameHeight - this.height ;

  for (var i = 0; i < enemies.length; i++) {
    if(this.drawX >= enemies[i].drawX &&
       this.drawY >= enemies[i].drawY &&
       this.drawX <= enemies[i].drawX + enemies[i].width &&
       this.drawY <= enemies[i].drawY + enemies[i].height) {

         health--;
       }
  }

}

Player.prototype.chooseDir = function () {
  if(this.isUp)
     this.drawY -= this.speed;
  if(this.isDown)
     this.drawY += this.speed;
  if(this.isRight)
     this.drawX += this.speed;
  if(this.isLeft)
     this.drawX -= this.speed;
}

function checkKeyDown(e) {
  var keyID = e.keyCode || e.which;
  var keyChar = String.fromCharCode(keyID);

  if(keyChar == "W") {
    player.isUp = true;
    e.preventDefault();
  }
  if(keyChar == "S") {
    player.isDown = true;
    e.preventDefault();
  }
  if(keyChar == "D") {
    player.isRight = true;
    e.preventDefault();
  }
  if(keyChar == "A") {
    player.isLeft = true;
    e.preventDefault();
  }
}

function checkKeyUp(e) {
  var keyID = e.keyCode || e.which;
  var keyChar = String.fromCharCode(keyID);

  if(keyChar == "W") {
    player.isUp = false;
    e.preventDefault();
  }
  if(keyChar == "S") {
    player.isDown = false;
    e.preventDefault();
  }
  if(keyChar == "D") {
    player.isRight = false;
    e.preventDefault();
  }
  if(keyChar == "A") {
    player.isLeft = false;
    e.preventDefault();
  }
}

// Старт/конец игры
function loop() {
  if (isPlaying) {
    draw();
    update();
    requestAnimFrame(loop);
  }
}

function startLoop() {
  isPlaying = true;
  loop();
  startCreatinEnemies();
}

function stopLoop() {
  isPlaying = false;
}

// Фон + удаление иконки игрока во время ходьбы

function drawRect() {
  ctxMap.fillStyle = "#3D3D3D";
  ctxMap.fillRect(10, 10, 100, 100);
}

function clearRect() {
  ctxMap.clearRect(0, 0, 800, 500);
}

function drawBg() {
  ctxMap.drawImage(background, 0, 0, 800, 500, 0, 0, gameWidth, gameHeight);
}

function updateStats() {
  ctxStats.clearRect(0, 0, gameWidth, gameHeight);
  ctxStats.fillText('Health: ' + health, 10, 20);
}

// Противник + Управление
function Enemy() {
  this.srcX = 0;
  this.srcY = 50;
  this.drawX = Math.floor(Math.random() * gameWidth ) + gameWidth;
  this.drawY = Math.floor(Math.random() * gameHeight);
  this.width = 33;
  this.height = 48;

  this.speed = 5;
}

Enemy.prototype.update = function () {
  this.drawX -= 4;

  if(this.drawX + this.width < 0) {
    this.destroy();
  }
}

Enemy.prototype.destroy = function () {
  enemies.splice( enemies.indexOf(this), 1);
};

function spawnEnemy(count) {

  for( var i = 0; i < count; i++) {
    enemies[i] = new Enemy();
  }

}

function startCreatinEnemies() {

  stopCreatingEnemies();
  spawnInterval = setInterval(function() {
    spawnEnemy(spawnAmount)
  }, spawnTime);


}

function stopCreatingEnemies() {
  clearInterval(spawnInterval);
}

Enemy.prototype.draw = function () {
  ctxEnemy.drawImage(tiles, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);
}

function clearCtxEnemy() {
  ctxEnemy.clearRect(0, 0, gameWidth, gameHeight);
}
