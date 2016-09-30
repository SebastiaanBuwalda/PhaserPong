var cellFunctions =
{
  screenWarp: function(cell)
  {
      //Warps to the other side of the screen when exiting the screen
    if(cell.x>gameWidth)
    {

      cell.x = 0;
    }
    else if(cell.x<0)
    {
      cell.x = gameWidth;
    }
    else if(cell.y>gameHeight)
    {
      cell.y = 0;
    }
    else if(cell.y<0)
    {
      cell.y = gameHeight;
    }
  },

  addCell: function(oldLastCellx,oldLastCelly)
  {
            //Adds a new cell
            playerHolder.unshift(game.add.sprite(oldLastCellx, oldLastCelly, 'diamond'));
  }
}
