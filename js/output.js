function rank_Distrubition(rankList) {
	var tempList = [ ];
	var list = [ ];

	var pathwayList = {
		IET: {
			name: "Industrial Engineering Technology",
			rank:1
		},
		HS:{
			name: "Health and Science",
			rank:2
		},
		NR:{
			name: "Natural Resources",
			rank:3
		},
		AC:{
			name: "Arts and Communication",
			rank:4
		},
		PS:{
			name: "Public Human Services",
			rank:5
		}
	}

	for (var i=0; i<=rankList.length-1; i++) {

		tempList.push(rankList[i])
	}

	console.log(tempList);
	for (var k=0; k<= tempList.length-1; k++) {
		if (tempList[k] === pathwayList.IET.rank) {
			list.push(pathwayList.IET.name);
		} else if(tempList[k] === pathwayList.HS.rank) {
			list.push(pathwayList.HS.name);
		} else if (tempList[k] === pathwayList.NR.rank) {
			list.push(pathwayList.NR.name);
		} else if (tempList[k] === pathwayList.AC.rank) {
			list.push(pathwayList.AC.name);
		} else if (tempList[k] === pathwayList.PS.rank) {
			list.push(pathwayList.PS.name);
		}
	}
	return list;
}

console.log(rank_Distrubition([5,4,3,2,1]));

var pathwayBank = {
	//1...5 (greatest -> least)
	Realistic: {
		rank: rank_Distrubition([3,1,2,4,5])
	},
	Investigative: {
		rank: rank_Distrubition([1,2,5,3,4])
	},
	Artistic: {
		rank: rank_Distrubition([4,5,3,1,2])
	},
	Social: {
		rank: rank_Distrubition([2,5,1,4,3])
	},
	Enterprising: {
		rank: rank_Distrubition([5,4,2,3,1])
	},
	Conventional: {
		rank: rank_Distrubition([5,1,2,4,3])
	}
}


function scoreMe(value, score) {
	if (obj[test][value]=== "Natural Resources") {
		user_SCORE.NR+=score
	} else if (obj[test][value] === "Industrial Engineering Technology") {
		user_SCORE.IET+=score
	} else if (obj[test][value] === "Health and Science") {
		user_SCORE.HS+=score
	} else if (obj[test][value] === "Arts and Communication")  {
		user_SCORE.AC+=score
	} else if (obj[test][value] === "Public Human Services") {
		user_SCORE.PS+=score
	}
}


var user_SCORE = {
	IET:0,
	HS:0,
	PS:0,
	NR: 0,
	AC:0
}


testValue = ["S", "R", "C"]


for (var k=0; k<= testValue.length-1; k++) {
	console.log(testValue[k]);

	if (testValue[k] === "A") {
		testValue[k] = "Artistic";
		continue;
	} else if (testValue[k] === "R") {
		testValue[k] = "Realistic"
		continue;
	} else if (testValue[k] === "I") {
		testValue[k] = "Investigative"
		continue
	} else if (testValue[k] === "S") {
		testValue[k] = "Social"
		continue
	} else if (testValue[k] === "E") {
		testValue[k] = "Enterprising"
		continue
	} else if (testValue[k] === "C") {
		testValue[k] = "Conventional"
		continue
	}
}

console.log(testValue);

for (var key in pathwayBank) {
	var obj = pathwayBank[key];
	console.log(key)

	if (key ===testValue[0]) {
		for (var test in obj) {
			scoreMe(0, 5)
			scoreMe(1, 4)
			scoreMe(2, 3)
			scoreMe(3, 2)
			scoreMe(4, 1)
		}
	} else if (key ===testValue[1]) {
		for (var test in obj) {
			scoreMe(0, 5)
			scoreMe(1, 4)
			scoreMe(2, 3)
			scoreMe(3, 2)
			scoreMe(4, 1)
		}
	} else if (key ===testValue[2]) {
		scoreMe(0, 5)
		scoreMe(1, 4)
		scoreMe(2, 3)
		scoreMe(3, 2)
		scoreMe(4, 1)
	}

	}


	var keyValues = []

for (var key in user_SCORE) {
  keyValues.push([ key, user_SCORE[key] ])
}


keyValues.sort(function compare(kv1, kv2) {
	return kv2[1] - kv1[1]
  })





































function getCookieVar(cookieName) {
    var cookieVars = document.cookie.split(";")
    for (var i = 0; i<=cookieVars.length-1; i++) {
		console.log(cookieVars[i]);
        if (cookieVars[i].split("=")[0] === cookieName) {
            return (cookieVars[i].split("=")[1])
        }
    }
    return null
}
function checkCode() {
	if (!document.cookie.length) {
		document.getElementById("interestCode").innerHTML = "TAKE TEST!"
	} else {
		document.getElementById("interestCode").innerHTML = getCookieVar(" RIASEC_CODE");
	}
}

