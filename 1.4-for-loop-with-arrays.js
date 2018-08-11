// define ourFlavors array including chocolate, vanilla, strawberry
// define scoops array for the cone being ordered
// define function inArray to check if source value in target array
// create a for loop for a three-scoop cone
// same conditions and values as 3-for-loop

var ourFlavors=["chocolate","vanilla","strawberry"];
var scoops=[];
for (scoop=0;scoop<3;scoop++) {
	flavor = prompt("What flavor scoop?");
	if (inArray(flavor, ourFlavors)==true){
		if (flavor == "strawberry") {
			alert("All out of "+flavor);
			scoop=scoop-1;
		}
		else {
			scoops[scoop]=flavor;
		}
	}
	else {
		alert("We don't carry "+flavor);
		scoop=scoop-1;
		}
}
alert ("Here's your "+scoops+" cone");



function inArray(svalue, tarray){
	answer=false;
	for (index=0;index<tarray.length;index++){
		if (svalue==tarray[index]){
			answer=true;
		}
	}
	return answer;
}
