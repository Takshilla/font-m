function setup(){
  video = createCapture(VIDEO);
  video.size(300,300);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}


function gotPose(results){
    if(results.length > 0){
        console.log(results);
        };
    }

