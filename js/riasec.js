
var RIASEC = 
{
	Realistic:
	{
		code:"R",
		value:0,
		questions:
		{
			q1:
			{
				question:"I like to work on cars",
				state:1,
				code:"R"
			},
			q7:
			{
				question:"I like to build things",
				state:7,
				code:"R"
			},
			q14:
			{
				question:"I like to take care of animals",
				state:14,
				code:"R"
			},
			q22:
			{
				question:"I like putting things together or assembling things",
				state:22,
				code:"R"
			},
			q30:
			{
				question:"I like to cook",
				state:30,
				code:"R"
			},
			q32:
			{
				question:"I am a practical person",
				state:32,
				code:"R"
			},
			q37:
			{
				question:"I like working outdoors",
				state:37,
				code:"R"
			}
		}
	},
	Investigative:
	{
		code:"I",
		value:0,
		questions:
		{
			q2:
			{
				question:"I like to do puzzles",
				state:2,
				code:"I"
			},
			q11:
			{
				question:"I like to do experiments",
				state:11,
				code:"I"
			},
			q18:
			{
				question:"I enjoy science",
				state:18,
				code:"I"
			},
			q21:
			{
				question:"I enjoy trying to figure out how things work",
				state:22,
				code:"I"
			},
			q26:
			{
				question:"I like to analyze things (problems/ situations)",
				state:26,
				code:"I"
			},
			q39:
			{
				question:"I'm good at math",
				state:39,
				code:"I"
			}
		}
	},
	Artistic:
	{
		code:"A",
		value:0,
		questions:
		{
			q3:
			{
				question:"I'm good at working independently",
				state:3,
				code:"A"
			},
			q8:
			{
				question:"I like to read about art and music",
				state:8,
				code:"A"
			},
			q17:
			{
				question:"I enjoy creative writing",
				state:17,
				code:"A"
			},
			q23:
			{
				question:"I am a creative person",
				state:23,
				code:"A"
			},
			q27:
			{
				question:"I like to play instruments or sing",
				state:27,
				code:"A"
			},
			q31:
			{
				question:"I like acting in plays",
				state:31,
				code:"A"
			},
			q41: {
				question:"I like to draw",
				state:41,
				code:"A"
			}
		}
	},
	Social:
	{
		code:"S",
		value:0,
		questions:
		{
			q4:
			{
				question:"I like to work in teams",
				state:4,
				code:"S"
			},
			q12:
			{
				question:"I like to teach or train people",
				state:12,
				code:"S"
			},
			q13:
			{
				question:"I like trying to help people solve their problems",
				state:13,
				code:"S"
			},
			q20:
			{
				question:"I am interested in healing people",
				state:20,
				code:"S"
			},
			q28:
			{
				question:"I enjoy learning about other cultures",
				state:28,
				code:"S"
			},
			q34:
			{
				question:"I like to get into discussions about issues",
				state:34,
				code:"S"
			},
			q40:
			{
				question:"I like helping people",
				state:40,
				code:"S"
			}
		}
	},
	Enterprising:
	{
		code:"E",
		value:0,
		questions:
			{
				q5:
				{
					question:"I am an ambitious person, I set goals for myself",
					state:5,
					code:"E"
				},
				q10:
				{
					question:"I like to try to influence or persuade people",
					state:10,
					code:"E"
				},
				q16:
				{
					question:"I like selling things",
					state:16,
					code:"E"
				},
				q19:
				{
					question:"I am quick to take on new responsibilities",
					state:19,
					code:"E"
				},
				q29:
				{
					question:"I would like to start my own business",
					state:29,
					code:"E"
				},
				q36:
				{
					question:"I like to lead",
					state:36,
					code:"E"
				},
				q42:
				{
					question:"I like to give speeches",
					state:42,
					code:"E"
				}
			}
	},
	Conventional:
	{
		code:"C",
		value:0,
		questions:
		{
			q6:
			{
				question:"I like to organize things, (files, desks/offices)",
				state:6,
				code:"C"
			},
			q9:
			{
				question:"I like to have clear instructions to follow",
				state:9,
				code:"C"
			},
			q15:
			{
				question:"I wouldn't mind working 8 hours per day in an office",
				state:15,
				code:"C"
			},
			q24:
			{
				question:"I pay attention to details",
				state:24,
				code:"C"
			},
			q25:
			{
				question:"I like to do filing or typing",
				state:25,
				code:"C"
			},
			q35:
			{
				question:"I am good at keeping records of my work",
				state:35,
				code:"C"
			},
			q38:
			{
				question:"I would like to work in an office",
				state:38,
				code:"C"
			}
		}
	}
};


