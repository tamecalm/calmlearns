// Whenever we have a function defined inside another function, 
// the inner function has access to the variables declared in the outer function. 
// Closures are best explained with examples.
// You can see that the inner function has access to a variable (variableInOuterFunction) from the outer scope. 
// The variables in the outer function have been closed by (or bound in) the inner function. 
// Hence the term closure. 
// The concept in itself is simple enough and fairly intuitive.

function outerFunction(arg) {
  var variableInOuterFunction = arg;
  
  function calm() {
  console.log(variableInOuterFunction); // Access a variable from the outer scope
  }
  
  // Call the local function to demonstrate that it has access to arg
  calm();
 }
  
 outerFunction('hello closure!'); // logs hello closure!