// Prompt for a flavor "What flavor scoop?", then show an alert with "Here's your [flavor] scoop. Enjoy!"
// Use conditional logic to check responses where flavor is not equal to chocolate or vanilla:
// 	  If strawberry, alert "Sorry, we're all out of strawberry."
// 	  Else alert "Sorry, we don't carry [flavor]."
// For fun, add other conditionals and responses. 

flavor = prompt("What flavor scoop?");
if (flavor == "chocolate " || flavor == "vanilla"){
	alert("Here's your "+flavor+" scoop. Enjoy!");
}
else if (flavor == "strawbery") {
	alert("Sorry, we're all out of "+flavor+".");
}
else {
	alert("Sorry, we don't carry "+flavor+".");
}