//incorporate pretty-checkbox
//incorporate status-bar
//make autoscroll better

//check chDemo for updates


var RIASEC = {
	Realistic: {

		value: 0,
		code: "R",
		list: [],
		questions: {
			q1: {
				question: "I like to work on cars <i id='questionIcon' class='mdi mdi-car-side'></i>",
				state: 1,
				pos: 0,
				code: "R"
			},
			q7: {
				question: "I like to build things <i id='questionIcon' class='mdi mdi-hammer'></i>",
				state: 7,
				pos: 1,
				code: "R"
			},
			q14: {
				question: "I like to take care of animals <i id='questionIcon' class='mdi mdi-paw'></i>",
				state: 14,
				pos: 2,
				code: "R"
			},
			q22: {
				question: "I like putting things together or assembling things <i id='questionIcon' class='mdi mdi-engine'></i>",
				state: 22,
				pos: 3,
				code: "R"
			},
			q30: {
				question: "I like to cook <i id='questionIcon' class='mdi mdi-silverware-spoon'></i>",
				state: 30,
				pos: 4,
				code: "R"
			},
			q32: {
				question: "I am a practical person <i id='questionIcon' class='mdi mdi-comment'></i>",
				state: 32,
				pos: 5,
				code: "R"
			},
			q37: {
				question: "I like working outdoors <i id='questionIcon' class='mdi mdi-nature-people'></i>",
				state: 37,
				pos: 6,
				code: "R"
			}
		}
	},
	Investigative: {
		value: 0,
		code: "I",
		list: [],
		questions: {
			q2: {
				question: "I like to do puzzles <i id='questionIcon' class='mdi mdi-puzzle'></i>",
				state: 2,
				pos: 0,
				code: "I"
			},
			q11: {
				question: "I like to do experiments <i id='questionIcon' class='mdi mdi-flask'></i>",
				state: 11,
				pos: 1,
				code: "I"
			},
			q18: {
				question: "I enjoy science <i id='questionIcon' class='mdi mdi-atom'></i>",
				state: 18,
				pos: 2,
				code: "I"
			},
			q21: {
				question: "I enjoy trying to figure out how things work <i id='questionIcon' class='mdi mdi-cogs'></i>",
				state: 21,
				pos: 3,
				code: "I"
			},
			q26: {
				question: "I like to analyze things (problems/ situations) <i id='questionIcon' class='mdi mdi-comment-question-outline'></i>",
				state: 26,
				pos: 4,
				code: "I"
			},
			q39: {
				question: "I'm good at math <i id='questionIcon' class='mdi mdi-math-compass'></i>",
				state: 39,
				pos: 5,
				code: "I"
			}
		}
	},
	Artistic: {
		value: 0,
		code: "A",
		list: [],
		questions: {
			q3: {
				question: "I'm good at working independently <i id='questionIcon' class='mdi mdi-human-male'></i>",
				state: 3,
				pos: 0,
				code: "A"
			},
			q8: {
				question: "I like to read about art and music <i id='questionIcon' class='mdi mdi-music'></i>",
				state: 8,
				pos: 1,
				code: "A"
			},
			q17: {
				question: "I enjoy creative writing <i id='questionIcon' class='mdi mdi-pen'></i>",
				state: 17,
				pos: 2,
				code: "A"
			},
			q23: {
				question: "I am a creative person <i id='questionIcon' class='mdi mdi-human-handsup'></i>",
				state: 23,
				pos: 3,
				code: "A"
			},
			q27: {
				question: "I like to play instruments or sing <i id='questionIcon' class='mdi mdi-guitar-acoustic'></i>",
				state: 27,
				pos: 4,
				code: "A"
			},
			q31: {
				question: "I like acting in plays <i id='questionIcon' class='mdi mdi-karate'></i>",
				state: 31,
				pos: 5,
				code: "A"
			},
			q41: {
				question: "I like to draw <i id='questionIcon' class='mdi mdi-pencil'></i>",
				state: 41,
				pos: 6,
				code: "A"
			}
		}
	},
	Social: {
		value: 0,
		code: "S",
		list: [],
		questions: {
			q4: {
				question: "I like to work in teams <i id='questionIcon' class='mdi mdi-account-multiple'></i>",
				state: 4,
				pos: 0,
				code: "S"
			},
			q12: {
				question: "I like to teach or train people <i id='questionIcon' class='mdi mdi-teach'></i>",
				state: 12,
				pos: 1,
				code: "S"
			},
			q13: {
				question: "I like trying to help people solve their problems <i id='questionIcon' class='mdi mdi-account-settings-variant'></i>",
				state: 13,
				pos: 2,
				code: "S"
			},
			q20: {
				question: "I am interested in healing people <i id='questionIcon' class='mdi mdi-medical-bag'></i>",
				state: 20,
				pos: 3,
				code: "S"
			},
			q28: {
				question: "I enjoy learning about other cultures <i id='questionIcon' class='mdi mdi-human-male-female'></i>",
				state: 28,
				pos: 4,
				code: "S"
			},
			q34: {
				question: "I like to get into discussions about issues <i id='questionIcon' class='mdi mdi-alert'></i>",
				state: 34,
				pos: 5,
				code: "S"
			},
			q40: {
				question: "I like helping people <i id='questionIcon' class='mdi mdi-account-multiple-outline'></i>",
				state: 40,
				pos: 6,
				code: "S"
			}
		}
	},
	Enterprising: {
		value: 0,
		code: "E",
		list: [],
		questions: {
			q5: {
				question: "I am an ambitious person, I set goals for myself <i id='questionIcon' class='mdi mdi-star'></i>",
				state: 5,
				pos: 0,
				code: "E"
			},
			q10: {
				question: "I like to try to influence or persuade people <i id='questionIcon' class='mdi mdi-account-group'></i>",
				state: 10,
				pos: 1,
				code: "E"
			},
			q16: {
				question: "I like selling things <i id='questionIcon' class='mdi mdi-package-variant'></i>",
				state: 16,
				pos: 2,
				code: "E"
			},
			q19: {
				question: "I am quick to take on new responsibilities <i id='questionIcon' class='mdi mdi-autorenew'></i>",
				state: 19,
				pos: 3,
				code: "E"
			},
			q29: {
				question: "I would like to start my own business <i id='questionIcon' class='mdi mdi-domain'></i>",
				state: 29,
				pos: 4,
				code: "E"
			},
			q36: {
				question: "I like to lead <i id='questionIcon' class='mdi mdi-human-greeting'></i>",
				state: 36,
				pos: 5,
				code: "E"
			},
			q42: {
				question: "I like to give speeches <i id='questionIcon' class='mdi mdi-microphone-variant'></i>",
				state: 42,
				pos: 6,
				code: "E"
			}
		}
	},
	Conventional: {
		value: 0,
		code: "C",
		list: [],
		questions: {
			q6: {
				question: "I like to organize things (files, desks/offices) <i id='questionIcon' class='mdi mdi-folder-open'></i>",
				state: 6,
				pos: 0,
				code: "C"
			},
			q9: {
				question: "I like to have clear instructions to follow <i id='questionIcon' class='mdi mdi-file-document'></i>",
				state: 9,
				pos: 1,
				code: "C"
			},
			q15: {
				question: "I wouldn't mind working 8 hours per day in an office <i id='questionIcon' class='mdi mdi-tie'></i>",
				state: 15,
				pos: 2,
				code: "C"
			},
			q24: {
				question: "I pay attention to details <i id='questionIcon' class='mdi mdi-magnify'></i>",
				state: 24,
				pos: 3,
				code: "C"
			},
			q25: {
				question: "I like to do filing or typing <i id='questionIcon' class='mdi mdi-file-document-box'></i>",
				state: 25,
				pos: 4,
				code: "C"
			},
			q35: {
				question: "I am good at keeping records of my work <i id='questionIcon' class='mdi mdi-folder-multiple'></i>",
				state: 35,
				pos: 5,
				code: "C"
			},
			q38: {
				question: "I would like to work in an office <i id='questionIcon' class='mdi mdi-laptop'></i>",
				state: 38,
				pos: 6,
				code: "C"
			}
		}
	}
};

