//Start of isTruthy Function
function isTruthy(value) {
  if /*If value is truthy*/ (value) {
    //print the value is truthy
    console.log('The value is Truthy');
  } /*If value is 0*/ else if (value === 0){
    //print the value is 0, therefore Falsy
    console.log("The value is 0, which is the only Falsy number");
  } /*If the value is an empty string*/ else if (value === ""){
    //print that the value is an empty string, which is the only Falsy string
    console.log("The value is an empty string, which is the only Falsy string");
  } /*If value is null*/ else if (value === null){
    //print that the value is null
    console.log("The value is null");
  } /*If the value is undefined*/ else if (value === undefined){
    //print the value is undefined
    console.log("The value is undefined");
  } /*If the value is boolean False*/ else if (value === false){
    //print the value is false
    console.log("The value is a boolean false, which is Falsy")
  };
};
//Execute and test the above function
isTruthy("I am a string"); //The value is Truthy
isTruthy(false); //The value is a boolean false, which is Falsy
isTruthy(null); //The value is null
isTruthy(undefined); //The value is undefined
isTruthy(0); //The value is 0, which is the only Falsy number
isTruthy(""); //The value is an empty string, which is the only Falsy string
//End of isTruthy Function

//Start of numberLine Function
const numberLine = (num1, num2) => {
  sum = num1 + num2;
  if /*If sum is gt 100*/ (sum > 100){
    console.log(`The sum of ${num1}+${num2}=${sum}, which is greater than 100`);
  } /*If sum is lt 100, but gt 0*/ else if (sum < 100 && sum > 0){
    console.log(`The sum of ${num1}+${num2}=${sum}, which is greater than 0`);
  } /*If sum is eq to 0*/ else if (sum === 0){
    console.log(`The sum of ${num1}+${num2}=${sum}`);
  } /*If sum is lt 0, but gt -1000*/ else if (sum < 0 && sum >= - 1000){
    console.log(`The sum will be negative`);
    console.log(`The sum of ${num1}+${num2}=${sum}, which is less than 0`);
  } /*If sum is gt -1000*/ else if (sum <= -1000){
    console.log(`The sum will be negative`);
    console.log(`The sum of ${num1}+${num2}=${sum}, which is less than -1000`);
  };
};
//Execute numberLine Function
numberLine(50,51);
numberLine(99,-2);
numberLine(0,101);
numberLine(500,-500);
numberLine(-1000,0);
numberLine(-5,0);
//End of numberLine Function

//Start of isGreaterThanFive Function
const isGreaterThanFive = (num1, num2) => {
  if /*If both numbers are ge 5*/ (num1 >= 5 && num2 >= 5) {
    //print true
    console.log(true);
  } /*If one of the numbers are lt 5*/ else if ((num1 >= 5 && num2 < 5) || (num1 < 5 && num2 >= 5) || (num1 > 5 && num2 > 5)){
    //print false
    console.log(false);
  };
};
//Execute isGreaterThanFive Function
isGreaterThanFive(5,6); //true
isGreaterThanFive(10,11); //true
isGreaterThanFive(0,0); //false
isGreaterThanFive(1000,-1000); //false
isGreaterThanFive(6,4); //false
isGreaterThanFive(5,5); //true
//End of isGreaterThanFive Function

//Start of pairAndCompare Function
const pairAndCompare = (param1A, param1B, param2A, param2B) => {
  if /*Compares whether params1 or params2 are equal*/ (param1A === param1B || param2A === param2B){
    //print true
    console.log(true);
  } else {
    //print false
    console.log(false);
  }
};
//Execute and test pairAndCompare Function
pairAndCompare("cat", "cat", 6, "6"); //true
pairAndCompare("five", 5, "dog", "dawg"); //false
pairAndCompare(0, false, "horse", "horse"); //true
pairAndCompare("eight", "eight", "ate", "ate"); //true
pairAndCompare(11, "eleven", "four", "for"); //false
pairAndCompare("cake", "cake", "pie", "pie"); //true
//End of pairAndCompare Function