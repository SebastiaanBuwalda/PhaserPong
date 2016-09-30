var PickupObject;
var newXPickup;
var newYPickup;
var Pickup =
{
  spawnPickup: function(myScene)
  {
    if(PickupObject!=null)
    {
      PickupObject.destroy();
    }
    score++;
    Pickup.calulateNewPosition();
    PickupObject = myScene.add.sprite(newXPickup,newYPickup,'star');
    this.enableBody = true;
  },

  calulateNewPosition: function()
  {
    //Get a random position on the "grid"
    newXPickup = Math.floor(Math.random() * (gameWidth/gridSize))*gridSize;
    newYPickup = Math.floor(Math.random() * (gameHeight/gridSize))*gridSize;
     if (playerHolder!=null)
    {
      for(var i = 0; i < playerHolder.length; i++)
      {
        if(newXPickup==playerHolder[i].x&&newYPickup==playerHolder[i].y)
        {
          //Make sure that the pickup never spawns on the player
          Pickup.calulateNewPosition();
        }
      }
    }


  }



}
