console.time('timer');
setTimeout(function(){
 console.timeEnd('timer');
},1000)
 
// If you run this code, you should see a number quite close to what you would expect—in other words, 
// 1000ms. This callback for the timeout is called from the Node.js event loop.
// Now let’s write some code that takes a long time to execute, for instance,
// a nonoptimized method of calculating the nth Fibonacci number as shown in largeOperation.js