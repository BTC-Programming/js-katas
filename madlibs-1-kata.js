/* String to Array: Split and Join */

// initialize variables
var sentenceString=null; // initial sentence string
var sentence = []; // array to hold words
var index = 0; // index of replacement word
var partOfSpeech = null; // part of speech of replacement word

// Input the sentence string, save as array(author)
sentenceString = prompt("Enter a sentence.");
sentence=sentenceString.split(" ");
// Input the replacement word index
index = prompt("Replace which word? First is 0.");
partOfSpeech = prompt("Part of speech of this word?");
sentence[index]=partOfSpeech;
// output string and array, alert both
newSentence = sentence.join(" ");
alert(newSentence);
