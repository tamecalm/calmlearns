var calm = { bas: 123 };
var bar = { bas: calm.bas }; // copy
 
bar.bas = 456; // change copy
console.log(calm.bas); // 123, original is unchanged

// We can use quite a few third-party libraries to copy properties for arbitrary JavaScript objects. 
// (It is a simple function we can write ourselves if we wanted.) 