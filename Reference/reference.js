// JavaScript was designed to be simple and work with limited computer resources. 
// Whenever we assign one variable to another, JavaScript copies a reference to the variable

var calm = {bar: 123};
var bas = calm;
bas.bar= 456;
console.log(calm.bar); // 456

// Passing objects around in function calls is extremely lightweight no matter what the size of the object, 
// since we only copy the reference to the object and not every single property of the object. 
// To make true copies of data (that break the reference link), 
// you can just create a new object literal as shown in reference1.js