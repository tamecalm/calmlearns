console.log('' == '0'); // false
console.log('' == 0); // true
 
console.log('' === '0'); // false
console.log('' === 0); // false

// the first statement is false because ’’ and ‘0’ are both strings and are clearly not equal. 
// However, in the second case, both ‘0’ and the empty string (’’) are falsy 
// (in other words, they behave like false) and are therefore equal with respect to ==. 
// Both statements are false when you use ===.

/*

The tip here is to not compare different types to each another. Comparing different types of variables (such 
as a string with a number) is something you would not be able to do in a statically typed language anyway (a statically 
typed language is one where you must specify the type of a variable). If you keep this in mind, you can safely use ==. 
However, it is recommended that you always use === whenever possible.
Similar to == vs. ===, there are the inequality operators != and !==, which work in the same way. In other 
words, != does type coercion, whereas !== is strict.

*/