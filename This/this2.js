var calm = {
  bar: 123
 };
  
 function bas() {
  if (this === global)
  console.log('called from global');
  if (this === calm)
  console.log('called from calm');
 }
  
 // global context
 bas(); // called from global
  
 // from foo
 calm.bas = bas;
 calm.bas(); // called from foo
 
 /*
 There is one last thing you need to know about this in JavaScript. If you call a function with the new JavaScript 
 operator, it creates a new JavaScript object and this within the function refers to this newly created object. Again check this3.js
 */