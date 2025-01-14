function calm() {
  console.log('is this called from globals? : ', this === global); // true
 }
 calm();
  
 /*
 Note that if we were running it in the browser, the global variable would be window instead of global.
 Of course, since JavaScript has great support for first-class functions, we can attach a function to any object and 
 change the calling context, as shown in this3.js
 */