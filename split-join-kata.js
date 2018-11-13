/* String to Array: Split and Join */

// initialize variables
var sentenceString=null; // initial sentence string
var sentence = []; // array to hold words
var newSentence = []; // string to hold array items

// Input the sentence string, save as array(author)
sentenceString = prompt("Enter a sentence.");
sentence=sentenceString.split(" ");

// output string and array, alert both
newSentence = sentence.join(" ");
alert("Array with :"+sentence+" is now string: "+newSentence);
