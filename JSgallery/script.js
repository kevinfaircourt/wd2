var header = document.getElementById("docHeader");
var hColorChangeBtn = document.getElementById("ChangeColor");

var quokkaImage = document.getElementById("quokkaImg");
var quokkaButton = document.getElementById("quokkaImgChange");

var headerColorChange = function(){
var redComp = Math.random() *255;
var greenComp = Math.random() *255;
var blueComp = Math.random() *255;
 redComp + ", " + greenComp + ", " + blueComp + ")";

}

var swapQuokkaImage = function(){
    console.log(quokkaImage.alt);

    if(quokkaImage.alt == "First quokka image"){
        quokkaImage.src = "images/quok.jpg";
        quokkaImage.alt = "Second quokka image";
        quokkaButton.innerText = "Show first one again";
    }
    else { 
        quokkaImage.src = "images/quok1.jpg";
        quokkaImage.alt = "Second quokka image";
        quokkaButton.innerText = "Which one is better?";
    }
}

//just when the JS loads
headerColorChange();

hColorChangeBtn.addEventListener("click" , headerColorChange);
quokkaButton.addEventListener("click", swapQuokkaImage);
