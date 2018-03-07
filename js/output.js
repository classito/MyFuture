function checkCode() {
	if (!document.cookie.length) {
		document.getElementById("interestCode").innerHTML = "TAKE TEST!"
	} else {
		document.getElementById("interestCode").innerHTML = document.cookie
	}
}

checkCode();

function testapp(val) {
	if (val==="NR"){
		document.getElementById("academyName").innerHTML = "Natural Resources"
		document.getElementById("NR").className += " ActivePath"
	} else if (val==="ArtsComm") {
		document.getElementById("academyName").innerHTML= "Arts and Communication"
		document.getElementById("ArtsComm").className += " ActivePath"
	} else if (val ==="IET") {
		document.getElementById("academyName").innerHTML="Industrial and Engineering Technology"
	} else if (val ==="Bus") {
		document.getElementById("academyName").innerHTML =  "Academy of Business"
	}
		else {
			alert("HSS")
		}
	}

function appendRelatedPathways(RIASECpathName, pathID) {
	var pathBox = document.createElement("DIV");
	pathBox.className = "userPath";
	pathBox.id = pathID;
	pathBox.onclick = function () {
		testapp(pathID);
	};
	var pathName = document.createElement("h1");
	pathName.innerHTML = RIASECpathName
	console.log(pathName);
	pathBox.appendChild(pathName);
	document.getElementById("pathways").appendChild(pathBox);
}


function demoAppend(caseString) {
		switch (caseString) {
			case "R":
				appendRelatedPathways("Natural and Resources", "NR")
				break;
			case "I":
				appendRelatedPathways("IET", "IET")
				break;
			case "A":
				appendRelatedPathways("Arts and Comm.", "ArtsComm")
				break;
			case "S":
				appendRelatedPathways("Business", "Bus")
				break;
			case "E":
				apendRelatedPathways("Health and Science", "HS")
				break;
			case "C":
				appendRelatedPathways("Science", "SC")
				break;
		}
};

var testCode = ["R", "I", "A"];

for (var i=0; i<= testCode.length; i++) {
	demoAppend(testCode[i]);
}

