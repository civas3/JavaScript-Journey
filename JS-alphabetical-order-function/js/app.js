//2. JavaScript function that returns a passed string with letters in alphabetical order
console.log("2. JavaScript function that returns a passed string with letters in alphabetical order");
//EXPLANATION
let allAlphabetLetters = "zxcvbnmpoiuytrewqasdfghjkl";
console.log(allAlphabetLetters);
//.split method splits a string object into an array of strings objects
console.log(allAlphabetLetters.split(""));
//.sort method sorts the elements of an array in place
console.log(allAlphabetLetters.split("").sort());
//.join method converts an array object into an string object
console.log(allAlphabetLetters.split("").sort().join(""));

// //REGULAR FUNCTION
// function alphabeticalOrder(object){
//     let alphabeticalOrderd = object
//         .split("")
//         .sort()
//         .join("");
//     return alphabeticalOrderd;           
// }

// console.log(alphabeticalOrder("mnbvcxzasdfghjklpoiuytrewq"));

//ARROW FUNCTION
const alphabeticalOrder = object =>(object.split("").sort().join(""));
console.log(alphabeticalOrder("mnbvcxzasdfghjklpoiuytrewq"));


let textAreaEl = document.querySelector('#text-area');
let submitButtonEl = document.querySelector('#output-button');
let outputAreaEl = document.querySelector('#output');


submitButtonEl.addEventListener("click", () => {
    textAreaValue = alphabeticalOrder(textAreaEl.value)  
    outputAreaEl.textContent=textAreaValue;
});

