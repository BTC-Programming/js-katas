// 1. Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??
// 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.
// 3. Embed equation in While loop that continues until entry matches solution, or = "stop".
// 4. Embed all code in a For loop and run it 10 times.

/*  initializations */
var x = 0;
var y = 0;
var solution = 0; // calculated value
var userInput = 0; // manual input value
var stop = false;  // signal value
var wrongAnswers=0; // count wrong answers
var questions=10; // set number of questions
var wrong = 0; // within function, count number of bad tries

/* code */
// 4. Embed all code in a For loop and run it 10 times.
for (question = 1; question <=questions; question++) {
  // run function and return number of wrong answers, add them to previous count
   wrongAnswers+=multiPractice(question);
} // end Loop
// Display score
if (wrongAnswers<0) {
alert("You had "+wrongAnswers+" wrong answers out of "+questions+ "questions.");
}
else alert ("Charlie, you've won!!");

  
// FUNCTIONS
function multiPractice(question){
   wrong=0; // re-set each time function is called
   // 1. Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??
   x = Math.floor(Math.random()*7)+3;
   y = Math.floor(Math.random()*7)+3;
   solution=x*y; // set answer to product 
   // 3. Embed equation in While loop that continues until entry matches solution, or = "stop".
   while ((userInput != solution) && (stop==false)) {
   // 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.
      userInput = prompt("Question "+question+": What is "+x+" * "+y+"?");
      if (userInput == "stop" || userInput == "Stop") {
         stop = true;
      }  // end if 
      else if (userInput == solution) {
         alert("Correct!");
      } // end else if
      else {
         alert("Incorrect solution. Try again.");
         wrong++;
      } // end Else
   } // end While
   return wrong;
}


