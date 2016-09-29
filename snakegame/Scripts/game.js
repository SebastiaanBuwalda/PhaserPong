var trueDirection = "right";
var score = 0;
var addNew = false;
var recordSwipe = true;
var listenToSwipes = false;
var scoreText;
var playerHolder;
var Game =
{
  //"Awake" before start
  preload: function()
  {
    game.stage.backgroundColor = "#8e44ad";
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignVertically = true;
    this.scale.setScreenSize(true);
    score = 0;
    scoreText  = Game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#ffffff' });
  	game.load.image('star', 'Sprites/star.png');
    game.load.image('diamond', 'Sprites/diamond.png');
    movementScript.preload();
  },

  //Start function
  create: function()
  {
    trueDirection = "right";
  	Pickup.spawnPickup(game);
    playerHolder = [];
    var score = 0;
    var playerSize = 7;
    var myDirection = "right";
    updateDelay = 0;
    for(var i = 0; i < playerSize; i++)
    {
            playerHolder[i] = game.add.sprite(150+i*gridSize, 150, 'diamond');
    }
  },

  //Update which happens every frame
  update: function()
  {
    swipeFunctions.swipeUpdater();
  movementScript.trueDirectionChecker();
    updateDelay++;
    if (updateDelay % (10) == 0)
    {
      var firstCell = playerHolder[playerHolder.length - 1],
      lastCell = playerHolder.shift(),
      oldLastCellx = lastCell.x,
      oldLastCelly = lastCell.y;
      switch (trueDirection)
      {
        case "right":
        lastCell.x = firstCell.x + 30;
        lastCell.y = firstCell.y;
        break;
        case "left":
        lastCell.x = firstCell.x - 30;
        lastCell.y = firstCell.y;
        break;
        case "up":
        lastCell.y = firstCell.y - 30;
        lastCell.x = firstCell.x;
        break;
        case "down":
        lastCell.y = firstCell.y + 30;
        lastCell.x = firstCell.x;
        break;
    }

    playerHolder.push(lastCell);
    firstCell = lastCell;

    cellFunctions.screenWarp(firstCell);
    collisionEvents.pickupCollision(oldLastCellx,oldLastCelly);
    collisionEvents.selfCollision(firstCell);
  }
}
};
