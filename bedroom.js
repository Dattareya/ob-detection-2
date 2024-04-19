img="";

function preload()
{
    img=loadImage("bedroom.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();

    objectdetector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects..."
}

function draw()
{
    image(img,0,0,640,240);
}

function modelloaded()
{
    console.log("model is loaded")
}