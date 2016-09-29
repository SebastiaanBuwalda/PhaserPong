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
    startX = game.input.pointer1.position.x;
    startY = game.input.pointer1.position.y;
  },

  endSwipeRecord: function()
  {
    endX = game.input.pointer1.position.x;
    endY = game.input.pointer1.position.y;

    deltaX = startX - endX;
    deltaY = startY - endY;
  },

  swipeUpdater: function()
  {
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
        swipeFunctions.endSwipeRecord();
        recordSwipe = true;
        listenToSwipes = true;
      }
  },

  returnSwipeDirection:function()
  {
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
