var displayContent //switch to index content after pre-load
var setMotto = setInterval(MottoChange, 980);
var MarauderLogoIMG = new Image();

//image lag solve?
MarauderLogoIMG.src = '../imgs/WHS_Marauder_Logo.jpg';
MarauderLogoIMG.id = "logo"
document.getElementById("logoDisp").appendChild(MarauderLogoIMG);

var count = 0;
var list = ["My Voice", "My Choice", "My Future"];

function FadeInTransition(wordElem, state) {
    var fadeInElem = document.createElement("span");
    fadeInElem.innerHTML = wordElem;
    fadeInElem.id = "list";
    fadeInElem.className = "MyVCF";
    if (state === "iterate") {
        fadeInElem.className = "fadeInTransition";
    } else {
        fadeInElem.className = "LastfadeInTransition";
    }

    fadeInElem.innerHTML = wordElem;
    return fadeInElem;
}

function MottoChange() {
    //this transitions to choice, future
    //document.getElementById("list").innerHTML = list[count]
    var MottoElem = document.getElementById("motto");
     if (count === 2) {
        MottoElem.appendChild(FadeInTransition(list[count], "last"))
        count++
        clearInterval(setMotto)
    } else {
        MottoElem.appendChild(FadeInTransition(list[count], "iterate"))
        count++
    }
    MottoElem.removeChild(MottoElem.childNodes[0])
}


var LogoPos = 0;
var TextPos = 0;
function LogoLeft() {
    //moves logo to left after text animation
    var id = setInterval(LogoLeft, 5);
    var elem = document.getElementsByClassName("MyVCF")[0];
        if (LogoPos == 900) {
          clearInterval(id);
        } else {
            LogoPos+=0.5; 
          elem.style.left = LogoPos + 'px'; 
        }
    }

function TextRight() {
    //moves text to right after text animation
    var id2 = setInterval(TextRight, 5);
    var elem = document.getElementById("logo");
        if (TextPos == 900) {
          clearInterval(id2);
        } else {
            TextPos+=0.5; 
          elem.style.right = TextPos + 'px'; 
        }
      }

transitionRight = setTimeout(TextRight, 4800); //transition
transitionLeft = setTimeout(LogoLeft, 4800); //transition

function displayContentFunc() {
    //body loads
    displayContent = setTimeout(showPage, 5500);
}

function showPage() {
    //disables loader and content appears
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
