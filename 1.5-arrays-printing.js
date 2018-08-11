//initialize variables
inarray=false;
var flavors = ["chocolate","vanilla","strawberry","coffee","pistachio"];
var cone = [];
flavorlist=flavors.length;
// create array will all regular flavors
alert("Here are our flavors: "+flavors);
// set a string variable equal to a value with a prompt
for(scoop=1;scoop<4;scoop++){
	do{
		var flavor = prompt("Enter an ice cream flavor");
		// check if that flavor is in our list

		for(index=0;index<flavorlist;index=index+1){
			if (flavor==flavors[index]){
				inarray=true;
				}
			}
		if (inarray==false) {
			alert(flavor+" is not a flavor.");
			}
		if (flavor=="strawberry"){
			alert("All out of "+flavor);
			inarray=false;
		}
	}
	while(inarray==false)
	alert("Here is your "+flavor+" scoop.");
	cone[scoop-1]=flavor;
}
coneString = cone.join(' ');
alert("Enjoy your cone with "+coneString.toString());
