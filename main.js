Webcam.set({
    width:320,
    height:300,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach(camera);

function takeSnapShot(){
    Webcam.snap(function(data_ur){
        document.getElementById("image").innerHTML = "<img src="+data_ur+" id='capturedImage'>"
    })
}

console.log(ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/xk_0yZWeo/model.json",conform);

function conform(){
    console.log("model lodded!!");
}
function check(){
    img = document.getElementById("capturedImage");
    classifier.classify(img,getResult);
}
function getResult(error,result){
    if(error){
        console.log(error);
    }else if(result){
        console.log(result);
        document.getElementById("objectName").innerHTML = result[0].label;
        percentage = result[0].confidence.toFixed(3);
        percent = Math.round(percentage*100);
        document.getElementById("Accuracy").innerHTML = percent+"%";
    }
}