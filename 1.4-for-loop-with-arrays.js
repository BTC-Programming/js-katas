// We are building a sundae with scoops, so you need an array for the scoops, called flavors 
// We are checking flavor requests against flavors in stock, so you need an array called ourFlavors
// This is for a three-scoops sundae, so you'll use a loop. 
// Prompt for each flavor by scoop number
// Use conditional logic to check responses where flavor is not equal to chocolate or vanilla
//    If scoop is in stock, show an alert with "Here's your [flavor] scoop"
// 	  If strawberry, alert "Sorry, we're all out of strawberry."
// 	  Else alert "Sorry, we don't carry [flavor]."
// allow selecting another flavor -- don't deprive user of scoops!
// Use a function called inArray to check if the requested flavor is in stock
// create a for loop for a three-scoop cone
// same conditions and values as 3-for-loop

var ourFlavors=["chocolate","vanilla","strawberry"];
var flavors=[];
var scoops = 3;

for (scoop=0;scoop<scoops;scoop++) {
	flavor = prompt("What flavor scoop?");
	if (inArray(flavor, ourFlavors)==true){
		if (flavor == "strawberry") {
			alert("Sorry, we're all out of "+flavor+".");
			scoop=scoop-1;
		}
		else {
			flavors[scoop]=flavor;
		}
	}
	else {
		alert("Sorry, we don't carry "+flavor+".");
		scoop=scoop-1;
		}
} 
alert ("Here's your "+flavors+" sundae. Enjoy!");

/* check if requested flavor is in stock */
function inArray(svalue, tarray){
	answer=false;
	for (index=0;index<tarray.length;index++){
		if (svalue==tarray[index]){
			answer=true;
		}
	}
	return answer;
}
