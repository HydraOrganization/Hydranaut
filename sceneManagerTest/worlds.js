
var booleanworld;
var ifelseworld;
var forworld;
var whileworld;
var shadow;
var space;
var choice;



//WORLD1 FUNCTION
function WorldPage()
{
    //var to if mouse is over
    var check;
    var me = this;

    //counts the number of ticks for mouse being over
    //var clock = 1;
    stroke(2);
    fill(255, 104, 204);
    textSize(24);





    this.enter = function(){
    //booleanworld sprite is the planet to be able to enlarge when mouse is active
    //createsprite tell it where to be place
    booleanworld = createSprite(((width/4)-125),(height/4)+153);
    //add the image to the sprite, normal is just a name given.
    booleanworld.addAnimation("normal", planet3);
    //turn on mouse functions of sprite.
    booleanworld.mouseActive=true;//activate booleanworld


    //ifelseworld sprite is the planet to be able to enlarge when mouse is active
    //createsprite tell it where to be place
    ifelseworld = createSprite(((width/4)+315),(height/4)+160);
    //add the image to the sprite, normal is just a name given.
    ifelseworld.addAnimation("normal", planet2);
    ifelseworld.mouseActive=true;//activate hydra mouse click



    //forworldsprite is the planet to be able to enlarge when mouse is active
    //createsprite tell it where to be place
    forworld = createSprite(((width/4)+765),(height/4)+155);
    //add the image to the sprite, normal is just a name given.
    forworld.addAnimation("normal", planet1);
    forworld.mouseActive=true;//activate hydra mouse click


    //shadow image of planets.
    shadow=createSprite(width/2,height/2);
    shadow.addImage(spaceShadows);
    shadow.depth=2;
        booleanworld.visible = true;
        ifelseworld.visible = true;
        forworld.visible = true;


    }


  this.draw = function()
  {
      check = false;

      //add background image
      image(this.sceneManager.worldsMap, 0, 0,width,height);//display the worldsMap image

      //slider import
      //var volume = this.sceneManager.worldSelectMusic.setVolume();
      var val = slider.value();
      this.sceneManager.worldSelectMusic.setVolume(val);

      /*var mute = muteButton.value();
      muteButton.mousePressed(toggleMusic);*/

      //reset scale and set depth to be on top of over images or sprites
      booleanworld.depth = 1;
      booleanworld.scale= 1;
      ifelseworld.depth = 1;
      ifelseworld.scale= 1;
      forworld.depth = 1;
      forworld.scale = 1;
      //whileworld.depth=1;
      //whileworld.scale=1;
      //makes sprites rotate for planets
      booleanworld.rotation += .5;
      ifelseworld.rotation += .5;
      forworld.rotation += .5;
      //whileworld.rotation += .5;

      //if mouse is oversprite scale sprite and set check to true
      if(booleanworld.mouseIsOver && check == false){
          check =true;
          booleanworld.depth = 3;
          booleanworld.scale=1.5;
          if(mouseIsPressed){
              worldSelected("World1");
              this.sceneManager.worldSelectMusic.stop();
              this.sceneManager.worldMusic.play();
              this.sceneManager.worldMusic.setLoop(true);
              this.sceneManager.worldMusic.setVolume(val);
          }
      }
      if(ifelseworld.mouseIsOver && check == false){
      check =true;

          ifelseworld.depth = 3;
          ifelseworld.scale= 1.5;
        /*  if(clock > 1){
            this.sceneManager.sfxSelectLeft.stop();
          }*/

          if(mouseIsPressed){
              worldSelected("World2");
              this.sceneManager.worldSelectMusic.stop();
              this.sceneManager.worldMusic.play();
              this.sceneManager.worldMusic.setLoop(true);
              this.sceneManager.worldMusic.setVolume(val);
          }
          /*else if (clock == 1){
            this.sceneManager.sfxSelectLeft.play();

          }
          clock = 2;*/
      }
      if(forworld.mouseIsOver && check == false){
      check =true;
          forworld.depth = 3;
          forworld.scale = 1.5;
          if(mouseIsPressed){
              worldSelected("World3");
              this.sceneManager.worldSelectMusic.stop();
              this.sceneManager.worldMusic.play();
              this.sceneManager.worldMusic.setLoop(true);
              this.sceneManager.worldMusic.setVolume(val);
          }
      }

      drawSprites();




      text("BOOLEAN WORLD",(width/4)-240,(height/4)+175);
      text("IF/ELSE WORLD",(width/2)-100,(height/4)+175);
      text("LOOPS WORLD",(width/2)+350,(height/4)+175);

  }
  function worldSelected(choice){
      booleanworld.visible = false;
      ifelseworld.visible = false;
      forworld.visible = false;
      //whileworld.visible = false;
      shadow.visible =false;

      clear();//removes everything from the canvas
      //switch to world1 (change when world 4 is created
      me.sceneManager.showScene(World1,choice);

  }



}
