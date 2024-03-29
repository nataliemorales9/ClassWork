/*
    Example of a multi-line comment just like in C#/Java
*/

// Single line comment just like C#/Java

// semi-colons at the end of a statement are usually optional in JavaScript

//********************************************************************************************
// Call functions defined below to execute them  
//********************************************************************************************

variables();  // call the functions called variables() to execute its code

// Call the printParameters fn with various types of Parameters
printParameters('Yoda', "Obi-Wan")
printParameters()
printParameters("Vito Corleone")

// the /n character causes the display to go to a new line (used for output line spacing)

console.log('\n----- compare a string value 1 to a numeric value 1 -----\n')
equality('1',1)  

console.log('\n----- compare two strings that sound the same -----\n')
equality('two', 'too') 

console.log('\n ----- compare a whole number value 1 to a decimal value 1 -----\n')
equality(1, 1.0);   

console.log('\n\nThanks for using our app!\n' )


console.log('\n ----- call falsy with various values -----\n')
falsy("frank")
falsy(42)
falsy(42 / "frank") // Value sent is NaN      - false
falsy(42 / 0)       // Value sent is infinity - true
falsy(null)
falsy(3.14)

objects()   // call the objects function

//********************************************************************************************
// End of main application processing
//********************************************************************************************
// Functions used to demonstrate various JavaScript features
// These must be called in order to execute 
//********************************************************************************************

/**
 * Illustrate various variable definition options in JavaScript
 */
function variables() {
  // name() = function call
  // word.name = method call
  //
  // a method is a function associated with an object
  //  an object is a group of javascript variables
  //
  // console.log() is the JavaScript version of System.out.println() in Java
  //
  // If what you want to display using console.log() contains a variable:
  //
  //      1. Enclose what you want to display in back-ticks (`)
  //      2. Put the variable you want displayed inside ${}
  //
  console.log('-'.repeat(50));
  console.log('variable definition demo')
  console.log('-'.repeat(50));

  // Declare a variable where the value cannot be changed (a constant)
  const DAYS_IN_FEBRUARY = 29; //const indicated a variable that cannot be changed
  
  // Display the value in the DaysInFeb
  console.log(`The value of the DAYS_IN_FEBRUARY is: ${DAYS_IN_FEBRUARY}`)

  // Declares a variable those value can be changed
 
  // Try to change the value in the constant
  // DAYS_IN_FEBRUARY = 28;

  // There are 2 ways to define variables
  // Let and var
  //      let variableName : more safe and less prone to errors (preferred way to define variables in modern javaScript)
  //      var variableName: less safe and more prone to errors or hard to understan code

  // Declares a variable whose value can be changed
  let Days_In_Year = 366; //Leap year
  console.log(`There are ${Days_In_Year} days in 2024.`)
  
  Days_In_Year = 365;
  console.log(`There are ${Days_In_Year} in 2025.`)

  // Declares a variable that will always be an array
  // To declare an array in JavaScript code name = []

  let monthsOfYear = ["January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December"
]
console.log(`${monthsOfYear}`)
console.table(monthsOfYear)
}   // end of the variables function, starts at Line 43


/**
 * Functions can also accept parameters.
 * Notice the parameters do not have types.
 * 
 *  JavaDoc is a standard way of documenting code.
 *  JavaDoc is comments placed before a function to describe it
 *  @words - annotations in JavDoc to describes parts of a function
 * 
 *  @param - identifies parameters passed to the function in JavaDoc notation
 * 
 * @param {Number} param1 The first number to display
 * @param {Number} param2 The second number to display
 */
function printParameters(param1, param2) {
  console.log('-'.repeat(50));
  console.log('printParameter function - parameter example')
  console.log('-'.repeat(50));

  console.log(`The value of param1 is ${param1}`);
  console.log(`The value of param2 is ${param2}`);
}

/**
 * JavaScript has TWO types of equality
 * 
 * Compares two values x and y.
 * ==  is loose equality  - ignores the type of data - only looks at value
 * === is strict equality - requires both the type and value be the same
 * 
 * 1 ==  '1' - true  - values represents teh value one
 * 1 === '1' - false - types don't match (Number and String)
 * 
 * @param {Object} x
 * @param {Object} y
 */
function equality(x, y) {
  console.log(`x is ${typeof x}`);  // typeof returns the type of the value it is given
  console.log(`y is ${typeof y}`);

  console.log(`x == y : ${x == y}`); // Note use of expression (x==y) in the console log
  console.log(`x === y : ${x === y}`); // false
}

/**
 * Each value is inherently truthy or falsy.
 * 
 * Every value in JavaScript can be evaluated to true or false 
 * when used in a conditional statement
 * 
 * NaN - Not-a-Number - usually the result of arithmetic with non-numeric data
 * 
 * false, 0, '', null, undefined, and NaN are always falsy (false)
 * everything else is always truthy (true)
 * 
 * @param {Object} x The object to check for truthy or falsy,
 */
