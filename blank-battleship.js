var rows = 8, columns = 8;
var board = new Array(rows); 
for (i = 0; i < rows; i++) {
	board[i] = new Array(columns+1);
}
for (i = 0; i < rows; i++) {
	for (j = 0; j < columns; j++) {
		if (i%2==0&&j%2==0) {
			board[i][j]=" * ";
		}
		else if (i%2!=0&&j%2!=0) {
			board[i][j]=" * ";
		}
		else {
			board[i][j]=" "+j+" ";
		}
  	}
}
	
var alertString="------------------------\n";
for (var row=0;row<rows+1;row++) {
	myRow=board[row].slice(0, 9).join(" ");
		var alertString = alertString.concat(myRow);
		alertString = alertString.concat("\n");
	}
alertString = alertString.concat("------------------------\n");
alert(alertString); // testing purposes


