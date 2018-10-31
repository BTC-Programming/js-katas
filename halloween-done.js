/* 
 * Halloween Kata
 */
 
 //1. Display "Trick (1) or Treat (2)?". Display a different message based on choice number with if/elseif. 
choice=prompt("Do you want Trick (1) or Treat (2)?");
alert(answer(choice));
 //2. Create function that receives a choice number, returns message based on number.
 //3. Use switch & case rather than if/elseif in function.
 function answer(choice){
  switch (choice){
    case "1":
      message="candy";
      break;
    case "2":
      message="hahhah";
      break;
  }
   return message;
}   
