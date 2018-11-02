/* MULTIPLICATION QUIZ KATA */

/* PART 1 */

// 1. Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??
// 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.
// 3. Embed equation in While loop that continues until entry matches solution, or = "stop".
// 4. Embed all code in a For loop and run it 10 times.

/*  initializations */
var x = 0; // x value
var y = 0; // y value
var solution = 0; // solution: calculated value
var userInput = 0; // userInput: manual input value
var stop = false;  // stop: signal value
var wrongAnswers=0; // wrongAnswer: count wrong answers
var questions=10; // questions: set number of questions
var wrong = 0; // wrong: within function, count number of bad tries
questions = prompt("How many questions?");
/* code */
// 4. Embed all code in a For loop, start at 0, end at number of questions.
for (question = 0; question < questions; question++) {
  // run function and return number of wrong answers, add them to previous count
   wrongAnswers+=multiPractice();
} // end Loop
// Display score as wrong out of questions if any wrong answers
if (wrongAnswers>0) {
	alert("You had "+wrongAnswers+" wrong answers out of "+questions+ " questions.");
}
// Display "Charlie, you've won!" if no wrong answers
else alert ("Charlie, you've won!!");

  
// FUNCTIONS
function multiPractice(){
   wrong=0; // re-set each time function is called
   // 1. Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??
   x = Math.floor(Math.random()*7)+3;
   y = Math.floor(Math.random()*7)+3;
   solution=x*y; // set answer to product 
   // 3. Embed equation in While loop that continues until entry matches solution, or = "stop".
   while ((userInput != solution) && (stop==false)) {
   // 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.
      userInput = prompt("What is "+x+" * "+y+"?");
	   // check if userInput = stop
      if (userInput == "stop" || userInput == "Stop") {
		 // change signal variable if stop
         stop = true;
      // end if 
	  } 
	  // check if userInput = solution
      else if (userInput == solution) {
		// say Correct! 
         alert("Correct!");
		  // end else if
      } 
	  // check if userInput not equal to solution 
      else if (userInput != solution) {
		 // say Incorrect, Try Again
         alert("Incorrect solution. Try again.");
		 // count a wrong answer
         wrong++;
      } // end Else
   } // end While
	// set wrong = 1 if wrong is greater than 0
	if (wrong > 0) wrong = 1;
	console.log("wrong: "+wrong);
	// return wrong
   return wrong; 
}
