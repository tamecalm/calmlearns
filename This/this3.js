function calm() {
  this.calm = 123;
  console.log('Is this global?: ', this == global);
 }
  
 // without the new operator
 calm(); // Is this global?: true
 console.log(global.calm); // 123
  
 // with the new operator
 var newCalm = new calm(); // Is this global?: false
 console.log(newCalm.calm); // 123
  
 // You can see that we modified this.foo inside the function and newCalm.calm was set to that value.