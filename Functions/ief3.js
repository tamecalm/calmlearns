var calm = 123; 
if (true) {
  (function() { // Create a new scope
     var calm = 456;
  })();
}
console.log(calm); 

// Notice that we choose to avoid needlessly naming the function.
// This is called an anonymous function, which we will explain next.