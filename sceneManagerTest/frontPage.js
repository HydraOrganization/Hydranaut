
//FRONT PAGE FUNCTION
function FrontPage()
{
  circle = new Node(hydra.width/2, hydra.height/2, 500, 0);//create an invisible, clickable circle

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
        mouseIsPressed=false;
      this.sceneManager.showScene(WorldPage);//switch to worldsMap
    }
  }


}
