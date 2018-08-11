// This is for a three-scoops sundae, so you'll use a loop. 
// Prompt for a flavor by scoop number
// Use conditional logic to check responses where flavor is not equal to chocolate or vanilla
//    If scoop is in stock, show an alert with "Here's your [flavor] scoop"
// 	  If strawberry, alert "Sorry, we're all out of strawberry."
// 	  Else alert "Sorry, we don't carry [flavor]."
// allow selecting another flavor -- don't deprive user of scoops!
// You may use a while loop if you wish.


scoops = 3;
for (scoop=1;scoop<scoops+1;scoop++) {
	flavor = prompt("What flavor for scoop "+scoop+"?");
	if (flavor == "chocolate " || flavor == "vanilla"){
		alert("Here's your "+flavor+" scoop.");
	}
	else if (flavor == "strawbery") {
		alert("Sorry, we're all out of "+flavor+".");
	}
	else {
		alert("Sorry, we don't carry "+flavor+".");
	}
}
alert ("Enjoy!");