window.onbeforeunload = function () {
	return "Data will be lost if you leave the page, are you sure?";
};

var counter = 0;
var question = [];

function createQuestion(question, id, classCode, qNum) {
	//contructs layout of question box
	var iconY = document.createElement("i")
	iconY.setAttribute("class", "icon mdi mdi-check");
	var iconN = document.createElement("i");
	iconN.setAttribute("class", "icon mdi mdi-close");
	var successDiv = document.createElement("div");
	successDiv.setAttribute("class", "state p-success")
	var DangerDiv = document.createElement("div");
	DangerDiv.setAttribute("class", "state p-danger");
	var Container = document.createElement("div");
	Container.setAttribute("class", "InputContainer")

	var AgreeDiv = document.createElement("div");
	AgreeDiv.setAttribute("id", "YesBox");
	AgreeDiv.setAttribute("class", "pretty p-icon p-round p-plain p-smooth")

	var DisagreeDiv = document.createElement("div");
	DisagreeDiv.setAttribute("id", "NoBox");
	DisagreeDiv.setAttribute("class", "pretty p-icon p-round p-plain p-smooth")

	var PElem = document.createElement("P"); // </br>
	PElem.innerHTML = question;
	var breaking = document.createElement("br"); // </br>
	var fieldset = document.createElement("fieldset"); // <fieldset>
	var div = document.createElement("div");
	var label_Yes = document.createElement("label"); // yes <label>
	label_Yes.innerHTML = " ";
	var label_No = document.createElement("label"); // no <label>
	label_No.innerHTML = " ";
	var input_Yes = document.createElement("input"); // yes <input>
	var input_No = document.createElement("input"); // no <input>


	fieldset.setAttribute("id", "group" + id);
	fieldset.className += classCode;
	fieldset.appendChild(PElem)
	fieldset.appendChild(breaking)
	document.getElementById("questionContainer").appendChild(fieldset);






	input_No.setAttribute("qNum", qNum);
	input_No.setAttribute("id", "group" + id + "i");
	input_No.setAttribute("type", "radio");
	input_No.setAttribute("value", "no");
	input_No.setAttribute("onclick", "changeState2(this)");
	input_No.setAttribute("class", classCode);
	input_No.setAttribute("name", "group" + id);
	document.getElementById("group" + id).appendChild(label_No);
	DangerDiv.appendChild(iconN)
	DangerDiv.appendChild(label_No)
	DisagreeDiv.appendChild(input_No)
	DisagreeDiv.appendChild(DangerDiv);
	Container.appendChild(DisagreeDiv);
	document.getElementById("group" + id).appendChild(Container);
	input_Yes.setAttribute("qNum", qNum);
	input_Yes.setAttribute("id", "group" + id);
	input_Yes.setAttribute("type", "radio");
	input_Yes.setAttribute("value", "yes");
	input_Yes.setAttribute("onclick", "changeState(this)");
	input_Yes.setAttribute("name", "group" + id);
	input_Yes.setAttribute("class", classCode);
	document.getElementById("group" + id).appendChild(label_Yes);
	successDiv.appendChild(iconY)
	successDiv.appendChild(label_Yes)
	AgreeDiv.appendChild(input_Yes)
	AgreeDiv.appendChild(successDiv);
	//label_Yes.appendChild(input_Yes)
	Container.appendChild(AgreeDiv);



	return fieldset;
}

