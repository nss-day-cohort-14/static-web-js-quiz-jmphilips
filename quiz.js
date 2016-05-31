

var treeDiv = document.getElementById("treeDiv");

var lineMaker = function(limitz, stringToAdd) {
	var stringMade = ''
	for (var i = 0; i < limitz; i++) {
		stringMade += stringToAdd;
	};
	return stringMade;
};

var makeTree = function () {
	var userCharacter = document.getElementById("userInputCharacter").value;
	var treeHeight = document.getElementById("treeHeight").value;

	if (userCharacter.length === 1) {
		for (var i = 1; i <= treeHeight; i++) {
			console.log(lineMaker(treeHeight - i, " ") + lineMaker((i * 2) - 1, userCharacter))
		};
	};
}


var treeHeight = document.getElementById("treeHeight");
var userInput = document.getElementById("userInputCharacter")

treeHeight.addEventListener('keypress', function(e) {
		var key = e.keyCode;
		if (key === 13) {
		makeTree();
	}
});

userInput.addEventListener('keypress', function(e) {
		var key = e.keyCode;
		if (key === 13) {
		makeTree();
	}
});













