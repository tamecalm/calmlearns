function calmFunction(arg) {
  var variableInOuterFunction = arg;
  return function () {
    console.log(variableInOuterFunction);
  }
 }
  // outerFunction is a function that takes one parameter, arg.
  // Inside outerFunction, a new variable variableInOuterFunction is declared and initialized with the value of arg.
  // Then, outerFunction returns another function, which does not take any arguments. This returned function simply logs variableInOuterFunction to the console.

 var innerFunction = outerFunction('hello closure!');

 // The function outerFunction is called with the argument 'hello closure!'.
 // arg in this case is 'hello closure!', so variableInOuterFunction is set to 'hello closure!'.
 // The call to outerFunction returns a new function (the one inside the return statement), and it is assigned to the variable innerFunction.
  
 // Note the outerFunction has returned
 innerFunction(); // logs hello closure!

 // When innerFunction is called, it logs variableInOuterFunction to the console.
 // Even though variableInOuterFunction is defined inside outerFunction, JavaScript allows this inner function to "remember" and access the variable from the outer function, thanks to closures.
 // Therefore, it logs 'hello closure!', which was the value of arg passed to outerFunction.

// What is arg in the code?
// arg is the parameter of the function outerFunction. It represents the value that is passed to outerFunction when it is called.
// In the example, arg receives the value 'hello closure!' when outerFunction('hello closure!') is called.
// arg is used inside outerFunction to set the value of variableInOuterFunction, and this variable is later used inside the returned inner function.

// What are closures?
// A closure is a JavaScript feature where a function "remembers" the scope in which it was created, even if it is executed outside of that scope. In this case, the inner function returned by outerFunction "remembers" the value of variableInOuterFunction, even after outerFunction has finished executing.

// Thus, when we call innerFunction(), it still has access to variableInOuterFunction, which holds the value of arg ('hello closure!'), and logs it.

// Conclusion
// arg is just a parameter passed into outerFunction, and its value is used to define variableInOuterFunction.
// The example demonstrates how closures allow the inner function to remember variables from the outer function, even after the outer function has finished executing.
  
 // Now that we have an understanding of first-class functions and closures, 
 // we can look at what makes JavaScript a great language for server-side programming.