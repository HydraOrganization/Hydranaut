
var booleanworld;
var ifelseworld;
var forworld;
var whileworld;
var shadow;
var space;


//WORLD1 FUNCTION
function WorldPage()
{
    var check;
    var me = this;
    //mouseIsPressed=false;


    booleanworld = createSprite(((width/4)+63),(height/4)+35);
    booleanworld.addAnimation("normal", planet1);//add image to spritr
    booleanworld.mouseActive=true;//activate booleanworld



    ifelseworld = createSprite(((width/4)+560),(height/4)+40);
    ifelseworld.addAnimation("normal", planet2);//add image to spritr
    ifelseworld.mouseActive=true;//activate hydra mouse click




    forworld = createSprite(((width/4)+60),(height/4)+350);
    forworld.addAnimation("normal", planet3);//add image to spritr
    forworld.mouseActive=true;//activate hydra mouse click


    whileworld = createSprite(((width/4)+560),(height/4)+350);
    whileworld.addAnimation("normal", planet4);//add image to spritr
    whileworld.mouseActive=true;//activate hydra mouse click



    shadow=createSprite(width/2,height/2);
    shadow.addImage(spaceShadows);
    shadow.depth=2;

  this.draw = function()
  {
        check = false;
      booleanworld.visible = true;
      ifelseworld.visible = true;
      forworld.visible = true;
      whileworld.visible = true;
      image(this.sceneManager.worldsMap, 0, 0,width,height);//display the worldsMap image

      booleanworld.depth = 1;
      booleanworld.scale= 1;
      ifelseworld.depth = 1;
      ifelseworld.scale= 1;
      forworld.depth = 1;
      forworld.scale = 1;
      whileworld.depth=1;
      whileworld.scale=1;

      booleanworld.rotation +=.5;
      ifelseworld.rotation+=.5;
      forworld.rotation += .5;
      whileworld.rotation += .5;
      if(booleanworld.mouseIsOver && check == false){
          check =true;
          booleanworld.depth = 3;
          booleanworld.scale=1.5;
  }
      if(ifelseworld.mouseIsOver && check == false){
      check =true;
          ifelseworld.depth = 3;
          ifelseworld.scale= 1.5;
  }
      if(forworld.mouseIsOver && check == false){
      check =true;
          forworld.depth = 3;
          forworld.scale = 1.5;
  }

      if(whileworld.mouseIsOver && check == false){
      check =true;
          whileworld.depth=3;
          whileworld.scale=1.25;
      }


      if(booleanworld.mouseIsOver && mouseIsPressed)
      {

          console.log(`boolean pressed`);
          booleanworld.visible = false;
      ifelseworld.visible = false;
      forworld.visible = false;
      whileworld.visible = false;
          shadow.visible =false;
        clear();//removes everything from the canvas
          me.sceneManager.showScene(World1);//switch to world1
      }
      //if(ifelseworld.mouseIsPressed)
      if(ifelseworld.mouseIsOver && mouseIsPressed)
      {

          console.log(`ifelse pressed`);
          booleanworld.visible = false;
          ifelseworld.visible = false;
          forworld.visible = false;
          whileworld.visible = false;
          shadow.visible =false;
          clear();//removes everything from the canvas
          me.sceneManager.showScene(World1);//switch to world1
          check = true;
      }
     // if(forworld.mouseIsPressed)
      if(forworld.mouseIsOver && mouseIsPressed)
      {

          console.log(`forworld pressed`);
          booleanworld.visible = false;
          ifelseworld.visible = false;
          forworld.visible = false;
          whileworld.visible = false;
          shadow.visible =false;

          clear();//removes everything from the canvas
          me.sceneManager.showScene(World1);//switch to world1
      }
      if(whileworld.mouseIsOver && mouseIsPressed)
      {

          console.log(`whileworld pressed`);
          booleanworld.visible = false;
          ifelseworld.visible = false;
          forworld.visible = false;
          whileworld.visible = false;
          shadow.visible =false;
          clear();//removes everything from the canvas
          me.sceneManager.showScene(World1);//switch to world1
      }

      drawSprites();

  }


}
