// We are building a sundae with scoops, so you need an array for the scoops, called flavors 
// We are checking flavor requests against flavors in stock, so you need an array called ourFlavors
// This is for a three-scoops sundae, so you'll use a loop. 
// Prompt for each flavor by scoop number
// Use a function called inArray to check if the requested flavor is in stock
// If scoop is in stock, show an alert with "Here's your [flavor] scoop"
// Use conditional logic for addtional options. 
// 	If strawberry, alert "Sorry, we're all out of strawberry."
// 	Else alert "Sorry, we don't carry [flavor]."
// 	Allow selecting another flavor -- don't deprive user of scoops!

var ourFlavors=["chocolate","vanilla","strawberry"];
var sundaeFlavors=[];
var scoops = 3;

for (scoop=0;scoop<scoops;scoop++) {
	flavor = prompt("What flavor scoop?");
	if (inArray(flavor, ourFlavors)==true){
		if (flavor == "strawberry") {
			alert("Sorry, we're all out of "+flavor+".");
			scoop=scoop-1;
		}
		else {
			sundaeFlavors[scoop]=flavor;
		}
	}
	else {
		alert("Sorry, we don't carry "+flavor+".");
		scoop=scoop-1;
		}
} 
alert ("Here's your "+sundaeFlavors+" sundae. Enjoy!");

/* check if requested flavor is in stock */
function inArray(svalue, tarray){
	answer=false;
	for (index=0;index<tarray.length;index++){
		if (svalue==tarray[index]){
			answer=true;
		}
	}
	return answer;
<<<<<<< HEAD
}
=======
}
>>>>>>> 263edb21d5eb1dd40c07e7a84b208d8e04246ce0
