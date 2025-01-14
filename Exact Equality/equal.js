// One thing to be careful about in JavaScript is the difference between == and ===. 
// As JavaScript tries to be resilient against programming errors, == 
// tries to do type coercion between two variables. For example, 
// it converts a string to a number so that you can compare it with a number

console.log(`Logger: ${5 == '5'}`); // true
console.log(`Logger: ${5 === '5'}`); // false

// another idea
var sauce = 'source';
var source = sauce;
console.log(`Logger: ${sauce == 'sources'}`);

// another idean

var sauce = source;  // line 1
var source = sauce;   // line 2

if (sauce === 'source') {
    console.log('Yes, sauce is source!');
} else {
    console.log('No, sauce is not source!');
}

// == Loose Equality also known as type conversion
// === Strict Equality
// However, the choices it makes are not always ideal