var counter = 0;
var question = [ ];
function createQuestion(question, id, classCode) {
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


	input_Yes.setAttribute("id", "group" + id);
	input_Yes.setAttribute("type", "radio");
	input_Yes.setAttribute("value", "yes");
	input_Yes.setAttribute("onclick", "PlusOne(this)");
	input_Yes.setAttribute("name", "group" + id);
	input_Yes.setAttribute("class", classCode);
	document.getElementById("group" + id).appendChild(label_Yes);
	label_Yes.appendChild(text_Yes);
	label_Yes.appendChild(input_Yes) 
	document.getElementById("group" + id).appendChild(label_Yes);

	input_No.setAttribute("id", "group" + id+"i");
	input_No.setAttribute("type", "radio");
	input_No.setAttribute("value", "no");
	input_No.setAttribute("onclick", "MinaceOne(this)");
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
		createQuestion(question[i].question,counter,question[i].code); //paste questions in webpage
	}
}
sortAndDeploy();



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

function MinaceOne(clicked_class) {
	//reverts back to original code value
	switch(clicked_class.className) {
		case "R":
			if (RIASEC.Realistic.value > 0) {
				RIASEC.Realistic.value -=1;
			}
			break;
		case "I":
			if (RIASEC.Investigative.value > 0) {
				RIASEC.Investigative.value -=1;
			}
			break;
		case "A":
		if (RIASEC.Artistic.value> 0) {
			RIASEC.Artistic.value -=1;
		}
			break;
		case "S":
			if (RIASEC.Social.value> 0) {
				RIASEC.Social.value -=1;
			}
			break;
		case "E":
		if (RIASEC.Enterprising.value> 0) {
			RIASEC.Enterprising.value -=1;
		}
			break;
		case "C":
		if (RIASEC.Conventional.value> 0) {
			RIASEC.Conventional.value -=1;
		}
			break;
}

stateYes(clicked_class);
console.log("R : " + RIASEC.Realistic.value);
console.log("I : " +RIASEC.Investigative.value);
console.log("A : " +RIASEC.Artistic.value);
console.log("S : " +RIASEC.Social.value);
console.log("E : " +RIASEC.Enterprising.value);
console.log("C : " +RIASEC.Conventional.value)
console.log("----------------------------")
}

//change param later
function PlusOne(clicked_class) {
	//+1 on value, records amount
	switch(clicked_class.className) {
		case "R":
			RIASEC.Realistic.value +=1;
			break;
		case "I":
			RIASEC.Investigative.value +=1;
			break;
		case "A":
			RIASEC.Artistic.value +=1;
			break;
		case "S":
			RIASEC.Social.value +=1;
			break;
		case "E":
			RIASEC.Enterprising.value +=1;
			break;
		case "C":
			RIASEC.Conventional.value +=1;
			break;
	}

	stateNo(clicked_class);
	console.log("R : " + RIASEC.Realistic.value);
	console.log("I : " +RIASEC.Investigative.value);
	console.log("A : " +RIASEC.Artistic.value);
	console.log("S : " +RIASEC.Social.value);
	console.log("E : " +RIASEC.Enterprising.value);
	console.log("C : " +RIASEC.Conventional.value)
	console.log("----------------------------")
}
function compareCode(a,b) {
	// sorts RIASEC by high -> least
	return b.value - a.value;
  }


function AnalyzeRIASEC() {
	var reviewRIASEC = [ ];
	var Interest_Code = [ ] //eg ("R", "A", "I")
	var op = "";
	var ipsum = ""
	
	for (var i in RIASEC) {
		reviewRIASEC.push(RIASEC[i])
	}
	reviewRIASEC.sort(compareCode);
	console.log(reviewRIASEC)
	for (var i in reviewRIASEC) {
		Interest_Code.push(reviewRIASEC[i].code);
	}
	reviewRIASEC = [ ]; //refreshes reviewRIASEC
	for (i in Interest_Code) {
		if (i<=2) {
			op+= Interest_Code[i];
		} else {
			ipsum+= Interest_Code[i] //possible feature, list all riasec 
		}
	}	
	console.log("least code: " + ipsum);
	alert(op); //grabs array
}
