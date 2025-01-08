// utility funcion
function fibonacci(n) {
  if (n < 2)
  return 1;
  else
  return fibonacci(n - 2) + fibonacci(n - 1);
 }
  
 // setup the timer
 console.time('timer');
 setTimeout(function () {
  console.timeEnd('timer'); // Prints much more than 1000ms
 }, 1000) 
 // Start the long running operation
 fibonacci(10);

 /*

 One lesson here is that Node.js is not the best option if you have a high CPU task that you need to do on a client 
request in a multiclient server environment. However, if this is the case, you will be very hard-pressed to find a scalable 
software solution in any platform. Most high CPU tasks should take place offline and are generally offloaded to a 
database server using things such as materialized views, map reduce, and so on. Most web applications access the 
results of these computations over the network, and this is where Node.js shines—evented network I/O.
Now that you understand what an event loop means and the implications of the fact that JavaScript portion of 
Node.js is single-threaded, let’s take another look at why Node.js is great for I/O applications.

*/