var collisionEvents =
{
pickupCollision: function(oldLastCellx,oldLastCelly) {
    //Check if any part of the snake
    for(var i = 0; i < playerHolder.length; i++)
    {
        if(playerHolder[i].x == PickupObject.x && playerHolder[i].y == PickupObject.y)
        {
            scoreText.text = 'Score: ' + score;
            Pickup.spawnPickup(game);
            cellFunctions.addCell(oldLastCellx,oldLastCelly);
        }
    }

},

selfCollision: function(head) {

    // Check if the head of the snake overlaps with any part of the snake.
    for(var i = 0; i < playerHolder.length - 1; i++){
        if(head.x == playerHolder[i].x && head.y == playerHolder[i].y)
        {
          game.state.start('GameOver');
        }
    }
}
}
