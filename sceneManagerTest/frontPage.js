

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
      var d = dist(x, y, this.x, this.y);
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
    var me = this;
    newPlayer= createSprite((width/2)-100,height/2);
    newPlayer.addAnimation("normal", "images/hydra2.png");//add image to spritr
    newPlayer.mouseActive = true;
    circle = new Circle(hydra.width/2, hydra.height/2, 500);//create an invisible, clickable circle
  //
    existingPlayer= createSprite((width/2+175),height/2);
    existingPlayer.addAnimation("normal", "images/hydra2.png");//add image to spritr
    existingPlayer.mouseActive = true;

    // newPlayer.onMousePressed = function(){
    //     newPlayer.visible = false;
    //     existingPlayer.visible = false;
    //     clear();//removes everything from the canvas
    //    // mouseIsPressed=false;
    //     me.sceneManager.showScene(WorldPage);//switch to worldsMap
    // }

  this.draw = function()
  {
      background(51);
      existingPlayer.visible = true;
      newPlayer.visible = true;

      image(this.sceneManager.bkImage, 0, 0, width, height);//display the board image
   // circle.display();
    textSize(24);
    textAlign(CENTER);
    fill("black");
      text("Create Account", width/2-100,(height/2)+75);
      text("Login", width/2+175,(height/2)+75);
    if(newPlayer.mouseIsOver && mouseIsPressed) {
        newPlayer.visible = false;
        existingPlayer.visible = false;
        clear();//removes everything from the canvas
        mouseIsPressed=false;
        this.sceneManager.showScene(WorldPage);//switch to worldsMap
    }
   // if(existingPlayer.mouseIsPressed)
      if(existingPlayer.mouseIsOver && mouseIsPressed)
    {
        newPlayer.visible = false;
        existingPlayer.visible = false;
          clear();//removes everything from the canvas
        mouseIsPressed=false;
        this.sceneManager.showScene(WorldPage);
    }
      drawSprites();
  }


}