function falsy(x) {
  console.log('-'.repeat(50));
  console.log('falsy() to demonstrate truthy and falsey concept')
  console.log('-'.repeat(50));

  if (x) {  // Use whatever is passed a the condition in an if statement
    console.log(`${x} is truthy/true`);
  } else {
    console.log(`${x} is falsy/false`);
  }
}

/**
 *  Objects are simple key-value pairs (NOT instance of a class like in Java)
    JavaScript objects are JSON objects - JavaScriptObjectNotation

    an element in a JavaScript object: 
          attribute-name : value

    - values can be primitive data types
    - values can be arrays
    - or they can be functions
*/
function objects() {
  console.log('-'.repeat(50));
  console.log('objects() to demostrate Javascript objects')
  console.log('-'.repeat(50));

  // Define an object
  let contactInfo = {   // Define an object called contact
      firstName: "Natalie",
      lastName: "Morales",
      city: "Pheonix"
  }

  // Log the entire  object
  console.log(contactInfo)    // Because it is a group of values dont need `, $, or {}
  console.table(contactInfo)

  // Log individual elements/properties of  the object
 
  // Log each element of an array in an object 
  
  // Define a method to be used with an object

}

/*
########################
Function Overloading
########################

Function Overloading is not available in Javascript.

If you declare a function with the same name, more than one time in a script file,
the earlier ones are overriden/replaced and the most recent one will be used.
*/

function Add(num1, num2) {
  console.log('-'.repeat(50));
  console.log('Add(num1, num2) functio called')
  console.log('-'.repeat(50));
  return num1 + num2;
}
// This version of Add replaces the earlier version
function Add(num1, num2, num3) {
  console.log('-'.repeat(50));
  console.log('Add(num1, num2, num3) function called')
  console.log('-'.repeat(50));
  return num1 + num2 + num3;
}

/*
########################
Math Library
########################

A built-in `Math` object has properties and methods for mathematical constants and functions.
They are all called: Math.xxxxx

A link to a summary of all of them will be put in the class Google Doc
*/

function mathFunctions() {
  console.log('-'.repeat(50));
  console.log('mathFunctions() called to demonstrate common Math functions')
  console.log('-'.repeat(50));

  console.log("Math.PI : " + Math.PI);
  console.log("Math.LOG10E : " + Math.LOG10E);
  console.log("Math.abs(-10) : " + Math.abs(-10));
  console.log("Math.floor(1.99) : " + Math.floor(1.99));  // Round down to an integer value
  console.log("Math.ceil(1.01) : " + Math.ceil(1.01));    // Round up to an integer value
  console.log("Math.random() : " + Math.random());
}

/*
########################
String Methods
########################

The string data type has a lot of properties and methods similar to strings in Java/C#
*/

function stringFunctions(value) {
  console.log('-'.repeat(50));
  console.log('stringFunctions() called to demonstrate common string functions')
  console.log('-'.repeat(50));

  console.log(`.length -  ${value.length}`);
  console.log(`.endsWith('World') - ${value.endsWith("World")}`);
  console.log(`.startsWith('Hello') - ${value.startsWith("Hello")}`);
  console.log(`.indexOf('Hello') - ${value.indexOf("Hello")}`);  // index of where the word starts in the string
  console.log(`.substr(2,3) - ${value.substr(2,3)}`)             // .substr(start-index, length)
  console.log(`.substring(2,3) - ${value.substring(2,3)}`)       // .substring(start-index, end-index)
                                                                 //     up to, but including the char at end-index

  /*
    Other Methods
        - split(string)
        - substr(number, number)
        - substring(number, number)
        - toLowerCase()
        - trim()
        - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    */
}

/*
#########################
Array Processing Examples
#########################

JavaScript has a library of functions to make using Arrays easier
*/
function arrayFunctions() {
  console.log('-'.repeat(50));
  console.log('arrayFunctions() called to demonstrate common array functions')
  console.log('-'.repeat(50));

  // Define an array

  // Display the array as a table

  // Add an element to end of the array
  
  // Display the array as a table

  // Add an element to start of the array
  
  // Display the array as a table

  // Remove 0 elements and insert new elements at index 3
  
  // Display the array as a table

  // Remove the element at index 3
  
  // Display the array as a table
  
  // Remove two elements at index 3
  
  // Display the array as a table

  // Remove one element at the start of the array (shift elements up 1 position)
  
  // Display the array as a table

  // Remove the last element from the array
  
  // Display the array as a table

 // Find index of "Larry" and remove the element at that index
 
 // Display the array as a table
  
 // Define a new array

 // combine the stooges array and marxBros array into one
 
} 
