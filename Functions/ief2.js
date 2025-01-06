var calm = 123; {
  if (true) {
    // Now let us declare a new variable.
    var calm = 456;
  }
}
console.log(calm);

// The only recommended way of creating a new variable scope in JavaScript is using a function. 
// So, in order to create a new variable scope, 
// we can use an immediately executing function, as shown in ief3.js