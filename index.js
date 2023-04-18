function isTruthy(value) {
  if /*If value is truthy*/ (value) {
    //print the value is truthy
    console.log('The value is Truthy');
  } /*If value is 0*/ else if (value === 0){
    //print the value is 0, therefore falsy
    console.log("The value is 0, which is the only Falsy number");
  } /*If the value is an empty string*/ else if (value === ""){
    //print that the value is an empty string, which is the only falsy string
    console.log("The value is an empty string, which is the only Falsy string");
  } /*If value is null*/ else if (value === null){
    //print that the value is null
    console.log("The value is null");
  } /*If the value is undefined*/ else if (value === undefined){
    //print the value is undefined
    console.log("The value is undefined");
  } /*If the value is boolean False*/ else if (value === false){
    //print the value is false
    console.log("The value is a boolean False")
  };
};

//Execute the above function
isTruthy(false)
