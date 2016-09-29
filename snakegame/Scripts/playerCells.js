var cellFunctions =
{
  screenWarp: function(cell)
  {
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
            playerHolder.unshift(game.add.sprite(oldLastCellx, oldLastCelly, 'diamond'));
  },
}
