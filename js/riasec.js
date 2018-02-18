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
				state:0
			},
			q7:
			{
				question:"I like to build things",
				state:0
			},
			q14:
			{
				question:"I like to take care of animals",
				state:0
			},
			q22:
			{
				question:"I like putting things together or assembling things",
				state:0
			},
			q30:
			{
				question:"I like to cook",
				state:0
			},
			q32:
			{
				question:"I am a practical person",
				state:0
			},
			q37:
			{
				question:"I like working outdoors",
				state:0
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
				state:0
			},
			q11:
			{
				question:"I like to do experiments",
				state:0
			},
			q18:
			{
				question:"I enjoy science",
				state:0
			},
			q21:
			{
				question:"I enjoy trying to figure out how things work",
				state:0
			},
			q26:
			{
				question:"I like to analyze things (problems/ situations)",
				state:0
			},
			q39:
			{
				question:"I'm good at math",
				state:0
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
				question:"I am good at working independently",
				state:0
			},
			q8:
			{
				question:"I like to read about art and music",
				state:0
			},
			q17:
			{
				question:"I enjoy creative writing",
				state:0
			},
			q23:
			{
				question:"I am a creative person",
				state:0
			},
			q27:
			{
				question:"I like to play instruments or sing",
				state:0
			},
			q31:
			{
				question:"I like acting in plays",
				state:0
			},
			q41: {
				questions:"I like to draw",
				state:0
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
				state:0
			},
			q12:
			{
				question:"I like to teach or train people",
				state:0
			},
			q13:
			{
				question:"I like trying to help people solve their problems",
				state:0
			},
			q20:
			{
				question:"I am interested in healing people",
				state:0
			},
			q28:
			{
				question:"I enjoy learning about other cultures",
				state:0
			},
			q34:
			{
				question:"I like to get into discussions about issues",
				state:0
			},
			q40:
			{
				question:"I like helping people",
				state:0
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
					state:0
				},
				q10:
				{
					question:"I like to try to in uence or persuade people",
					state:0
				},
				q16:
				{
					question:"I like selling things",
					state:0
				},
				q19:
				{
					question:"I am quick to take on new responsibilities",
					state:0
				},
				q29:
				{
					question:"I would like to start my own business",
					state:0
				},
				q36:
				{
					question:"I like to lead",
					state:0
				},
				q42:
				{
					question:"I like to give speeches",
					state:0
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
				state:0
			},
			q9:
			{
				question:"I like to have clear instructions to follow",
				state:0
			},
			q15:
			{
				question:"I wouldn't mind working 8 hours per day in an office",
				state:0
			},
			q24:
			{
				question:"I pay attention to details",
				state:0
			},
			q25:
			{
				question:"I like to do fiing or typing",
				state:0
			},
			q35:
			{
				question:"I am good at keeping records of my work",
				state:0
			},
			q38:
			{
				question:"I would like to work in an office",
				state:0
			}
		}
	}
}

/*
var question = [ ];
for (var i in RIASEC) {
	for (var a in RIASEC[i].questions) {
		question.push(a);
	}
}

var op = [ ];
for (var i in question) {
	var s = question[i].split('')
	s.shift()
	s.join('')
	op.push(+s.join(''));
}

op.sort(function(a,b) { return a - b; });
console.log(op);


console.log(RIASEC.Realistic.questions.q30.question);


for (var i=0; i<questions.length-1; i++) {
    var node = document.createElement("p");
    var textnode = document.createTextNode(questions[i]);
    node.className += "questionForm";
    node.appendChild(textnode)
    document.getElementById("questionContainer").appendChild(node);
}
*/
	     
     