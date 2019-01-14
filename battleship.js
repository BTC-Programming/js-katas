var rows = 10, columns = 10;
var board = new Array(rows); 
var rowValues=["","a","b","c","d","e","f","g","h","i","j",]
for (i = 0; i < rows+1; i++) {
	board[i] = new Array(columns+1);
}
board[0][0]="   ";
for (i=1;i<11;i++){
		board[0][i]=" "+i+" ";
}
for (i = 1; i < rows+1; i++) {
	for (j = 0; j < columns+1; j++) {
		if (j==0) {
			board[i][0]=rowValues[i]+"  ";
		}
		else {
			board[i][j]=" * ";
		}
  	}
}
	
var alertString="";
for (var row=0;row<rows+1;row++) {
	myRow=board[row].slice(0, 11).join(" ");
		var alertString = alertString.concat(myRow);
		alertString = alertString.concat("\n");
	}
alert(alertString); // testing purposes