function custom_compare(a, b) {
	// sorts question order least -> greatest
	return a.state - b.state;
}


function GenerateList() {
	for (var i in RIASEC) {
		Object.keys(RIASEC[i].questions).forEach(key => {
			RIASEC[i].list.push("M");
		});
	};
}
GenerateList();


function createBox() {
	var box = document.createElement("DIV");
	box.className += "box"
	return box;

}

var bttn = document.createElement("button");
bttn.innerHTML = "next";
bttn.setAttribute("onclick", "nextBox()");
bttn.id = "next"

var bttn2 = document.createElement("button");
bttn2.innerHTML = "previous";
bttn2.setAttribute("onclick", "previousBox()");
bttn2.id = "previous"

var bttnContainer = document.createElement("div");
bttnContainer.id = "container";

var box1 = createBox();
box1.className += " animated FlipInY";
var box2 = createBox();
box2.className += " animated FlipInY";
var box3 = createBox();
box3.className += " animated FlipInY";
var box4 = createBox();
box4.className += " animated FlipInY";

var box5 = createBox();
box5.className += " animated FlipInY";
var box6 = createBox();
box6.className += " animated FlipInY ";
var currentBoxIndex = [box1, box2, box3, box4, box5, box6];

var counter2 = 0;



function buttonCheck() {
	if (counter2 > 1) {
		document.getElementById("demoTest").style.display = "block"
	} else {
		document.getElementById("demoTest").style.display = "none"
	}

	if (counter2 == 4) {
		document.getElementById("demoTest2").style.display = "none"
	} else {
		document.getElementById("demoTest2").style.display = "block"
	}
}
buttonCheck();

