/*
Understanding this
The JavaScript keyword this has a very special place in the language. It is something that is passed to the function 
depending upon how you call it (somewhat like a function argument). The simplest way to think of it is that it refers to 
the calling context. The calling context is the prefix used to call a function
*/

var calm = {
  bar: 123,
  bas: function () {
  console.log('inside this.bar is:', this.bar);
  }
 }
  
 console.log('calm.bar is: ', calm.bar); // foo.bar is: 123
 calm.bas(); // inside this.bar is: 123

 /*

 Inside the function bas, this refers to calm since bas was called on calm and is therefore the calling context. 
So, what is the calling context if I call a function without any prefix? The default calling context is the Node.js global 
variable, as shown in this1.js

*/