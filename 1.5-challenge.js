// This is the same program as before, except we are changing the output
// Instead of printing out the arrays directly, add commas between the values
// This is done with the array.join function. 
// Also, comment each line so you can use this code as a study guide. 
// To study, make a version WITHOUT the comments, and then comment it



var ourFlavors=["chocolate","vanilla","strawberry"];
var sundaeFlavors=[];
var scoops = 3;
ourString = ourFlavors.join(', ');
alert("Here are our flavors: "+ourString+".");
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
		alert("Here are our flavors: "+ourString+".");
		scoop=scoop-1;
		}
} 
sundaeString = sundaeFlavors.join(', ');
alert("Enjoy your "+sundaeString.toString() + " sundae.");


function inArray(svalue, tarray){
	answer=false;
	for (index=0;index<tarray.length;index++){
		if (svalue==tarray[index]){
			answer=true;
		}
	}
	return answer;
}