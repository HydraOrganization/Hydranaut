

//WORLDS MAP FUNCTION
function WorldsMap()
{
  circle = new Circle(418,597,200);

  this.draw = function()
  {
    image(this.sceneManager.worldsMap, 0, 0, width, height);//display the worldsMap image

    circle.display();
  }

  this.mousePressed = function()
  {
    if(circle.clicked(mouseX, mouseY))
    {
      clear();//removes everything from the canvas
      this.sceneManager.showScene(World1);//switch to worldsMap
    }
  }


}
