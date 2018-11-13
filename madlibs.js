// Code for madlibs.js
document.getElementById("startGame").addEventListener("click", startGame);

function startGame() {

	// initialize variables
	var sentenceString=null; // initial sentence
	var sentence = [];
	var whichWords = [];
	var replacements = 0;
	var removeMarkup = null;

	// Input the sentence, save as array(author)
	sentenceString = prompt("Author, enter a sentence.");
	sentence=sentenceString.split(" ");
	alert("OK, "+arraySentence(sentence));

	// Specify the replacements positions and parts of speech (author)
	replacements = prompt("Replace how many words?");
	for (word=0; word<replacements;word++) {
		whichWords[word] = (prompt("Which words? Word position: ")-1);
		sentence[whichWords[word]]=prompt("Part of speech of "+sentence[whichWords[word]]+"?");
	}

	alert("Author, you're done. Player, your turn!");
	for (word=0; word<replacements;word++) {
		sentence[whichWords[word]] = prompt("Enter a "+sentence[whichWords[word]]+": ");
	}

	alert(arraySentence(sentence));

	// Save sentence to file and end game
	var gameText = "Old: "+sentenceString+"\nNew: "+arraySentence(sentence);
	alert(gameText);
	saveText(gameText);
	}

//end game

// Build Sentence Array



// Convert array to sentence function
function arraySentence(myArray) {
	removeMarkup = myArray.join(" ");
	return removeMarkup;
}


function saveText(text) {
	alert("Clicking OK will save this game in downloads folder as madlib.txt");
	var filename = "madlib";
	var madlibs = new Blob([text], {type: "text/plain;charset=utf-8"});
	saveAs(madlibs, filename+".txt");
	};

