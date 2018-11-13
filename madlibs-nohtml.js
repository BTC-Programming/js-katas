/* Madlibs by Mr. M. */

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
// Player enters replacement words
alert("Author, you're done. Player, your turn!");
for (word=0; word<replacements;word++) {
	sentence[whichWords[word]] = prompt("Enter a "+sentence[whichWords[word]]+": ");
}

// Show new sentence
alert("OK, Player, go get Author to see new sentence.");
alert(arraySentence(sentence));

//Convert array to sentence
function arraySentence(myArray) {
	removeMarkup = myArray.join(" ");
	return removeMarkup;
}
