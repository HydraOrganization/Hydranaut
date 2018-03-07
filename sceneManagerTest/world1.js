//LAYERS:
// - board
// - nodes
// - puzzles
// - items
// - players


//NODE CLASS
// class Node{
//   constructor(x, y, radius, num){
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
//     this.fill = 0;
//     this.nodeNum = num;
//
//   }
//
//   //SHOW THE NODE IN THE CANVAS
//   display()
//   {
//     //noStroke();
//     noFill();
//     ellipse(this.x, this.y, this.radius);
//
//   }
//
//   //CHECK IF CLICK WAS MADE INSIDE THIS NODE
//   clicked(x, y) {
//     let d = dist(x, y, this.x, this.y);
//     if(d < this.radius)
//     {
//       return true;
//     }
//   }
//
// }

//WORLD1 FUNCTION
function World1()
{
 // node = new Node(windowWidth/2, windowHeight/2 - 100, 300, 0);//create a invisible, clickable circle

  this.draw = function()
  {
    image(this.sceneManager.board, 0, 0, windowWidth, windowHeight);//display the board image
    //node.display();
    textSize(24);
    textAlign(CENTER);
   // fill("yellow");
    text("CLICK ME TO GO BACK", width / 2, 375);

  }

  this.mousePressed = function()
  {

      clear();//removes everything from the canvas
      this.sceneManager.showScene(FrontPage);//switch to the front page

  }

}