var progressStat = 0;
var pBox1 = document.getElementById('progressBox1');
var pBox2 = document.getElementById('progressBox2');
var pBox3 = document.getElementById('progressBox3');
var pBox4 = document.getElementById('progressBox4');
var pBox5 = document.getElementById('progressBox5');
var progressBoxes = [pBox1, pBox2, pBox3, pBox4, pBox5];
function nextBox() {
	progressBoxes[progressStat].style.color = "yellow";
	progressStat +=1;
	buttonCheck();
	if (counter2 >= 0) {
		document.getElementById("demoTest").style.display = "block"
	}

	pos = 300;

	if (counter2 <= 4) {
		document.getElementById("questionContainer").innerHTML = "";
		document.getElementById("questionContainer").appendChild(currentBoxIndex[counter2 + 1])
		counter2++;
		console.log(counter2);
	}
}

function previousBox() {
	buttonCheck();
	pos = 300;

	if (counter2 == 0) {
		console.log("no");
	} else {
		document.getElementById("questionContainer").innerHTML = "";
		document.getElementById("questionContainer").appendChild(currentBoxIndex[counter2 - 1])
		counter2--;
	}
	console.log(counter2);
}

function sortAndDeploy() {
	//activates sort function then deploys question based on sorting order
	for (var i in RIASEC) {
		Object.keys(RIASEC[i].questions).forEach(key => {
			question.push(RIASEC[i].questions[key])
		})
	};

	var questionArray = []
	question.sort(custom_compare);
	for (var i in question) {
		counter++; //ID'ed indiv fieldset (eg. id="group1", "group2" ... "group32" ...)
		questionArray.push(createQuestion(question[i].question, counter, question[i].code, question[i].pos)); //paste questions in webpage
	}



	var chunk;
	var newArray = [];
	while (questionArray.length > 0) {

		chunk = questionArray.splice(0, 7);
		newArray.push(chunk);
	}
	console.log(newArray);


	//bad code. find a more condense version of this.
	for (var l = 0; l <= 6; l++) {
		box1.appendChild(newArray[0][l])
	}

	box1.appendChild(bttnContainer.cloneNode(true));

	for (var l = 0; l <= 6; l++) {
		box2.appendChild(newArray[1][l])
	}

	box2.appendChild(bttnContainer.cloneNode(true));

	for (var l = 0; l <= 6; l++) {
		box3.appendChild(newArray[2][l])
	}
	box3.appendChild(bttnContainer.cloneNode(true));

	for (var l = 0; l <= 6; l++) {
		box4.appendChild(newArray[3][l])
	}
	box4.appendChild(bttnContainer.cloneNode(true));

	for (var l = 0; l <= 6; l++) {
		box5.appendChild(newArray[4][l])
	}
	box5.appendChild(bttnContainer.cloneNode(true));
	for (var z = 0; z <= 5; z++) {
		box6.appendChild(newArray[5][z])
	}

	box6.appendChild(bttnContainer.cloneNode(true));

	document.getElementById("questionContainer").appendChild(currentBoxIndex[0]);
	console.log(questionArray);
	createButton("submit", "Submit", "AnalyzeRIASEC()", "<span>Submit Riasec</span>", "submitclass")
}



