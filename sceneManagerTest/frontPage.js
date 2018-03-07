var hy;
function FrontPage()
{

    //CREATE hydra sprite
    hy = createSprite(window.displayWidth/2,window.displayHeight/4);
    hy.addAnimation("normal", "images/hydra2.png");//add image to spritr
    var me = this;

    hy.mouseActive=true;//activate hydra mouse click



  this.draw = function()
  {

    background(51);//brackground color


    textSize(24);
    textAlign(CENTER);
    fill("black");
    text("Play Game", window.displayWidth/2,(window.displayHeight/4)+75,);

        //checks to see if moused pressed was on hy
      if(hy.mouseIsPressed)
      {
          console.log("inside if");
          clear();//removes everything from the canvas
          me.sceneManager.showScene(World1);//switch to world1
      }
      drawSprites();
  }
}
