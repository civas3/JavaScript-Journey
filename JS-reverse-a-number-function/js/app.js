//1. JavaScript function that reverse a number
console.log("1. JavaScript function that reverse a number");
//EXPLANATION
const myNumber = 12345;
//console loging myNumber variable as number object
console.log(myNumber);

//.toString method converts number object into a string object
console.log(myNumber.toString());
//.split method splits a string object into an array of strings objects
console.log('12345'.split("")); 
//.reverse method only works on arrays objects
console.log(["1", "2", "3", "4", "5"].reverse());
//.join method converts an array object into an string object
console.log([5, 4, 3, 2, 1].join(""));

//REGULAR FUNCTION
// function reverseNumber(num){
//     let reversedNumber = num
//         .toString()
//         .split("")
//         .reverse()
//         .join("");
//     return reversedNumber;
// }
//   console.log(reverseNumber(54321));
 
//ARROW FUNCTION
const reverseNumber = num => (num.toString().split("").reverse().join(""));
console.log(reverseNumber(54321));