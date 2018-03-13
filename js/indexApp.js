var displayContent //switch to index content after pre-load
var setMotto = setInterval(MottoChange, 980);
var MarauderLogoIMG = new Image();
//image lag solve?
MarauderLogoIMG.src = '../imgs/WHS_Marauder_Logo.jpg';
MarauderLogoIMG.id = "logo"
document.getElementById("logoDisp").appendChild(MarauderLogoIMG);

var count = 0;
var list = [ ];
console.log(document.cookie);

	if (!document.cookie.length) {
        list = ["My Voice", "My Choice", "My Future"];
	} else {
        var compare_CODE = document.cookie.split("");
        for (var i=0; i<=compare_CODE.length-1; i++) {
            console.log(compare_CODE[i]);
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
    if (state === "iterate") {var displayContent //switch to index content after pre-load
var setMotto = setInterval(MottoChange, 980);
var MarauderLogoIMG = new Image();
//image lag solve?
MarauderLogoIMG.src = '../imgs/WHS_Marauder_Logo.jpg';
MarauderLogoIMG.id = "logo"
document.getElementById("logoDisp").appendChild(MarauderLogoIMG);

var count = 0;
var list = [ ];
console.log(document.cookie);

	if (!document.cookie.length) {
        list = ["My Voice", "My Choice", "My Future"];
	} else {
        var compare_CODE = document.cookie.split("");
        for (var i=0; i<=compare_CODE.length-1; i++) {
            console.log(compare_CODE[i]);
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

function displayContentFunc() {
    //body loads
    displayContent = setTimeout(showPage, 5500);
}

function showPage() {
    //disables loader and content appears
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

//Slideshow Code

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}
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

function displayContentFunc() {
    //body loads
    displayContent = setTimeout(showPage, 5500);
}

function showPage() {
    //disables loader and content appears
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
