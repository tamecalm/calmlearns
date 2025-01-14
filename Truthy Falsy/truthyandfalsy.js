/* 
Truthy values are those that behave like true in 
boolean operations and falsy values are those that behave like false in boolean operations. It is generally easier to use 
if / else / ! for null / undefined instead of doing an explicit check. Here is an example

*/

console.log(null == undefined); // true
console.log(null === undefined); // false
 
// Are these all falsy?
if (!false) {
 console.log('falsy');
}
if (!null) {
 console.log('falsy');
}
if (!undefined) {
 console.log('falsy');
}

// Other important falsy values are 0 and the empty string ('').
// All object literals and arrays are truthy in JavaScript.