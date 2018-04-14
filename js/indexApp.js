var displayContent //switch to index content after pre-load
var setMotto = setInterval(MottoChange, 980);
var MarauderLogoIMG = new Image();
//image lag solve?
MarauderLogoIMG.src = '../imgs/WHS_Marauder_Logo.jpg';
MarauderLogoIMG.id = "logo"
document.getElementById("logoDisp").appendChild(MarauderLogoIMG);
//new feature. making loading screen appear once. Maybe use cookies to determine if user has seen? and if so, set duration time around 24 hours

//some complicated stuff. 
// Users who uses public computers that already took riasec test. How can we solve loading screen that contaisn the riasec code? howwwwww

var count = 0;
var list = [ ];

	if (!document.cookie.length) {
        list = ["My Voice", "My Choice", "My Future"];
	} else {
        var compare_CODE = document.cookie.split("");
        for (var i=0; i<=compare_CODE.length-1; i++) {
            switch(compare_CODE[i]) {
                case "R":
                list.push("Realistic");
                break;
            case "I":
                list.push("Investigative");
                break;
            case "A":
                list.push("Artistic");
                break;
            case "S":
                list.push("Social");
                break;
            case "E":
                list.push("Enterprising");
                break;
            case "C":
                list.push("Conventional");
                break;

            }
        }
	}

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
        LogoPos += 0.5;
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
        TextPos += 0.5;
        elem.style.right = TextPos + 'px';
    }
}

transitionRight = setTimeout(TextRight, 4800); //transition
transitionLeft = setTimeout(LogoLeft, 4800); //transition

console.log(document.cookie)
function displayContentFunc() {
    if (false) {
        displayContent = setTimeout(showPage, 5500);
        document.cookie = "preLoad=true;"
    } else {
        showPage();
    }

}
function goToRIASEC() {
    window.location.href = "../pages/riasecPage.html";
}
function getCookieVar(cookieName) {
    var cookieVars = document.cookie.split(";")
    for (var i = 0; i<=cookieVars.length-1; i++) {
        if (cookieVars[i].split("=")[0] === cookieName) {
            return (cookieVars[i].split("=")[1])
        }
    }
    return null
}

function showPage() {
    //disables loader and content appears
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

//Slideshow Code


//Another Slide Show Code
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls.
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
