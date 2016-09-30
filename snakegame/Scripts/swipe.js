var startX;
var startY;
var endX;
var endY;
var deltaX;
var deltaY;
var swipeFunctions =
{

  startSwipeRecord: function()
  {
    //Record start position of finger
    startX = game.input.pointer1.position.x;
    startY = game.input.pointer1.position.y;
  },

  endSwipeRecord: function()
  {
    //Record end position of finger
    endX = game.input.pointer1.position.x;
    endY = game.input.pointer1.position.y;

    deltaX = startX - endX;
    deltaY = startY - endY;
  },

  swipeUpdater: function()
  {
    //Call this function in the update to make swiping work
    if(recordSwipe)
    {
      if (game.input.pointer1.isDown)
      {
        swipeFunctions.startSwipeRecord();
        recordSwipe = false;
      }
    }
    else if (!game.input.pointer1.isDown)
      {
        //Happens every frame???
        swipeFunctions.endSwipeRecord();
        recordSwipe = true;
        listenToSwipes = true;
      }
  },

  returnSwipeDirection:function()
  {
    //Call on this to return the swipe direction as a string
    if (deltaX<0)
    {
      var horizontalSwipeAmount = deltaX*-1;
    }
    else
    {
      var horizontalSwipeAmount = deltaX;
    }
    if (deltaY<0)
    {
      var verticalSwipeAmount = deltaY*-1;
    }
    else
    {
      var verticalSwipeAmount = deltaY;
    }
    //See if the player covered more distance vertically or horizontally
    if(horizontalSwipeAmount>=verticalSwipeAmount)
    {
      if (deltaX<0)
      {
          return "right";
      }
      else
      {
          return "left";
      }
    }
    else
    {
      if (deltaY>0)
      {
          return "up";
      }
      else
      {
          return "down";
      }
    }
  }
}
