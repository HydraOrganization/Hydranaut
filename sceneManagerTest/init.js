let width;
let height;
var bkImage;
var hydra;
var worldsMap;
var worldMap1;

function preload()
{
    width = windowWidth;
    height = windowHeight;
    //load all images
    bkImage = loadImage("images/indexBG.jpg");
    hydra = loadImage("images/hydra.png");
    worldsMap = loadImage('images/worldsMap.png');
    worldMap1 = loadImage('images/worldMap1.png');
}

function setup()
{
    createCanvas(width, height);

    //CREATE THE SCENE MANAGER
    var mgr = new SceneManager();

    //LOAD ALL IMAGES INTO THE SCENE MANAGER
    mgr.bkImage = bkImage;
    mgr.hydra = hydra;
    mgr.worldsMap = worldsMap;
    mgr.worldMap1 = worldMap1;


    //DONT KNOW WHAT THIS DOES
    mgr.wire();

    //SWITCH TO THE FRONT PAGE
    mgr.showScene(FrontPage);
}
