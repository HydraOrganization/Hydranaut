
var loginSprite;

//WORLD1 FUNCTION
function LoginPage()
{
    var me = this;
 // node = new Node(windowWidth/2, windowHeight/2 - 100, 300, 0);//create a invisible, clickable circle
    loginSprite = createSprite((windowWidth/2),windowHeight/2);
    loginSprite.addAnimation("normal", "images/hydra2.png");//add image to spritr


    loginSprite.mouseActive=true;//activate hydra mouse click

  this.draw = function()
  {
      background(51);
      loginSprite.visible =true;
    image(this.sceneManager.planeBG, 0, 0, windowWidth, windowHeight);//display the board image
    //node.display();
    textSize(24);
    textAlign(CENTER);
   // fill("yellow");
    text("login", windowWidth/2, (windowHeight/2)+75);
      if(loginSprite.mouseIsPressed)
      {
          loginSprite.visible = false;

          clear();//removes everything from the canvas
          me.sceneManager.showScene(WorldPage);//switch to world1

      }

      drawSprites();

  }


}
