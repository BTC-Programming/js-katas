/* Multiplication Merit: JS Katas
 *
 *  GROUP ONE
 *
 */

// 1. Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??
// 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.
// 3. Embed equation in While loop that continues until entry matches solution, or = "stop".
// 4. Embed all code in a For loop and run it 10 times.

var x = 0;
var y = 0;
var solution = 0;
x = Math.floor(Math.random()*7)+3;
y = Math.floor(Math.random()*7)+3;
while((solution != x*y) && (solution != "stop")){
   solution = prompt(x+" * "+y+" = ?");
   if (solution == x*y){
      alert("Correct!");
   } 
   else
   {   
      alert("Incorrect!");
   }
}
