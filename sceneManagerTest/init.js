var width;
var height;
var bkImage;
var hydra;
var worldsMap;
var worldMap1;
var planeBG;
var board;

function preload()
{
    width = windowWidth;
    height = windowHeight;
    //load all images
    bkImage = loadImage("images/indexBG.jpg");
    hydra = loadImage("images/hydra.png");
    worldsMap = loadImage('images/worldsMap.png');
    worldMap1 = loadImage('images/worldMap1.png');
    planeBG = loadImage("images/planeBG.png");
    board = loadImage("images/board.png");
}

function setup()
{
    //createCanvas(width, height);
    createCanvas(windowWidth,windowHeight);

    //CREATE THE SCENE MANAGER
    var mgr = new SceneManager();

    //LOAD ALL IMAGES INTO THE SCENE MANAGER
    mgr.bkImage = bkImage;
    mgr.hydra = hydra;
    mgr.worldsMap = worldsMap;
    mgr.worldMap1 = worldMap1;
    mgr.planeBG = planeBG;
    mgr.board = board;


    //DONT KNOW WHAT THIS DOES
    mgr.wire();

    //SWITCH TO THE FRONT PAGE
    mgr.showScene(FrontPage);
}
function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}
