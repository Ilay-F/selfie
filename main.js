var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    if(content=="take my slefie"){
        console.log("taking a photo in 5 seconds");
        speak();
    }

}
camera=document.getElementById("camera");
Webcam.set({width:360,height:250,image_format:"png",png_quality:90});
function speak(){
    var synth=window.speechSynthesis;
    var speak_data="taking a selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function(){
take_snapshot();
save();},5000);
}
function take_snapshot(){
Webcam.snap(function(p1){
    document.getElementById("photo").innerHTML="<img id='pic' src="+p1+">";
});
}
function save(){
    link=document.getElementById("link");
    p2=document.getElementById("pic").src;
    link.href=p2;
    link.click();
}
