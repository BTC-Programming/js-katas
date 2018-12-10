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
	alert("Here is my report:");
	var tempcode=code;
	for (g=0;g<4;g++) {	
		for (c=0;c<4;c++) {
			if (guess[g]!="" && guess[g]==tempcode[g]){
				feedback[g]="b";
				guess[g]="";	
				tempcode[g]="";	
				console.trace(g,c);
				continue;
			}
			else if (guess[g]!="" && guess[g]==tempcode[c]) {
				feedback[g]="w";
				guess[g]="";	
				tempcode[c]="";
				console.trace(g,c);
				continue;
			}
		}
	}
	console.log("Before Sort: "+feedback);
	feedback=formatFeedback(feedback);
	console.log("After Sort: "+feedback);
}

function formatFeedback(feedback) {
	var b=0, w=0;
	ffeedback=[];
	for (i=0;i<4;i++) {
		if (feedback[i]=="b") {
			b++;
			feedback[i]=="";
		}
		else if (feedback[i]=="w") {
			w++;
			feedback[i]=="";
		}
	}
	for (i=0;i<b;i++) {
		ffeedback[i]="b";
	}
	for (i=b;i<b+w;i++) {
		ffeedback[i]="w";
	}
	return ffeedback;
}
