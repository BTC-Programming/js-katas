// flavors are chocolate, vanilla, strawberry
// we are out of strawberry
// create a for loop for three flavors
// allow selecting another flavor if strawberry or not a flavor
// alert "Here's your" + flavor when a good flavor is picked

for (scoop=1;scoop<4;scoop++) {
	flavor = prompt("What flavor scoop?");
	if (flavor=="chocolate" || flavor=="vanilla"){
		alert("Here's your "+flavor+" scoop");
	}
	else if (flavor == "strawberry") {
		alert("All out of "+flavor);
		scoop=scoop-1;
		}
	else {
		alert(flavor+" is not a flavor.");
		scoop=scoop-1;
		}
}





function inArray(svalue, tarray){
	answer=false;
	for (index=0;index<tarray.length;index++){
		if (svalue==tarray[index]){
			answer=true;
		}
	}
	return answer;
}
