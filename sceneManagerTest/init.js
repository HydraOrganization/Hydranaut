var gameWidth;
var gameHeight;
var bkImage;
var hydra;
var planet1;
var planet2;
var planet3;
var planet4;
var worldsMap;
var worldMap1;
var player1Piece;//temp player token
var p1;
var spaceShadows;

//PLAYER CLASS
class Player
{
    constructor(currentNode, player1Piece)
    {
        this.x = currentNode.x - 15;
        this.y = currentNode.y - 50;
        this.width = 30;
        this.height = 50;
        this.piece = player1Piece;
        this.currentNode = currentNode;
    }

    display()
    {
        image(this.piece,this.x, this.y, this.width, this.height);
    }

    move(targetNode)
    {

        this.currentNode = targetNode;
        this.x = targetNode.x - 15;
        this.y = targetNode.y - 50;

        this.display();
    }


}

function preload()
{

    //load all images
    spaceShadows = loadImage('images/spaceShadows.png');
    bkImage = loadImage("images/indexBG.jpg");
    hydra = loadImage("images/hydra.png");
    worldsMap = loadImage('images/worldMap.png');
    worldMap1 = loadImage('images/terrain-w-nodes.png');
    player1Piece = loadImage('images/gamePiece.png');

    //load all sprites images.
    p1 = loadAnimation('images/gamePiece.png');//load player piece (48x80)
    planet1=loadAnimation("images/planet1.png");
    planet2=loadAnimation("images/planet2.png");
    planet3=loadAnimation("images/planet3.png");
    planet4=loadAnimation("images/planet4.png");

}

function setup()
{
    var cnv = createCanvas(1280,720);
    var windowCenterX = (windowWidth - width) / 2;
    var windowCenterY = (windowHeight - height) / 2;
    cnv.position(windowCenterX, windowCenterY);

    //CREATE THE SCENE MANAGER
    var mgr = new SceneManager();

    //LOAD ALL IMAGES AND SPRITES INTO THE SCENE MANAGER
    mgr.planet1=planet1;
    mgr.planet2=planet2;
    mgr.planet3=planet3;
    mgr.planet4=planet4;

    mgr.bkImage = bkImage;
    mgr.hydra = hydra;

    mgr.spaceShadows=spaceShadows;
    mgr.worldsMap = worldsMap;
    mgr.worldMap1 = worldMap1;
    mgr.p1=p1;


    //DONT KNOW WHAT THIS DOES
    mgr.wire();

    //SWITCH TO THE FRONT PAGE
    mgr.showScene(FrontPage);
}

function windowResized() {
    centerCanvas();
}



// // var width;
// // var height;
// var ww;
// var wh;
// var bkImage;
// var hydra;
// var worldsMap;
// var worldMap1;
// var planeBG;
// var board;
// var testp;
//
// function preload()
// {
//     ww = windowWidth;
//     wh = windowHeight;
//     //load all images
//     testp = loadAnimation("images/gamePiece.png");
//     bkImage = loadImage("images/indexBG.jpg");
//     hydra = loadImage("images/hydra.png");
//     worldsMap = loadImage('images/worldsMap.png');
//     worldMap1 = loadImage('images/worldMap1.png');
//     planeBG = loadImage("images/planeBG.png");
//     board = loadImage("images/board.png");
// }
//
// function setup()
// {
//     //createCanvas(width, height);
//     var cnv = createCanvas(1280,720);
//     var windowCenterX = (windowWidth - width) / 2;
//     var windowCenterY = (windowHeight - height) / 2;
//     cnv.position(windowCenterX, windowCenterY);
//
//     //CREATE THE SCENE MANAGER
//     var mgr = new SceneManager();
//
//     //LOAD ALL IMAGES INTO THE SCENE MANAGER
//     mgr.bkImage = bkImage;
//     mgr.hydra = hydra;
//     mgr.worldsMap = worldsMap;
//     mgr.worldMap1 = worldMap1;
//     mgr.planeBG = planeBG;
//     mgr.board = board;
//     mgr.testp = testp;
//
//
//     //DONT KNOW WHAT THIS DOES
//     mgr.wire();
//
//     //SWITCH TO THE FRONT PAGE
//     mgr.showScene(FrontPage);
// }
function windowResized() {
    resizeCanvas(1280,720);
}