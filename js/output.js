function checkCode() {
	if (!document.cookie.length) {
		document.getElementById("interestCode").innerHTML = "TAKE TEST!"
	} else {
		document.getElementById("interestCode").innerHTML = document.cookie
	}
}

checkCode();
var pathWayInfoDB = {
	artsNStuff: {
		about: "About : you do art and make stuff",
		classes: "Classes : art, philosophy, news, writing",
		pictures : ["mona lisa", "art canvas", "yellow paint"]
	},
	IETStuff: {
		about: "About : more math and more logic",
		classes: "Classes : calculus, physics, AOE, AOIT",
		pictures : ["em engineer", "wrench", "hammer"]
	}, 
	Business: {
		about: "About : you make more money lol",
		classes: "Classes : finacial, entrapenuar, business, meets",
		pictures : ["money", "more money!", "suits and tie"]
	}, 
	NaturalRS: {
		about: "About : you make the earth more green",
		classes: "Classes : science, plantrophy, zoology, tree class",
		pictures : ["plants", "green plants", "and then.. trees"]
	}
}
function testapp(val) {
	if (val==="NR"){
		document.getElementById("academyName").innerHTML = "Natural Resources"
		//document.getElementById("NR").className += " ActivePath"
		document.getElementById("about").innerHTML = pathWayInfoDB.NaturalRS.about
		console.log(pathWayInfoDB.NaturalRS.classes);
		document.getElementById("classes").innerHTML = pathWayInfoDB.NaturalRS.classes
		var y = document.getElementById("pictureBox");
		var aNode = y.childNodes[1];
		var aNode2 = y.childNodes[3];
		var aNode3 = y.childNodes[5];
		aNode.innerHTML = pathWayInfoDB.NaturalRS.pictures[0];
		aNode2.innerHTML = pathWayInfoDB.NaturalRS.pictures[1];
		aNode3.innerHTML = pathWayInfoDB.NaturalRS.pictures[2];
		document.getElementById("MoreInfoBox").setAttribute("name", val);

	} else if (val==="ArtsComm") {
		document.getElementById("academyName").innerHTML= "Arts and Communication"
		//document.getElementById("ArtsComm").className += " ActivePath"
		document.getElementById("about").innerHTML = pathWayInfoDB.artsNStuff.about
		document.getElementById("classes").innerHTML = pathWayInfoDB.artsNStuff.classes
		var y = document.getElementById("pictureBox");
		var aNode = y.childNodes[1];
		var aNode2 = y.childNodes[3];
		var aNode3 = y.childNodes[5];
		aNode.innerHTML = pathWayInfoDB.artsNStuff.pictures[0];
		aNode2.innerHTML = pathWayInfoDB.artsNStuff.pictures[1];
		aNode3.innerHTML = pathWayInfoDB.artsNStuff.pictures[2];
		document.getElementById("MoreInfoBox").setAttribute("name", val);
	} else if (val ==="IET") {
		document.getElementById("academyName").innerHTML="Industrial and Engineering Technology"
		document.getElementById("about").innerHTML = pathWayInfoDB.IETStuff.about
		document.getElementById("classes").innerHTML = pathWayInfoDB.IETStuff.classes
		var y = document.getElementById("pictureBox");
		var aNode = y.childNodes[1];
		var aNode2 = y.childNodes[3];
		var aNode3 = y.childNodes[5];
		aNode.innerHTML = pathWayInfoDB.IETStuff.pictures[0];
		aNode2.innerHTML = pathWayInfoDB.IETStuff.pictures[1];
		aNode3.innerHTML = pathWayInfoDB.IETStuff.pictures[2];
		document.getElementById("MoreInfoBox").setAttribute("name", val);
	} else if (val ==="Bus") {
		document.getElementById("academyName").innerHTML =  "Academy of Business"
		document.getElementById("about").innerHTML = pathWayInfoDB.Business.about
		document.getElementById("classes").innerHTML = pathWayInfoDB.Business.classes
		var y = document.getElementById("pictureBox");
		var aNode = y.childNodes[1];
		var aNode2 = y.childNodes[3];
		var aNode3 = y.childNodes[5];
		aNode.innerHTML = pathWayInfoDB.Business.pictures[0];
		aNode2.innerHTML = pathWayInfoDB.Business.pictures[1];
		aNode3.innerHTML = pathWayInfoDB.Business.pictures[2];
		document.getElementById("MoreInfoBox").setAttribute("name", val);
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

document.getElementById("MoreInfoBox").setAttribute("onclick", "displayMoreInfo()");
function displayMoreInfo() {
	val = document.getElementById("MoreInfoBox").getAttribute("name");



	if (val==="NR"){
			document.getElementById("PathwayInfo").innerHTML = " "
			var infoBoxART = document.createElement("h1");
			infoBoxART.innerHTML = "FLOWERS!"
			document.getElementById("PathwayInfo").appendChild(infoBoxART);
		} else if (val==="ArtsComm") {
			document.getElementById("PathwayInfo").innerHTML = " "
			var infoBoxART = document.createElement("h1");
			infoBoxART.innerHTML = "ART!"
			document.getElementById("PathwayInfo").appendChild(infoBoxART);

		} else if (val ==="IET") {
			document.getElementById("PathwayInfo").innerHTML = " "
			var infoBoxART = document.createElement("h1");
			infoBoxART.innerHTML = "ENGINEERING!!"
			document.getElementById("PathwayInfo").appendChild(infoBoxART);

		} else if (val ==="Bus") {
			document.getElementById("PathwayInfo").innerHTML = " "
			var infoBoxART = document.createElement("h1");
			infoBoxART.innerHTML = "MONEY!"
			document.getElementById("PathwayInfo").appendChild(infoBoxART);

		}
			else {
				alert("HSS")
			}



}

var testCode = ["I", "S", "C"];

for (var i=0; i<= testCode.length; i++) {
	demoAppend(testCode[i]);
}

