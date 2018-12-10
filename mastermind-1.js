/** mastermind - 1 turn @bmoreini*/

/* Initialization */
var colors = ['r', 'c', 'w', 'g', 'b', 'y'];
var code=[];
var guess=[];
var feedback=[];

/* Main Method */
code=setCode(code,colors);
guess=getGuess(guess);
testGuess(guess,code,feedback);

/* Functions */

/* Create the Secret Code */
function setCode(code,colors) {
	for (i=0;i<4;i++) {
		code[i]=colors[Math.floor(Math.random()*6)];
	}
	console.log(code);
	return code;
}

/* Get a Player's Guess */
function getGuess(guess) {
	alert("Enter a color by keying the first letter of red, cyan, white, green, black, yellow."); 
	for (i=0;i<4;i++) {	
		guess[i]=prompt("Enter color "+(i+1)+":");
	}
	console.log(guess);
	return guess;
}

/* Analyze the Guess */
function testGuess(guess,code,feedback) {
	// create a temporary code
	var tempcode=code;
	// count the blacks and erase guess and tempcode as you go
	for (g=0;g<4;g++) {	
		for (c=0;c<4;c++) {
			if (guess[g]!="" && guess[g]==tempcode[g]){
				feedback[g]="b";
				guess[g]="";	
				tempcode[g]="";	
				continue;
			}
		}
	}
	// count the whites and erase guess and tempcode as you go
	for (g=0;g<4;g++) {	
		for (c=0;c<4;c++) {
			if (guess[g]!="" && guess[g]==tempcode[c]) {
				feedback[g]="w";
				guess[g]="";	
				tempcode[c]="";
				continue;
			}
		}
	}
	// send the feeback to the formatter
	feedback=formatFeedback(feedback);
	// console log the feedback
	console.log("Feedback: "+feedback);
}

function formatFeedback(feedback) {
	// initialize the black and white counts
	var b=0, w=0;
	// count the blacks and whites
	for (i=0;i<4;i++) {
		if (feedback[i]=="b") {
			b++;
		}
		else if (feedback[i]=="w") {
			w++;
		}
	}
	// write the black pegs
	for (i=0;i<b;i++) {
		feedback[i]="b";
	}
	// write the white pegs
	for (i=b;i<b+w;i++) {
		feedback[i]="w";
	}
	// delete the blanks after
	for (i=0;i<4-(b+w);i++) {
		feedback.pop();
	}
	// return the new array
	return feedback;
}
