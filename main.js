function start(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/kA4F-80yW/model.json',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        r= Math.floor(Math.random()*255)+1;
        g= Math.floor(Math.random()*255)+1;
        b= Math.floor(Math.random()*255)+1
        document.getElementById("resultLabel").innerHTML='I can hear - '+results[0].label;
        document.getElementById("resultConfidence").innerHTML='Accuracy - '+(results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("resultLabel").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("resultConfidence").style.color="rgb("+r+","+g+","+b+")";
        a1 = document.getElementById('alien1');
        a2 = document.getElementById('alien2');
        a3 = document.getElementById('alien3');
        a4 = document.getElementById('alien4');
        if(results[0].label =="Clap"){
            a1.src='aliens-01.gif';
            a2.src='aliens-02.png';
            a3.src='aliens-03.png';
            a4.src='aliens-04.png';
        }else if(results[0].label == "Bell"){
            a1.src='aliens-01.png';
            a2.src='aliens-02.gif';
            a3.src='aliens-03.png';
            a4.src='aliens-04.png';
        }
        else if(results[0].label == "Snapping"){
            a1.src='aliens-01.png';
            a2.src='aliens-02.png';
            a3.src='aliens-03.gif';
            a4.src='aliens-04.png';
        }
        else{
            a1.src='aliens-01.png';
            a2.src='aliens-02.png';
            a3.src='aliens-03.png';
            a4.src='aliens-04.gif';
        }
    }
}