checkCode();

var pathWayInfoDB = {
	artsNStuff: {
		about: "About : you do art and make stuff",
		classes: ["Arts and Communication Core", "Graphic Design Tech 1 and 2", "Digital Media Tech-Web Design", "Digital Media Tech-Broadcast", "Broadcast Media", "Fashion Design", "Fashion Merchandising", "Directed Studies in Arts and Communication", "Arts & Communication Capstone"],
		pictures : ["mona lisa", "art canvas", "yellow paint"]
	},
	IETStuff: {
		about: "About : more math and more logic",
		classes: ["Industrial & Engineering Tech Core", "Automotive Tech 1", "Design Tech 1", "Design Tech 2", "AOE- Introduction to Engineering", "AOE- 3D Solid Modeling", "AOE- Intro to Architectural & Civil Engineering", "AOE- Principles of Engineering w/ Stem Capstone", "Intro to Engineering", "Electronic Tech 1", "Electronic Tech 2", "Metals Tech 1", "Metals Tech 2", "Building and Construction Tech 1", "Building and Construction Tech 2", "A+ Certification 1: Intro to Computers", "A+ Certification 2: Computers Systems", "A+ Certification 3: Intro to Computers", "A+ Certification 4: Computers Systems", "Computer Programming A and B(coding)", "Networking Fundamentals & Local Area Networks", "Wide Area Networks And Networking Architectures", "Cyber Security", "Directed Study in Industrial and Engineering Technology", "IET Capstone"], 

		pictures : ["em engineer", "wrench", "hammer"]
	}, 
	Business: {
		about: "About : you make more money lol",
		classes: ["Marketing", "Accounting", "Finance 1", "Hospitality & Tourism 1", "Hospitality & Tourism 2", "Entrepreneurship", "Beg Wlg for Travel & Tourism A and B", "Economics ", "Financial Literacy", "Computing: Tools for Info Age"],
		pictures : ["money", "more money!", "suits and tie"]
	}, 
	NaturalRS: {
		about: "About : you make the earth more green",
		classes: ["Natural Resources Core", "Natural Resources Production 1", ""],
		pictures : ["plants", "green plants", "and then.. trees"]
	},

	HealthAndScience: {
		about: "About : science and you save people",
		classes: ["Health Services Core", "Clinical Health", "Biotechnology", "Health and Nutrition", "Health and Nutrition 2", "Academy of Health & Sciences Capstone", "STEM Capstone"],
		
		
		pictures : ["heart", "skeleton", "skull!"]
	},

	PublicAndHumanServices: {
		about: "About : human and public stuff yeah!!!",
		classes: ["Business & Public Human Services", "Law, Public Safety, and Criminology", "Explorations in Education", "Elementary Education", "Second Education", "Culinary 1", "Culinary 2", "PHS Lab", "Baking and Pastry Arts", "Hotel Operations", "Public and Human Services Capstone", "Community Service Learning"]
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
		else if (val ==="HS"){
			document.getElementById("academyName").innerHTML =  "Academy of Health and Science"
			document.getElementById("about").innerHTML = pathWayInfoDB.HealthAndScience.about
			document.getElementById("classes").innerHTML = pathWayInfoDB.HealthAndScience.classes
			var y = document.getElementById("pictureBox");
			var aNode = y.childNodes[1];
			var aNode2 = y.childNodes[3];
			var aNode3 = y.childNodes[5];
			aNode.innerHTML = pathWayInfoDB.HealthAndScience.pictures[0];
			aNode2.innerHTML = pathWayInfoDB.HealthAndScience.pictures[1];
			aNode3.innerHTML = pathWayInfoDB.HealthAndScience.pictures[2];
			document.getElementById("MoreInfoBox").setAttribute("name", val);
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



function demoAppend(obj) {
		switch (obj) {
			case "NR":
				appendRelatedPathways("Natural and Resources", "NR")
				break;
			case "IET":
				appendRelatedPathways("IET", "IET")
				break;
			case "AC":
				appendRelatedPathways("Arts and Communication", "ArtsComm")
				break;
			case "PS":
				appendRelatedPathways("Public Human Services", "Bus")
				break;
			case "HS":
				appendRelatedPathways("Health and Science", "HS")
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


console.log(keyValues);	

function sortCode() {
	var Top3= [ ];
	for (var o=0; o<=2; o++) {
		Top3.push((keyValues[o][0]))
	}
	return Top3;
}

var testCode = sortCode();


for (var i=0; i<=testCode.length-1; i++) {
	console.log(testCode[i])	
	demoAppend(testCode[i]);
}

