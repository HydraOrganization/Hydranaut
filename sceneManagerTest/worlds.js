
var booleanworld;
var ifelseworld;
var forworld;
var whileworld;
var shadow;
var space;
var choice;

//var button;

//WORLD1 FUNCTION
function WorldPage()
{
    //var to if mouse is over
    var check;
    var me = this;


    this.enter = function(){


    //booleanworld sprite is the planet to be able to enlarge when mouse is active
    //createsprite tell it where to be place
    booleanworld = createSprite(((width/4)+63),(height/4)+35);
    //add the image to the sprite, normal is just a name given.
    booleanworld.addAnimation("normal", planet1);
    //turn on mouse functions of sprite.
    booleanworld.mouseActive=true;//activate booleanworld


    //ifelseworld sprite is the planet to be able to enlarge when mouse is active
    //createsprite tell it where to be place
    ifelseworld = createSprite(((width/4)+560),(height/4)+40);
    //add the image to the sprite, normal is just a name given.
    ifelseworld.addAnimation("normal", planet2);
    ifelseworld.mouseActive=true;//activate hydra mouse click



    //forworldsprite is the planet to be able to enlarge when mouse is active
    //createsprite tell it where to be place
    forworld = createSprite(((width/4)+60),(height/4)+350);
    //add the image to the sprite, normal is just a name given.
    forworld.addAnimation("normal", planet3);
    forworld.mouseActive=true;//activate hydra mouse click

    //whileworld sprite is the planet to be able to enlarge when mouse is active
    //createsprite tell it where to be place
    whileworld = createSprite(((width/4)+560),(height/4)+350);
    //add the image to the sprite, normal is just a name given.
    whileworld.addAnimation("normal", planet4);
    whileworld.mouseActive=true;//activate hydra mouse click


    //shadow image of planets.
    shadow=createSprite(width/2,height/2);
    shadow.addImage(spaceShadows);
    shadow.depth=2;
        booleanworld.visible = true;
        ifelseworld.visible = true;
        forworld.visible = true;
        whileworld.visible = true;

    }


  this.draw = function()
  {


      check = false;
      //make sprites visible


      //add background image
      image(this.sceneManager.worldsMap, 0, 0,width,height);//display the worldsMap image
      //reset scale and set depth to be on top of over images or sprites
      booleanworld.depth = 1;
      booleanworld.scale= 1;
      ifelseworld.depth = 1;
      ifelseworld.scale= 1;
      forworld.depth = 1;
      forworld.scale = 1;
      whileworld.depth=1;
      whileworld.scale=1;
      //makes sprites rotate for planets
      booleanworld.rotation += .5;
      ifelseworld.rotation += .5;
      forworld.rotation += .5;
      whileworld.rotation += .5;

      //if mouse is oversprite scale sprite and set check to true
      if(booleanworld.mouseIsOver && check == false){
          check =true;
          booleanworld.depth = 3;
          booleanworld.scale=1.5;
          if(mouseIsPressed){
              worldSelected(World3);
          }
      }
      if(ifelseworld.mouseIsOver && check == false){
      check =true;
          ifelseworld.depth = 3;
          ifelseworld.scale= 1.5;
          if(mouseIsPressed){
              worldSelected(World2);
          }
      }
      if(forworld.mouseIsOver && check == false){
      check =true;
          forworld.depth = 3;
          forworld.scale = 1.5;
          if(mouseIsPressed){
              worldSelected(World1);
          }
      }
      if(whileworld.mouseIsOver && check == false){
      check =true;
          whileworld.depth=3;
          whileworld.scale=1.25;
          if(mouseIsPressed){
              worldSelected(World4);
          }
      }


      //drawsprites
      drawSprites();

  }
  function worldSelected(choice){
      booleanworld.visible = false;
      ifelseworld.visible = false;
      forworld.visible = false;
      whileworld.visible = false;
      shadow.visible =false;

      clear();//removes everything from the canvas
      //switch to world1 (change when world 4 is created
      me.sceneManager.showScene(choice);
  }



}
