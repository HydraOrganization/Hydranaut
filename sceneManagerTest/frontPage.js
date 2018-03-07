

class Circle
{
    constructor(x, y, radius)
    {
      this.x = x;
      this.y = y;
      this.radius = radius;
    }

    display()
    {
      //noStroke();
      noFill();
      ellipse(this.x, this.y, this.radius);
    }

    //CHECK IF CLICK WAS MADE INSIDE THE CIRCLE
    clicked(x, y)
    {
      let d = dist(x, y, this.x, this.y);
      if(d < this.radius)
      {
        return true;
      }
    }
}

//FRONT PAGE FUNCTION
function FrontPage()
{
  circle = new Circle(hydra.width/2, hydra.height/2, 500);//create an invisible, clickable circle

  this.draw = function()
  {
    image(this.sceneManager.bkImage, 0, 0);//display the bg image
    image(this.sceneManager.hydra, 0, 0);//display hydra image
    circle.display();
    textSize(24);
    textAlign(CENTER);
    fill("black");
    text("CLICK THE HYDRA", 400, 500);
  }

  this.mousePressed = function()
  {
    if(circle.clicked(mouseX, mouseY))
    {
      clear();//removes everything from the canvas
      this.sceneManager.showScene(WorldsMap);//switch to worldsMap
    }
  }


}
