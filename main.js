lipstickX = 0;
lipstickY = 0;

mustacheX = 0;
mustacheY = 0;


function preload() {
    
    lip_stick = loadImage('https://i.postimg.cc/3R9DDMQY/download.png');
    must_ache = loadImage('https://i.postimg.cc/L6GgPBwY/download-1.png');
}

function setup() {
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.lenght > 0)
    {
        console.log(results);
        lipstickX = results[0].pose.lipstick.x;
        lipstickY = results[0].pose.lipstick.y;
        mustacheX = results[0].pose.mustache.x;
        mustacheY = results[0].pose.mustache.y;
        console.log("lipstick x = " + lipstickX);
        console.log("lipstick y = "+ lipstickY);
        console.log("mustache x = " + mustacheX);
        console.log("mustache y = "+ mustacheY);
    }
}

function draw() {
    image(video, 0 ,0,300,300);
    image(lip_stick, lipstickX, lipstickY,30,30);
    image(must_ache, mustacheX, mustacheY,30,30);
}

function take_snapshot() {
    save('myFilterImage.png');
}

