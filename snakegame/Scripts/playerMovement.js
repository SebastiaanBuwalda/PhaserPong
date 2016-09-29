var movementScript =
{
preload: function()
{
  KeyboardInput.recieveInput();
},

update: function()
{
  if (cursors.left.isDown || listenToSwipes==true&&swipeFunctions.returnSwipeDirection()=="left")
  {
    if(trueDirection!="right")
    {
      listenToSwipes = false;
      return "left";
    }
    else
    {
      return null;
    }
  }
  else if (cursors.right.isDown || listenToSwipes==true&&swipeFunctions.returnSwipeDirection()=="right")
  {
    if(trueDirection!="left")
    {
      listenToSwipes = false;
      return "right";
    }
    else
    {
      return null
    }
  }
  else if (cursors.up.isDown || listenToSwipes==true&&swipeFunctions.returnSwipeDirection()=="up")
  {
    if(trueDirection!="down")
    {
      listenToSwipes = false;
      return "up";
    }
    else
    {
      return null
    }
  }
  else if (cursors.down.isDown || listenToSwipes==true&&swipeFunctions.returnSwipeDirection()=="down")
  {
    if(trueDirection!="up")
    {
      listenToSwipes = false;
      return "down";
    }
    else
    {
      return null
    }
  }
  else
  {
    return null;
  }
}
}
