

var treeDiv = document.getElementById("treeDiv");

var lineMaker = function(limitz, stringToAdd) {
	var stringMade = ''
	for (var i = 0; i < limitz; i++) {
		stringMade += stringToAdd;
	};
	return stringMade;
};


var treeSpecs = new Object();



var makeTree = function () {
	treeSpecs.userCharacter = document.getElementById("userInputCharacter").value;
	treeSpecs.treeHeight = document.getElementById("treeHeight").value;

	if ((treeSpecs.userCharacter.length !== 1) || (treeSpecs.treeHeight.length < 1)) {
		alert("Both fields must have the correct value")
	};

	if (isNaN(treeSpecs.treeHeight) === true) {
		alert("You gotsa gives me a numba")
	};

	if (treeSpecs.userCharacter.length === 1) {
		for (var i = 1; i <= treeSpecs.treeHeight; i++) {
			console.log(lineMaker(treeSpecs.treeHeight - i, " ") + lineMaker((i * 2) - 1, treeSpecs.userCharacter))
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


