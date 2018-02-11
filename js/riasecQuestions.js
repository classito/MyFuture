var questions = [
	"I like to work on cars",
	"I like to do puzzles",
	"I am good at working independently",
	"I like to work in teams",
	"I like to buid things",
	"I like to do experiments"
];


function randomizeArr(arr) {
	for (var i=arr.length-1; i>=0; i--) {
		temp = Math.floor(Math.random()*arr.length)
		tempValue = arr[temp]
		arr[temp] = arr[i]
		arr[i] = tempValue
	}
}


randomizeArr(questions);


for (var i=0; i<questions.length-1; i++) {
    var node = document.createElement("p");
    var textnode = document.createTextNode(questions[i]);
    node.appendChild(textnode)
    document.getElementById("questionaire").appendChild(node);
}
