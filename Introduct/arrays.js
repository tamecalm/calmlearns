var kenny = [];

kenny.push(1);            // Add at the end
console.log(kenny);      // Prints [1]

kenny.unshift(2);       // Add to the top
console.log(kenny);    // Prints [2, 1]

// Arrays are zero index based 
console.log(kenny[0]); // Prints 2