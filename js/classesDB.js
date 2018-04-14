var classesDB = {
	I : {
		classes: [    ["calculus", "precalculus", "any", "GR12" ],   "computer science", "physics", "calculus"]
	},
	E : {
		classes: ["business", "finance", "memes"]
	},

	thisFunction: function(user) {
		if (user[1] === "I") {
			return classesDB.I.classes[0]
		}
	}
}

var jameson = ["R", "I", "C"];


console.log(classesDB.thisFunction(jameson));;

	