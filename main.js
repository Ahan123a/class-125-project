noseX = 0
noseY = 0
difference = 0
leftWristX = 0
rightWristx = 0

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#969A97');
    document.getElementById("text_side").innerHTML="The Width and Height of the Square will be"+difference+"px";
    fill('#F90093');
    stroke('#F90093');
    square(noseX, noseY, difference);
}

function modelLoaded() {
    console.log("PoseNet has been successfully initiaziled");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX is=" + noseX + "noseY is=" + noseY);

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference =" + difference);

    }
}