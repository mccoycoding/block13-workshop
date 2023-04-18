//Start of isTruthy Function
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
  } /*If sum is lt 0, but gt -1000*/ else if (sum < 0 && sum > - 1000){
    console.log(`The sum will be negative`);
    console.log(`The sum of ${num1}+${num2}=${sum}, which is less than 0`);
  } /*If sum is gt -1000*/ else if (sum < -1000){
    console.log(`The sum will be negative`);
    console.log(`The sum of ${num1}+${num2}=${sum}, which is less than -1000`);
  };
};
//Execute numberLine Function
numberLine(25, 76);
numberLine(50, -250);
numberLine(-525, -525);
//End of numberLine Function

//Start of isGreaterThanFive Function
const isGreaterThanFive = (num1, num2) => {
  if (num1 >= 5 && num2 >= 5) {
    console.log(true);
  } else if ((num1 >= 5 && num2 < 5) || (num1 < 5 && num2 >= 5) || (num1 > 5 && num2 > 5)){
    console.log(false);
  };
};
//Execute isGreaterThanFive Function
isGreaterThanFive(25, 2);
isGreaterThanFive(2, 25);
isGreaterThanFive(2, 2);
//End of isGreaterThanFive Function

//Start of pairAndCompare Function
const pairAndCompare = (param1A, param1B, param2A, param2B) => {
  if (param1A === param1B || param2A === param2B){
    console.log(true);
  } else (
    console.log(false)
  )
};
//Execute and test pairAndCompare Function
pairAndCompare("cat", "cat", 6, "6");
pairAndCompare("five", 5, "dog", "dawg");
pairAndCompare(0, false, "horse", "horse");
pairAndCompare("eight", "eight", "ate", "ate");
pairAndCompare(11, "eleven", "four", "for");
pairAndCompare("cake", "cake", "pie", "pie");
//End of pairAndCompare Function