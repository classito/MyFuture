var displayContent //switch to index content after pre-load
var setMotto = setInterval(MottoChange, 980);

var count = 0;
var list = ["My Choice", "My Future"];
function MottoChange() {
    //this transitions to choice, future
    document.getElementById("list").innerHTML = list[count]
    count++
    if (count >=2) {
        clearInterval(setMotto);
    }
}

var LogoPos = 0;
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

var TextPos = 0;
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
    displayContent = setTimeout(showPage, 5000);
}

function showPage() {
    //disables loader and content appears
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}