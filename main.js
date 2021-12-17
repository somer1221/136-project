status0 = "";
item = "";

function preload() {

}

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(380,380);
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Model Status: Detecting Objects"; 
    item = document.getElementById("objectinput").value;
}

function modelLoaded() {
    console.log("CocoSSD model has been loaded!");
    status0 = true;
}

function draw() {
    image(video,0,0,380,380);
}