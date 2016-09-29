var game;
var gridSize = 30;
var longerSide = 870;
var shorterSide = 510;


if (window.innerWidth>=window.innerHeight)
{
	//Check if the game is landscape or not
	var gameWidth =  longerSide;
	var gameHeight = shorterSide;
}
else
{
	var gameWidth = shorterSide;
	var gameHeight = longerSide;
}
game  = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, '');
game.state.add('Game', Game)
game.state.add('GameOver', GameOver)
game.state.start('Game');
