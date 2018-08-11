// create array with all regular flavors
var ourFlavors = ["chocolate","vanilla","strawberry","coffee","pistachio"];
// count the number of flavors in our list
var flavorlist=ourFlavors.length;
// create an array to hold the choices
var sundaeFlavors = [];
// number our scoops
var scoops = 3;
// list our flavors 
alert("Here are our flavors: "+ourFlavors);
// initialize a boolean variable called inArray
inArray=false;
// use a for loop to request flavors
for(scoop=1;scoop<scoops;scoop++) {
	// use a while loop to check the flavors
	while(inArray==false) {
		flavor = prompt("Enter an ice cream flavor");
		// check if the requested flavor is in our list
		// use a loop to compare values
		for(index=0;index<flavorlist;index=index+1) {
			// if the flavor is in ourFlavors
			if (flavor==ourFlavors[index]){
				// if we are out of strawberry, give us another request 
				if (flavor=="strawberry"){
					alert("Sorry, we are all out of "+flavor+".");
					scoop=scoop-1;
					inArray=true;
				}
				// otherwise put the flavor in the sundaeFlavors array
				sundaeFlavors[scoop-1]=flavor;
				// and say it was added
				alert(flavor+" added.");
				// and change our boolean to exit the while loop
				inArray=true;
			}
		// otherwise check the next flavor in ourFlavors
		}
		// if we didn't exit the while loop, we don't carry the flavor
		alert("Sorry, we don't carry "+flavor+".");
		// so remind what the flavors are 
		alert("Here are our flavors again: "+ourFlavors);
		// and don't deny a scoop
		scoop=scoop-1;
		// go to the next scoop and re-set the boolean
		inArray=true;
	}
	// go to the next scoop and re-set the boolean
	inArray=false;
	// all scoops are chosen
} 
// display our sundae
coneString = sundaeFlavors.join(' ');
alert("Enjoy your "+coneString.toString() + " sundae.");