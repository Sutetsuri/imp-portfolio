

var c = document.getElementById('game-canvas');
c.setAttribute('width', '500');
c.setAttribute('height', '500');
var ctx = c.getContext('2d');

var score = 0;
var timeRemaining = 11;
var playing = false;
var rectData = {};
var rectSize = 50;


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createRectangles(rectSize) {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  var rectangleDimension = {width: rectSize, height: rectSize};
  var startingPosition = findRandomPosition(rectangleDimension.width, rectangleDimension.height);
  rectData = {
    x: startingPosition.x,
    y: startingPosition.y,
    width: rectSize,
    height: rectSize
  };
  ctx.fillRect(startingPosition.x, startingPosition.y, rectangleDimension.width, rectangleDimension.height);
  ctx.fillStyle = getRandomColor();
}

function startGame() {
  score = 0;
  timeRemaining = 11;
  playing = true;
  createRectangles(rectSize);
  var intervalID = setInterval(function ()
  {
    timeRemaining -= 1;
    updateInfo();

    if (timeRemaining === 0) {
      playing = false;
      gameOver();
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      clearInterval(intervalID);
    }

  }, 1000);
}

function findMousePosition(c, event) {
  var rect = c.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

function findRandomPosition(rectWidth, rectHeight) {
    return {
        x: Math.floor(Math.random() * (c.width - rectWidth)),
        y: Math.floor(Math.random() * (c.height - rectHeight))
    };
}

function clickedInRectangle(mousePos, rectData) {
  if (
    mousePos.x >= rectData.x &&
    mousePos.x <= rectData.x + rectData.width &&
    mousePos.y >= rectData.y &&
    mousePos.y <= rectData.y + rectData.height
  ) {
    return true;
  }
  return false;
}

c.addEventListener('click', function(evt) {
  if (!playing) {
      startGame();
  }
  else if (playing)
  {
    var mousePos = findMousePosition(c, evt);

    if (clickedInRectangle(mousePos, rectData))
    {
      score += 1;
      updateInfo();
      createRectangles(rectSize);
    }

  }
});

function updateInfo() {
  var gameInfo = document.getElementById('information-bar');
  gameInfo.innerHTML = "Score: " + score + " / " + "Remaining Time: " + timeRemaining;
  }

function gameOver() {
  var gameInfo = document.getElementById('information-bar');
  gameInfo.innerHTML = "GAME OVER!" + " / " + "SCORE: " + score;
}
