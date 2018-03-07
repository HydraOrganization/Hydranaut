//LAYERS:
// - board
// - nodes
// - puzzles
// - items
// - players

var node0;
var node1;
var node2;
var node3;
var node4;
var node5;
var node6;
var node7;
var node8;
var node9;
var node10;
var nodeArr;

//NODE CLASS
class Node{
  constructor(x, y, radius, num)
  {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill = 0;
    this.nodeNum = num;

  }

  //SHOW THE NODE IN THE CANVAS
  display()
  {
    //noStroke();
    noFill();
    ellipse(this.x, this.y, this.radius);

  }

  //CHECK IF CLICK WAS MADE INSIDE THIS NODE
  clicked(x, y)
  {
    let d = dist(x, y, this.x, this.y);
    if(d < this.radius)
    {
      return true;
    }
  }
}

//WORLD1 FUNCTION
function World1()
{
  //MAKE NODE
  //Node(xPosition, yPosition, Radius, nodeNumber)
  node0 = new Node(222, 439, 125, 0);
  node1 = new Node(416, 412, 65, 1);
  node2 = new Node(354, 293, 55, 2);
  node3 = new Node(345, 209, 50, 3);
  node4 = new Node(570, 311, 50, 4);
  node5 = new Node(809, 423, 60, 5);
  node6 = new Node(794, 300, 50, 6);
  node7 = new Node(744, 204, 45, 7);
  node8 = new Node(952, 255, 50, 8);
  node9 = new Node(1158, 285, 55, 9);
  node10 = new Node(1076, 138, 90, 10);

  //NOde array stores all of the node objects
  nodeArr = [node0, node1, node2, node3, node4, node5, node6, node7, node8, node9, node10];



  this.draw = function()
  {
    image(this.sceneManager.worldMap1, 0, 0, width, height);//display the board image

    for(i = 0; i < nodeArr.length; i++)
    {
      nodeArr[i].display();
    }
  }

  this.mousePressed = function()
  {
    for(i = 0; i < nodeArr.length; i++)
    {

      if(nodeArr[i].clicked(mouseX, mouseY))
      {

        console.log("Node # " + nodeArr[i].nodeNum);
      }


    }


  }

}
