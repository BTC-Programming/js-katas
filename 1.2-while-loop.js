/* 1.2 - While Loop */

// Conditional where flavor = chocolate or vanilla
// Have as many scoops as you want!
// Begin with flavor = "start"
// Accept flavors unless flavor = "done"
// Prompt for flavor, then output "here's your" + flavor
// If strawberry, alert "all out of strawberry"
// Else alert "no such flavor"
// If flavor  equal to "done", alert "Enjoy!"
// Hint: don't use an "else" without a condition in the loop!
flavor = "start";
while (flavor != "done") {
	flavor = prompt("What flavor scoop?");
	if (flavor == "chocolate" || flavor == "vanilla"){
		alert("Here's your "+flavor+" scoop.");
	}
	else if (flavor == "strawbery") {
		alert("Sorry, we're all out of "+flavor+".");
	}
	else if (flavor != "done"){
		alert("Sorry, we don't carry "+flavor+".");
	}
}
alert("Enjoy!");
