// question no 1
// var cityName = prompt("Enter the city name:");

// // Check if the entered city is Karachi
// if (cityName.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights");
// } else {
//     alert("Welcome to " + cityName);
// }




// question 2
// var gender = prompt("Enter your gender (male/female):");

// // Check the gender and display the appropriate greeting
// if (gender.toLowerCase() === "male") {
//     // Greeting for male
//     alert("Good Morning Sir");
// } else if (gender.toLowerCase() === "female") {
//     // Greeting for female
//     alert("Good Morning Ma'am");
// } else {
//     // Default message for other inputs
//     alert("Good Morning");
// }



// //question 3
// // Get user input for remaining fuel
// var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));

// // Check if the remaining fuel is less than 0.25 litres
// if (remainingFuel < 0.25) {
//     // Display a message to refill the fuel
//     alert("Please refill the fuel in your car");
// } else {
//     // Display a message indicating sufficient fuel
//     alert("Your car has enough fuel.");
// }



 //question 4
 //a)
// var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// } 

//output
//given condition for variable a is true.

 //b)
// var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// } 

// //no output 



//c)
// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// } 

// output
// condition 2 is true 
// condition 4 is true 



// //d
// var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 

// output
// the cost equals 



// //e
// if (true){ 
//     alert("True"); 
//    } if (false){ 
//    alert("False"); 
//    } 

//    output
//    true





// //f
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
//     } 
//     output
//     car is smaller than cat 





// //question no 5
// // Store the secret number (ranging from 1 to 10)
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// // Prompt user to guess the secret number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if the user's guess is correct or close enough
// if (userGuess === secretNumber) {
//     // Correct guess
//     alert("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//     // Close enough guess
//     alert("Close enough to the correct answer");
// } else {
//     // Incorrect guess
//     alert("Sorry, incorrect guess. The correct answer was " + secretNumber);
// }





// //question no 6
// // Prompt user to enter a number
// var userInput = parseInt(prompt("Enter a number:"));

// // Check if the number is divisible by 3
// if (userInput % 3 === 0) {
//     // Display a message if the number is divisible by 3
//     alert("The given number is divisible by 3.");
// } else {
//     // Display a message if the number is not divisible by 3
//     alert("The given number is not divisible by 3.");
// }



// //question no 7
// // Prompt user to enter a number
// var userInput = parseInt(prompt("Enter a number:"));

// // Check if the number is even or odd
// if (userInput % 2 === 0) {
//     // Display a message if the number is even
//     alert("The given number is even.");
// } else {
//     // Display a message if the number is odd
//     alert("The given number is odd.");
// }




// //question no 8
// // Prompt user to enter the temperature
// var temperature = parseFloat(prompt("Enter the temperature:"));

// // Check the temperature and display the appropriate message
// if (temperature > 40) {
//     alert("It is too hot outside.");
// } else if (temperature > 30) {
//     alert("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert("OMG! Today’s weather is so Cool.");
// } else {
//     alert("It's freezing outside!");
// }




// //question no 9
// // Prompt user to enter the first number
// var firstNumber = parseFloat(prompt("Enter the first number:"));

// // Prompt user to enter the second number
// var secondNumber = parseFloat(prompt("Enter the second number:"));

// // Prompt user to enter the operation (+, -, *, /, %)
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// // Initialize a variable to store the result
// var result;

// // Perform the calculation based on the operation
// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     // Check for division by zero
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else if (operation === "%") {
//     // Check for modulus operation by zero
//     if (secondNumber !== 0) {
//         result = firstNumber % secondNumber;
//     } else {
//         alert("Error: Modulus operation by zero is not allowed.");
//     }
// } else {
//     // Display an error message for invalid operation
//     alert("Error: Invalid operation. Please enter +, -, *, /, or %.");
// }

// // Display the calculated result
// if (result !== undefined) {
//     alert("Result: " + result);
// }

