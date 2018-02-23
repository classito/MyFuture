
var RIASEC = 
{
	Realistic:
	{

		value:0,
		code:"R",
		list: [ ],
		questions:
		{
			q1:
			{
				question:"I like to work on cars",
				state:1,
				pos:0,
				code:"R"
			},
			q7:
			{
				question:"I like to build things",
				state:7,
				pos:1,
				code:"R"
			},
			q14:
			{
				question:"I like to take care of animals",
				state:14,
				pos:2,
				code:"R"
			},
			q22:
			{
				question:"I like putting things together or assembling things",
				state:22,
				pos:3,
				code:"R"
			},
			q30:
			{
				question:"I like to cook",
				state:30,
				pos:4,
				code:"R"
			},
			q32:
			{
				question:"I am a practical person",
				state:32,
				pos:5,
				code:"R"
			},
			q37:
			{
				question:"I like working outdoors",
				state:37,
				pos:6,
				code:"R"
			}
		}
	},
	Investigative:
	{
		value:0,
		code:"I",
		list: [ ],
		questions:
		{
			q2:
			{
				question:"I like to do puzzles",
				state:2,
				pos:0,
				code:"I"
			},
			q11:
			{
				question:"I like to do experiments",
				state:11,
				pos:1,
				code:"I"
			},
			q18:
			{
				question:"I enjoy science",
				state:18,
				pos:2,
				code:"I"
			},
			q21:
			{
				question:"I enjoy trying to figure out how things work",
				state:22,
				pos:3,
				code:"I"
			},
			q26:
			{
				question:"I like to analyze things (problems/ situations)",
				state:26,
				pos:4,
				code:"I"
			},
			q39:
			{
				question:"I'm good at math",
				state:39,
				pos:5,
				code:"I"
			}
		}
	},
	Artistic:
	{
		value:0,
		code:"A",
		list: [ ],
		questions:
		{
			q3:
			{
				question:"I'm good at working independently",
				state:3,
				pos:0,
				code:"A"
			},
			q8:
			{
				question:"I like to read about art and music",
				state:8,
				pos:1,
				code:"A"
			},
			q17:
			{
				question:"I enjoy creative writing",
				state:17,
				pos:2,
				code:"A"
			},
			q23:
			{
				question:"I am a creative person",
				state:23,
				pos:3,
				code:"A"
			},
			q27:
			{
				question:"I like to play instruments or sing",
				state:27,
				pos:4,
				code:"A"
			},
			q31:
			{
				question:"I like acting in plays",
				state:31,
				pos:5,
				code:"A"
			},
			q41: {
				question:"I like to draw",
				state:41,
				pos:6,
				code:"A"
			}
		}
	},
	Social:
	{
		value:0,
		code:"S",
		list: [ ],
		questions:
		{
			q4:
			{
				question:"I like to work in teams",
				state:4,
				pos:0,
				code:"S"
			},
			q12:
			{
				question:"I like to teach or train people",
				state:12,
				pos:1,
				code:"S"
			},
			q13:
			{
				question:"I like trying to help people solve their problems",
				state:13,
				pos:2,
				code:"S"
			},
			q20:
			{
				question:"I am interested in healing people",
				state:20,
				pos:3,
				code:"S"
			},
			q28:
			{
				question:"I enjoy learning about other cultures",
				state:28,
				pos:4,
				code:"S"
			},
			q34:
			{
				question:"I like to get into discussions about issues",
				state:34,
				pos:5,
				code:"S"
			},
			q40:
			{
				question:"I like helping people",
				state:40,
				pos:6,
				code:"S"
			}
		}
	},
	Enterprising:
	{
		value:0,
		code:"E",
		list: [ ],
		questions:
			{
				q5:
				{
					question:"I am an ambitious person, I set goals for myself",
					state:5,
					pos:0,
					code:"E"
				},
				q10:
				{
					question:"I like to try to influence or persuade people",
					state:10,
					pos:1,
					code:"E"
				},
				q16:
				{
					question:"I like selling things",
					state:16,
					pos:2,
					code:"E"
				},
				q19:
				{
					question:"I am quick to take on new responsibilities",
					state:19,
					pos:3,
					code:"E"
				},
				q29:
				{
					question:"I would like to start my own business",
					state:29,
					pos:4,
					code:"E"
				},
				q36:
				{
					question:"I like to lead",
					state:36,
					pos:5,
					code:"E"
				},
				q42:
				{
					question:"I like to give speeches",
					state:42,
					pos:6,
					code:"E"
				}
			}
	},
	Conventional:
	{
		value:0,
		code:"C",
		list: [ ],
		questions:
		{
			q6:
			{
				question:"I like to organize things, (files, desks/offices)",
				state:6,
				pos:0,
				code:"C"
			},
			q9:
			{
				question:"I like to have clear instructions to follow",
				state:9,
				pos:1,
				code:"C"
			},
			q15:
			{
				question:"I wouldn't mind working 8 hours per day in an office",
				state:15,
				pos:2,
				code:"C"
			},
			q24:
			{
				question:"I pay attention to details",
				state:24,
				pos:3,
				code:"C"
			},
			q25:
			{
				question:"I like to do filing or typing",
				state:25,
				pos:4,
				code:"C"
			},
			q35:
			{
				question:"I am good at keeping records of my work",
				state:35,
				pos:5,
				code:"C"
			},
			q38:
			{
				question:"I would like to work in an office",
				state:38,
				pos:6,
				code:"C"
			}
		}
	}
};

