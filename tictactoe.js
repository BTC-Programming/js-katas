var rows = 3, columns = 3;
var board = new Array(rows); 
for (i = 0; i < rows; i++) {
	board[i] = new Array(columns+1);
}
for (i = 0; i < rows; i++) {
	for (j = 0; j < columns; j++) {
		if (i%2==0&&j%2==0) {
			board[i][j]=" O ";
		}
		else if (i%2!=0&&j%2!=0) {
			board[i][j]=" O ";
		}
		else {
			board[i][j]=" X ";
		}
  	}
}
	
var alertString="";
for (var row=0;row<rows;row++) {
	myRow=board[row].slice(0, rows).join(" ");
		var alertString = alertString.concat(myRow);
		alertString = alertString.concat("\n");
	}
alert(alertString); // testing purposes


