var rows = 8, columns = 8;
var board = new Array(rows); 
for (i = 0; i < rows+1; i++) {
	board[i] = new Array(columns+1);
}
for (i = 0; i < rows+1; i++) {
	for (j = 0; j < columns+1; j++) {
		board[i][j]="["+i+","+j+"]";
  	}
	board[i].splice(0,1);
}
board[0].splice(0,9)
alert(board.join('\n'));