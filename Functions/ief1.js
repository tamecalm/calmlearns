// You can execute a function immediately after you define it. 
// Simply wrap the function in parentheses () and invoke it

 (function calm() {
  console.log('calm was executed!');
 })();


 // The reason for having an immediately executing function is to create a new variable scope. 
 // An if, else, or while does not create a new variable scope in JavaScript. 
 // This fact is demonstrated in ief2.js