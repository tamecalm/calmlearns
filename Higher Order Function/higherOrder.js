// Since JavaScript allows us to assign functions to variables, we can pass functions to other functions. 
// Functions that take functions as arguments are called higher-order functions. 
// A very common example of a higher-order function is setTimeout. 
// This is shown in higherOrder.js

setTimeout(function () {
  console.log('2000 Miliseconds passed before the demo started')
}, 2000);

// If you run this application in Node.js, 
// you will see the console.log message after two seconds and then the application will exit. 
// Note that we provided an anonymous function as the first argument to setTimeout. 
// This makes setTimeout a higher-order function.
// It is worth mentioning that there is nothing stopping us from creating a function and passing that in.
// An example is shown in higherOrder2.js