function createButton(id, value, onclick, prompt, classString) {
	var bttn = document.createElement("button");
	bttn.className = classString;
	bttn.id = id;
	bttn.value = value;
	bttn.setAttribute("onclick", onclick);
	bttn.innerHTML = prompt;
	document.getElementById("buttonContainer").appendChild(bttn)
}

function ViewResults() {
	window.location.href = "../pages/chooseOption.html";
}

function retakeRIASEC() {
	document.getElementById('demoTest2').style.display = "none";
	var PElem = document.createElement("P");
	var PElem2 = document.createElement("P");
	var PElem3 = document.createElement("P");
	var code = document.cookie.split('');

	PElem.innerHTML = "you've already taken RIASEC! Your score was";
	PElem2.innerHTML = code[0] + ' ' + code[1] + ' ' + code[2];
	PElem2.style.textAlign = 'center';
	PElem2.style.fontSize = '50px';
	PElem3.innerHTML = "do you want a retake?"
	PElem3.style.textAlign = 'center';
	document.getElementById("questionContainer").appendChild(PElem);
	document.getElementById("questionContainer").appendChild(PElem2);
	document.getElementById("questionContainer").appendChild(PElem3);
	createButton("retake", "Retake", "retakeTest()", "Retake RIASEC", "retakeClass");
	createButton("view", "View", "ViewResults()", "View Your Results", "retakeClass");
}

function retakeTest() {
	document.getElementById("questionContainer").innerHTML = " ";
	document.getElementById("buttonContainer").innerHTML = " ";
	sortAndDeploy();
}

function checkCode() {
	if (!document.cookie.length) {
		console.log("take it")
		sortAndDeploy();
	} else {
		console.log("youve already taken it")
		retakeRIASEC();
	}
}
checkCode();
console.log(RIASEC.Realistic.list);




var pos = 300;

function changeState(thisElem) {


	switch (thisElem.className) {
		case "R":
			RIASEC.Realistic.list[thisElem.getAttribute("qnum")] = "A"
			console.log(RIASEC.Realistic.list);
			break;
		case "I":
			RIASEC.Investigative.list[thisElem.getAttribute("qnum")] = "A"
			console.log(RIASEC.Investigative.list);
			break;
		case "A":
			RIASEC.Artistic.list[thisElem.getAttribute("qnum")] = "A"
			console.log(RIASEC.Artistic.list);
			break;
		case "S":
			RIASEC.Social.list[thisElem.getAttribute("qnum")] = "A"
			console.log(RIASEC.Social.list);
			break;
		case "E":
			RIASEC.Enterprising.list[thisElem.getAttribute("qnum")] = "A"
			console.log(RIASEC.Enterprising.list);
			break;
		case "C":
			RIASEC.Conventional.list[thisElem.getAttribute("qnum")] = "A"
			console.log(RIASEC.Conventional.list);
			break;
	}
	console.log("R : " + RIASEC.Realistic.list);
	console.log("I : " + RIASEC.Investigative.list);
	console.log("A : " + RIASEC.Artistic.list);
	console.log("S : " + RIASEC.Social.list);
	console.log("E : " + RIASEC.Enterprising.list);
	console.log("C : " + RIASEC.Conventional.list);
	console.log(thisElem.id)
	if (thisElem.id === "group7" || thisElem.id === "group14" || thisElem.id === "group21" || thisElem.id === "group28" || thisElem.id === "group35") {
		nextBox();
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	} else {
		$('html, body').animate({
			scrollTop: pos
		}, 800);
		pos += 150;
	}
}



