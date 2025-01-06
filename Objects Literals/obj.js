/*
* The most common way of creating an object in javascript is using the object notations 
* The Object Notations {}
*/

var kenny = {};
console.log(kenny);

kenny.age = 30;
console.log(kenny);

// Instead of Extending it at runtime, we can define which properties goes on by using the object literal notation

var calm = {
  age: 30
};
console.log(calm.age);

// We can addtionally nest object literals inside object literals 

var foo = {
  bar: 30,
  bas: {
    strings: 'some strings',
    number: 100
  }
};
console.log(foo);

// And we can also have arrays inside object literals aswell

var loo = {
  bar: 123,
  bas: [1, 2, 3]
};
console.log(loo);

// And we can also have these arrays themselves contains object neutrals 

var lap = {
  bar: 123,
  bas: [{
    qux: 1
  },
  {
    qux: 2
  },
  {
    qux: 3
  }]
};
console.log(lap.bar); // 123
console.log(lap.bas[0].qux); // 1
console.log(lap.bas[1].qux); // 2
console.log(lap.bas[2].qux); // 3

// In JavaScript, arrays are zero-indexed, 
// meaning the first element is at index 0,
// the second element is at index 1, and so on.

// Object literals are extremely handy as function arguments and return values