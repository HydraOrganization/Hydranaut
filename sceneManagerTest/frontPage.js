

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
var existingPlayer;
var newPlayer;

//FRONT PAGE FUNCTION
function FrontPage()
{
    newPlayer= createSprite((window.displayWidth/2)-100,window.displayHeight/2);
    newPlayer.addAnimation("normal", "images/hydra2.png");//add image to spritr
    newPlayer.mouseActive = true;
    circle = new Circle(hydra.width/2, hydra.height/2, 500);//create an invisible, clickable circle
  //
    existingPlayer= createSprite((window.displayWidth/2+175),window.displayHeight/2);
    existingPlayer.addAnimation("normal", "images/hydra2.png");//add image to spritr
    existingPlayer.mouseActive = true;

  this.draw = function()
  {
      existingPlayer.visible = true;
      newPlayer.visible = true;
      image(this.sceneManager.planeBG, 0, 0, window.displayWidth, window.displayHeight);//display the board image
   // circle.display();
    textSize(24);
    textAlign(CENTER);
    fill("black");
      text("Create Account", window.displayWidth/2-100,(window.displayHeight/2)+75);
      text("Login", window.displayWidth/2+175,(window.displayHeight/2)+75);
    if(newPlayer.mouseIsPressed) {
        newPlayer.visible = false;
        existingPlayer.visible = false;
        clear();//removes everything from the canvas
        this.sceneManager.showScene(LoginPage);//switch to worldsMap
    }
    if(existingPlayer.mouseIsPressed)
    {
        newPlayer.visible = false;
        existingPlayer.visible = false;
          clear();//removes everything from the canvas
        this.sceneManager.showScene(LoginPage);
    }
      drawSprites();
  }


}
