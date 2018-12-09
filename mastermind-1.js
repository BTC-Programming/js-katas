/** mastermind - 1 turn */

var colors = ['r', 'c', 'w', 'g', 'b', 'y'];
var code=[];
var guess=[];
var feedback=[];

code=setCode(code,colors);
guess=getGuess(guess);
testGuess(guess,code,feedback);

function setCode(code,colors) 
	{
	for (i=0;i<4;i++) 
		{
		code[i]=colors[Math.floor(Math.random()*6)];
   		}
	console.log(code);
	return code;
	}

function getGuess(guess) 
	{
	alert("Enter a color by keying the first letter of red, cyan, white, green, black, yellow."); 
	for (i=0;i<4;i++) 
		{	
		guess[i]=prompt("Enter color "+(i+1)+":");
   		}
	console.log(guess);
	return guess;
	}

function testGuess(guess,code,feedback) {
	alert("Here is my report:");
	var tempcode=code;
	for (g=0;g<4;g++) 
		{	
			for (c=0;c<4;c++) 
				{
				if (guess[g]!="" && guess[g]==tempcode[g])
					{
					feedback[g]="b";
					guess[g]="";	
					tempcode[g]="";	
					console.trace(g,c);
					continue;
					}
				else if (guess[g]!="" && guess[g]==tempcode[c]) 
					{
					feedback[g]="w";
					guess[g]="";	
					tempcode[c]="";
					console.trace(g,c);
					continue;
					}
   				}
		}
	console.log(feedback);
	feedback=formatFeedback(feedback);
	console.log(feedback);
	}

function formatFeedback(feedback) {
	feedback=feedback.filter(Boolean);
	for (i=0;i<feedback.length;i++) 
		{
			newP=Math.round(Math.random()*feedback.length)-1;
			swap=feedback[i];
			feedback[i]=feedback[newP];
			feedback[newP]=swap;
		}
	return feedback;
}