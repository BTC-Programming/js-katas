// Simple Nim Mr. Moreinis
// Initializations
var count = 0;
var playerInput = 0;
var cpuInput = 0;
// Welcome
alert("Welcome to Nim! You go first.");
// Start Play
// Keep looping until someone wins
while (count<21) {
   // ask for player input and say current count, add to count
   count+=playerTurn(count);
   // obtain CPU input and say current count, add to count
   count+=cpuTurn(count);
   }
alert("Somebody won!");
// End

// Define function cpuTurn
function cpuTurn(count){
   cpuInput=Math.floor(Math.random()*3+1);
   console.log(cpuInput);
   alert("Current count is "+(count+cpuInput));
   return cpuInput;
}

// Define function playerTurn
function playerTurn(count){
   playerInput = parseInt(prompt("Count how many? (1-3)"));
   alert("Current count is "+(count+playerInput));
   return playerInput;
}
