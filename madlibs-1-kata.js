/* Madlibs Kata: 1 Replaced Word */
*
* 1. obtain a sentence string (sentenceString)
* 2. split string at spaces into an array of words (sentence)
* 3. for testing, write sentence array to console log
* 4. obtain index of word in sentence array to replace (hint first is 0)
* 5. obtain part of speech of word to replace (partOfSpeech)
* 6. set word at this index equal to underscore + partOfSpeech + underscore
* 7. join array of words into new sentence
* 8. display new sentence
*/

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
sentence[index]="_"+partOfSpeech+"_";
// output string and array, alert both
newSentence = sentence.join(" ");
alert(newSentence);