var counter = 0;
var question = [ ];
function createQuestion(question, id, classCode, qNum) {
	//contructs layout of question box

	var QuestionPrompt = document.createTextNode(question);
	var breaking = document.createElement("br"); // </br>
	var fieldset = document.createElement("fieldset"); // <fieldset>
	var label_Yes = document.createElement("label"); // yes <label>
	var label_No = document.createElement("label"); // no <label>
	var input_Yes = document.createElement("input"); // yes <input>
	var input_No = document.createElement("input"); // no <input>
	var text_No= document.createTextNode("no"); //no value
	var text_Yes = document.createTextNode("yes"); //yes value

	fieldset.setAttribute("id", "group" + id);
	fieldset.className += classCode;
	fieldset.appendChild(QuestionPrompt)
	fieldset.appendChild(breaking)
	document.getElementById("questionContainer").appendChild(fieldset);

	input_Yes.setAttribute("qNum", qNum);
	input_Yes.setAttribute("id", "group" + id);
	input_Yes.setAttribute("type", "radio");
	input_Yes.setAttribute("value", "yes");
	input_Yes.setAttribute("onclick", "changeState(this)");
	input_Yes.setAttribute("name", "group" + id);
	input_Yes.setAttribute("class", classCode);
	document.getElementById("group" + id).appendChild(label_Yes);
	label_Yes.appendChild(text_Yes);
	label_Yes.appendChild(input_Yes) 
	document.getElementById("group" + id).appendChild(label_Yes);

	input_No.setAttribute("qNum", qNum);
	input_No.setAttribute("id", "group" + id+"i");
	input_No.setAttribute("type", "radio");
	input_No.setAttribute("value", "no");
	input_No.setAttribute("onclick", "changeState2(this)");
	input_No.setAttribute("class", classCode);
	input_No.setAttribute("name", "group" + id);
	document.getElementById("group" + id).appendChild(label_No);
	label_No.appendChild(text_No);
	label_No.appendChild(input_No);
	document.getElementById("group" + id).appendChild(label_No);
}

function custom_compare (a,b) {
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

function sortAndDeploy() {
	//activates sort function then deploys question based on sorting order
	for (var i in RIASEC) {
		Object.keys(RIASEC[i].questions).forEach(key => {
			question.push(RIASEC[i].questions[key])
		}
	)};	
	question.sort(custom_compare) 
	for (var i in question) {
		counter++; //ID'ed indiv fieldset (eg. id="group1", "group2" ... "group32" ...)
		createQuestion(question[i].question,counter,question[i].code, question[i].pos); //paste questions in webpage
	}
}
sortAndDeploy();

console.log(RIASEC.Realistic.list);
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
	
}

function changeState2(thisElem) {
	console.log(thisElem.className);
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
}


function stateYes(elem) {
	//click works only once, disables infinite increment onclick
	var stateOfYesName = elem.id; //group1i
	var stateOfYes = document.querySelectorAll("#" + stateOfYesName.slice(0, -1))[1]; //gets inputYes element
	console.log(stateOfYes);
	stateOfYes.className = document.querySelectorAll("#" + stateOfYesName.slice(0, -1))[0].className; //changes inputYes className to parent className
	elem.className = "none"; //remove className, disables infinite increments onClick
}

function stateNo(elem) {
	//click works only once, disables infinite increment onclick
	var stateOfNo = document.getElementById(elem.id + "i"); //elem of No_Input

	stateOfNo.className = document.querySelectorAll("#" + elem.id)[0].className; //changes inputNo className to parent className
	console.log(stateOfNo);
	elem.className = "none"; //remove className, disables infinite increments onClick
}

function custom_compare3 (a,b) {
	// sorts question order least -> greatest
	return a.value - b.value;
  }

  
//temporarily analysis
function AnalyzeRIASEC() {
	var Interest_Code = [ ] //eg ("R", "A", "I")
	var op = "";
	var ipsum = "";
	
	for (var i in RIASEC) {
		for (var k in RIASEC[i].list) {
			if (RIASEC[i].list[k] == "A") {
				RIASEC[i].value += 1;
			}
		}
		console.log(RIASEC[i].code + " : " + RIASEC[i].value);
		Interest_Code.push({
			key:   RIASEC[i].code,
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


	console.log("Interest_Code");
	alert(op) //grabs array
	console.log(ipsum);
	document.cookie = op
	document.location.href = '../pages/output.html';
}



