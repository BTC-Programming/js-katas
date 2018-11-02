/* MULTIPLICATION QUIZ KATA */

/* INSTRUCTIONS */

// 1. Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??
// 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.
// 3. Embed equation in While loop that continues until entry matches solution, or = "stop".
// 4. Embed all code in a For loop and run it 10 times.
// 5. Move code parts 1-3 into a function called multiPractice, and call multiPractice within the For loop.
// 6. Count how many not-right-first-answers and return that count from multiPractice.
// 7. At "stop" or loop end, report # answers wrong.  If no wrong answers, say "Charlie, you've won!"
// 8. Extra Credit: instead of 10 times, run loop to value of questions variable entered manually. 

/*  initializations */

// x value: initially 0

// y value: ditto

// solution: changes with each set of random numbers

// userInput: manual input value

// stop: signal value initially false

// wrongAnswer: counts wrong answers returned by function. Start at 0.

// questions: sets number of questions

// wrong: within function, count number of bad tries


/* code */

// Embed all code in a For loop, start at 0, end at number of questions.

  // run function and return number of wrong answers, add them to previous count

// end Loop

// If any wrong answers

	// Display score as wrong out of questions
	
// end if 

// else Display "Charlie, you've won!" if no wrong answers

  
// FUNCTIONS

// Define function multiPractice

   // re-set wrong to zero each time function is called

   // Print 2 Random Integers, X & Y, each between 3 and 9, as a soluble equation:  X * Y = ??

   // set solution equal to product of both numbers

   // 3. Embed equation in While loop that continues until entry matches solution, or = "stop".

   // 2. Receive manual input for solution, say "Correct!" if match, "Incorrect!" if not.

	   // check if userInput = stop

		 // change signal variable to true

      // end if 

	  // otherwise, check if userInput = solution

		// say Correct! 

		  // end else if

	  // check if userInput not equal to solution 

		 // if so, say Incorrect, Try Again

		 // also, count a wrong answer

    // end Else

    // end While

	// set wrong = 1 if wrong is greater than 0

	// return wrong

// end function
