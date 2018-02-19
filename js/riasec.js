var RIASEC = 
{
	Realistic:
	{
		value:0,
		questions:
		{
			q1:
			{
				question:"I like to work on cars",
				state:1
			},
			q7:
			{
				question:"I like to build things",
				state:7
			},
			q14:
			{
				question:"I like to take care of animals",
				state:14
			},
			q22:
			{
				question:"I like putting things together or assembling things",
				state:22
			},
			q30:
			{
				question:"I like to cook",
				state:30
			},
			q32:
			{
				question:"I am a practical person",
				state:32
			},
			q37:
			{
				question:"I like working outdoors",
				state:37
			}
		}
	},
	Investigative:
	{
		value:0,
		questions:
		{
			q2:
			{
				question:"I like to do puzzles",
				state:2
			},
			q11:
			{
				question:"I like to do experiments",
				state:11
			},
			q18:
			{
				question:"I enjoy science",
				state:18
			},
			q21:
			{
				question:"I enjoy trying to figure out how things work",
				state:22
			},
			q26:
			{
				question:"I like to analyze things (problems/ situations)",
				state:26
			},
			q39:
			{
				question:"I'm good at math",
				state:39
			}
		}
	},
	Artistic:
	{
		value:0,
		questions:
		{
			q3:
			{
				question:"I'm good at working independently",
				state:3
			},
			q8:
			{
				question:"I like to read about art and music",
				state:8
			},
			q17:
			{
				question:"I enjoy creative writing",
				state:17
			},
			q23:
			{
				question:"I am a creative person",
				state:23
			},
			q27:
			{
				question:"I like to play instruments or sing",
				state:27
			},
			q31:
			{
				question:"I like acting in plays",
				state:31
			},
			q41: {
				question:"I like to draw",
				state:41
			}
		}
	},
	Social:
	{
		value:0,
		questions:
		{
			q4:
			{
				question:"I like to work in teams",
				state:4
			},
			q12:
			{
				question:"I like to teach or train people",
				state:12
			},
			q13:
			{
				question:"I like trying to help people solve their problems",
				state:13
			},
			q20:
			{
				question:"I am interested in healing people",
				state:20
			},
			q28:
			{
				question:"I enjoy learning about other cultures",
				state:28
			},
			q34:
			{
				question:"I like to get into discussions about issues",
				state:34
			},
			q40:
			{
				question:"I like helping people",
				state:40
			}
		}
	},
	Enterprising:
	{
		value:0,
		questions:
			{
				q5:
				{
					question:"I am an ambitious person, I set goals for myself",
					state:5
				},
				q10:
				{
					question:"I like to try to in uence or persuade people",
					state:10
				},
				q16:
				{
					question:"I like selling things",
					state:16
				},
				q19:
				{
					question:"I am quick to take on new responsibilities",
					state:19
				},
				q29:
				{
					question:"I would like to start my own business",
					state:29
				},
				q36:
				{
					question:"I like to lead",
					state:36
				},
				q42:
				{
					question:"I like to give speeches",
					state:42
				}
			}
	},
	Conventional:
	{
		value:0,
		questions:
		{
			q6:
			{
				question:"I like to organize things, (files, desks/offices)",
				state:6
			},
			q9:
			{
				question:"I like to have clear instructions to follow",
				state:9
			},
			q15:
			{
				question:"I wouldn't mind working 8 hours per day in an office",
				state:15
			},
			q24:
			{
				question:"I pay attention to details",
				state:24
			},
			q25:
			{
				question:"I like to do fiing or typing",
				state:25
			},
			q35:
			{
				question:"I am good at keeping records of my work",
				state:35
			},
			q38:
			{
				question:"I would like to work in an office",
				state:38
			}
		}
	}
}

function createQuestion(question, id) {

	var breaking = document.createElement("br");
	var fieldset = document.createElement("fieldset");
	var label_Yes = document.createElement("label");
	var label_No = document.createElement("label");
	fieldset.setAttribute("id", "group" + id);
	var QuestionPrompt = document.createTextNode(question);
	fieldset.className += "questionForm";
	fieldset.appendChild(QuestionPrompt)
	fieldset.appendChild(breaking)
	document.getElementById("questionContainer").appendChild(fieldset);


	var input_Yes = document.createElement("input");
	input_Yes.setAttribute("id", "group" + id);
	input_Yes.setAttribute("type", "radio");
	input_Yes.setAttribute("value", "yes");
	input_Yes.setAttribute("name", "group" + id);
	document.getElementById("group" + id).appendChild(label_Yes);
	var text = document.createTextNode("yes");
	label_Yes.appendChild(text);
	label_Yes.appendChild(input_Yes) 
	document.getElementById("group" + id).appendChild(label_Yes);

	var input_No = document.createElement("input");
	input_No.setAttribute("id", "group" + id+"i");
	input_No.setAttribute("type", "radio");
	input_No.setAttribute("value", "no");
	input_No.setAttribute("name", "group" + id);
	document.getElementById("group" + id).appendChild(label_No);
	var text_No= document.createTextNode("no");
	label_No.appendChild(text_No);
	label_No.appendChild(input_No);
	document.getElementById("group" + id).appendChild(label_No);
}

var counter = 0;
var question = [ ];



function custom_compare (a,b) {
	// sorts question
	return a.state - b.state;
  }

function sortQuestion() {
	for (var i in RIASEC) {
		Object.keys(RIASEC[i].questions).forEach(key => {
			question.push(RIASEC[i].questions[key])	
			question.sort(custom_compare)
			});
		}
};	

sortQuestion();
for (var i in question) {
	counter++;
	createQuestion(question[i].question, counter);
}