function changeState2(thisElem) {
	switch (thisElem.className) {
		case "R":
			RIASEC.Realistic.list[thisElem.getAttribute("qnum")] = "B"
			console.log(RIASEC.Realistic.list);
			break;
		case "I":
			RIASEC.Investigative.list[thisElem.getAttribute("qnum")] = "B"
			console.log(RIASEC.Investigative.list);
			break;
		case "A":
			RIASEC.Artistic.list[thisElem.getAttribute("qnum")] = "B"
			console.log(RIASEC.Artistic.list);
			break;
		case "S":
			RIASEC.Social.list[thisElem.getAttribute("qnum")] = "B"
			console.log(RIASEC.Social.list);
			break;
		case "E":
			RIASEC.Enterprising.list[thisElem.getAttribute("qnum")] = "B"
			console.log(RIASEC.Enterprising.list);
			break;
		case "C":
			RIASEC.Conventional.list[thisElem.getAttribute("qnum")] = "B"
			console.log(RIASEC.Conventional.list);
			break;
	}
	console.log("R : " + RIASEC.Realistic.list);
	console.log("I : " + RIASEC.Investigative.list);
	console.log("A : " + RIASEC.Artistic.list);
	console.log("S : " + RIASEC.Social.list);
	console.log("E : " + RIASEC.Enterprising.list);
	console.log("C : " + RIASEC.Conventional.list);
	console.log(thisElem.id)

	if (thisElem.id === "group7i" || thisElem.id === "group14i" || thisElem.id === "group21i" || thisElem.id === "group28i" || thisElem.id === "group35i") {
		nextBox();
		$('html, body').animate({
			scrollTop: 0
		}, 800);
	} else {
		$('html, body').animate({
			scrollTop: pos
		}, 800);
		pos += 150;
	}


}


function custom_compare3(a, b) {
	// sorts question order least -> greatest
	return a.value - b.value;
}


function checkMissing(riasecObj) {
	for (var i in riasecObj) {
		for (var k in riasecObj[i].list) {
			if (riasecObj[i].list[k] === "M") {
				if (confirm("You haven't completed RIASEC! the more you answer the more accurate your data will be. Are you sure you want to continue?")) {
					return true;
				} else {
					return false;
				}
			}
		}
		return true;
	}
}



//temporarily analysis
function AnalyzeRIASEC() {
	var Interest_Code = [] //eg ("R", "A", "I")
	var op = "";
	var ipsum = "";
	if (checkMissing(RIASEC)) {

		for (var i in RIASEC) {
			for (var k in RIASEC[i].list) {
				if (RIASEC[i].list[k] == "A") {
					RIASEC[i].value += 1;
				}
			}
			console.log(RIASEC[i].code + " : " + RIASEC[i].value);
			Interest_Code.push({
				key: RIASEC[i].code,
				value: RIASEC[i].value
			});
		}

		Interest_Code.sort(function (a, b) {
			return b.value - a.value;
		});


		for (var i in Interest_Code) {
			if (i <= 2) {
				op += Interest_Code[i].key
			} else {
				ipsum += Interest_Code[i].key
			}
		}


		localStorage.setItem("R", RIASEC.Realistic.list);
		console.log("Interest_Code");
		console.log(ipsum);
		localStorage.setItem('Realistic', RIASEC.Realistic.list);
		localStorage.setItem('Investigative', RIASEC.Investigative.list);
		localStorage.setItem('Artistic', RIASEC.Artistic.list);
		localStorage.setItem('Social', RIASEC.Social.list);
		localStorage.setItem('Enterprising', RIASEC.Enterprising.list);
		localStorage.setItem('Conventional', RIASEC.Conventional.list);

		document.cookie = op;
		document.location.href = '../pages/chooseOption.html';
	}

}