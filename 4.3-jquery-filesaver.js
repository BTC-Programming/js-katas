// Code for madlibs.js
document.getElementById("startGame").addEventListener("click", startGame);

function startGame() {

	// initialize variables
	var sentence = [];
	var replacements = [];
	var removeMarkup = "";

	// Input the sentence (author)
	alert("Author, enter the original sentence word by word. End with \"^\".");
	sentence=populate(sentence, "Word "); // put words into the sentence array
	oldSentence = sentence.pop();
	oldSentence = arraySentence(sentence); // Output the sentence without the ^ or commas

	// Specify the replacements positions (author)
	replacements=swapulate(replacements,sentence.length,"Enter positions to replace, first is 0. End with \"^\".");

	// Specify parts of speech for replacements (author)
	sentence=swap(sentence,replacements,"Enter Part of Speech for each word: ");

	// Enter replacement words (player)
	alert("Author, you're done. Player, your turn!")
	sentence=swap(sentence,replacements,"Enter a "); // enter replaced words
	newSentence=arraySentence(sentence);  // Output the sentence without the ^ or commas

	// Save sentence to file and end game
	var gameText = "Old: "+oldSentence+"\nNew: "+newSentence;
	alert(gameText);
	saveText(gameText);
	};

//end game

// Build Sentence Array
function populate(myArray,sprompt){
	index=0;
	do {
	myArray[index] = prompt(sprompt + index);
	index++;
	}
	while(myArray[index - 1] != "^")
	return myArray;
}

function swapulate(myArray,length,sprompt){
	index=0;
	do {
	myArray[index] = prompt(sprompt);
	index++;
	}
	while(myArray[index - 1] != "^");
	return myArray;
}


// Convert array to sentence function
function arraySentence(myArray) {
	removeMarkup = myArray.join(' ')+".";
	return removeMarkup;
}

// Swap itemes in Sentence Array for Parts of Speech, New Words
function swap(sarray,rarray,sprompt,index){
	for (index = 0; index < rarray.length - 1; index++){
		sarray[rarray[index]]= prompt(sprompt + sarray[rarray[index]]);
	}
	return sarray;
}

function saveText(text) {
	alert("Clicking OK will save this game in downloads folder as madlib.txt");
	var filename = "madlib";
	var madlibs = new Blob([text], {type: "text/plain;charset=utf-8"});
	saveAs(madlibs, filename+".txt");
	};

