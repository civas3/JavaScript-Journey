let bodyElement = document.body;
//header
let headerElement = document.createElement("div");
headerElement.className = "header";
let headerHeading = document.createElement("h1");

//section calculator
let sectionElement = document.createElement("section");
sectionElement.id = "calculator";

//div container
let containerElement = document.createElement("div");
containerElement.className = "container";

//div calculator
let calculatorElement = document.createElement("div");
calculatorElement.className = "calculator";

//div calculator-header
let calculatorHeaderElement = document.createElement("div");
calculatorHeaderElement.className = "calculator-header";

//div calculator-header__screen
let calculatorHeaderScreenElement = document.createElement("div");
calculatorHeaderScreenElement.className = "calculator-header__screen";

let calculatorHeaderScreenpreviousElement = document.createElement("div");
calculatorHeaderScreenpreviousElement.className = "previous-operand";

let calculatorHeaderScreenCurrentElement = document.createElement("div");
calculatorHeaderScreenCurrentElement.className = "current-operand";

//div calculator-body
let calculatorBodyElement = document.createElement("div");
calculatorBodyElement.className = "calculator-body";

//div calculator-body__brand
let calculatorBodyBrandElement = document.createElement("div");
calculatorBodyBrandElement.className = "calculator-body__brand";
let calculatorBodyBrandSpanElement = document.createElement("span");

//div calculator-body__switch
let calculatorBodySwitchElement = document.createElement("div");
calculatorBodySwitchElement.className = "calculator-body__switch";

//div calculator-body__swithc label .switch
let calculatorBodySwitchElementSwitch = document.createElement("label");
calculatorBodySwitchElementSwitch.className = "switch";

//div calculator-body__switch input
let calculatorBodySwitchInputElement = document.createElement("input");
calculatorBodySwitchInputElement.setAttribute("type", "checkbox");
//div calculator-body__switch span.slider
let calculatorBodySwitchSpanElement = document.createElement("span");
calculatorBodySwitchSpanElement.className = "slider";

//div calculator-footer
let calculatorFooterElement = document.createElement("div");
calculatorFooterElement.className = "calculator-footer";

bodyElement.append(headerElement, sectionElement);
headerElement.appendChild(headerHeading);
headerHeading.innerHTML =
  "Cals<span>c</span><span>o</span><span>o</span><span>l</span>ator";
sectionElement.appendChild(containerElement);
containerElement.appendChild(calculatorElement);
calculatorElement.append(
  calculatorHeaderElement,
  calculatorBodyElement,
  calculatorFooterElement
);
calculatorHeaderElement.appendChild(calculatorHeaderScreenElement);
calculatorHeaderScreenElement.append(
  calculatorHeaderScreenpreviousElement,
  calculatorHeaderScreenCurrentElement
);
calculatorHeaderScreenpreviousElement.setAttribute("data-previous-operand", "");
calculatorHeaderScreenCurrentElement.setAttribute("data-current-operand", "");
calculatorBodyElement.append(
  calculatorBodyBrandElement,
  calculatorBodySwitchElement
);
calculatorBodyBrandElement.appendChild(calculatorBodyBrandSpanElement);
calculatorBodyBrandSpanElement.textContent = "CASIO";
calculatorBodySwitchElement.appendChild(calculatorBodySwitchElementSwitch);
calculatorBodySwitchElementSwitch.append(
  calculatorBodySwitchInputElement,
  calculatorBodySwitchSpanElement
);

//let calculator-footer__button data array
let calculatorButtonData = [
  { symbol: "7" },
  { symbol: "8" },
  { symbol: "9" },
  { symbol: "/" },
  { symbol: "4" },
  { symbol: "5" },
  { symbol: "6" },
  { symbol: "*" },
  { symbol: "1" },
  { symbol: "2" },
  { symbol: "3" },
  { symbol: "+" },
  { symbol: "0" },
  { symbol: "." },
  { symbol: "DEL" },
  { symbol: "-" },
  { symbol: "AC" },
  { symbol: "CE" },
  { symbol: "=" },
];

//all calculator-footer__button data will be stored inside .calculator-footer__button div element
const calculatorFooter = document.querySelector(".calculator-footer");
//map function that will scan let calculatorButtonData array
let calculatorButtonsInfo = calculatorButtonData.map(function (buttonData) {
  return (
    '<div class="calculator-footer__button">' +
    "<button>" +
    buttonData.symbol +
    "</button>" +
    "</div>"
  );
});
calculatorFooter.innerHTML = calculatorButtonsInfo.join("\n");

// add CSS class to a button with the value '='
let buttonClass = calculatorFooter.children;
for (i = 0; i < buttonClass.length; i++) {
  if (buttonClass[i].innerText.trim() === "=") {
    buttonClass[i].classList.add("calculator-footer__button--double");
  }
}

// add attribute 'data-number' to all buttons that contain a number
let buttonNumber = calculatorFooter.querySelectorAll(
  ".calculator-footer__button"
);

const numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
buttonNumber.forEach((el) => {
  let button = el.querySelector("button");
  if (numberArray.includes(button.innerText.trim())) {
    button.setAttribute("data-number", "");
  }
});

// add attribute 'data-operation' to all buttons that contain operation symbols
const operationArray = ["/", "*", "+", "-"];
buttonNumber.forEach((el) => {
  let button = el.querySelector("button");
  if (operationArray.includes(button.innerText.trim())) {
    button.setAttribute("data-operation", "");
  }
});

// add attribute 'data-equals' to a button that contain operation symbols =
const equalsOperator = "=";
buttonNumber.forEach((el) => {
  let button = el.querySelector("button");
  if (equalsOperator.includes(button.innerText.trim())) {
    button.setAttribute("data-equals", "");
  }
});

// add attribute 'data-equals' to a button that contain operation symbols =
const deleteOperator = "DEL";
buttonNumber.forEach((el) => {
  let button = el.querySelector("button");
  if (deleteOperator.includes(button.innerText.trim())) {
    button.setAttribute("data-delete", "");
  }
});

// add attribute 'data-all-clear' to a buttons that contain operation symbol AC and CE
const clearAllOperator = ["AC", "CE"];
buttonNumber.forEach((el) => {
  let button = el.querySelector("button");
  if (clearAllOperator.includes(button.innerText.trim())) {
    button.setAttribute("data-all-clear", "");
  }
});

//calculator class
class Calculator {
  //takes all the inputs for ir as well as all functions for calculator
  //placing our display text for calculator
  constructor(previousOperandTextEl, currentOperandTextEl) {
    this.previousOperandTextEl = previousOperandTextEl;
    this.currentOperandTextEl = currentOperandTextEl;
    this.clear();
  }

  //clear button function
  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  //delete number function
  delete() {
    //take the last value from the string and chop it off with slice method.
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  /*everytime user click on the number it appears on the calculator screen
  also if statement makes sure that period can be allowed only once on the screen*/
  appendNumber(number) {
    if (number === "." && this.currentOperand.includes(".")) return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    //if (checking )the current operand is empty it wont lets us execute any firther into our code
    if (this.currentOperand === "") return;
    //if (checking) for automatic computation
    if (this.previousOperand !== "") {
      this.calculate();
    }
    //setting the operation so the calculator know what operation it needs to use when it calculates the value
    this.operation = operation;
    //we done typing the current number so we recycle that over this previous operand
    this.previousOperand = this.currentOperand;
    //and we want to clear our the new current operand
    this.currentOperand = "";
  }

  //
  calculate() {
    let calculation;
    //convetring string to a number
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    //if the user do not enter any numbers, equal button wont execute
    if (isNaN(prev) || isNaN(current)) return;
    //declaring calulator if statements
    switch (this.operation) {
      case "+":
        //if user clicks + oepration = previous number + this number
        calculation = prev + current;
        //if the if statement is true , break the code and stop executing
        break;
      case "-":
        calculation = prev - current;
        break;
      case "*":
        calculation = prev * current;
        break;
      case "/":
        calculation = prev / current;
        break;
      case "+":
      //if user dont click on any of these operation symbols dont do any calculation
      default:
        return;
    }
    this.currentOperand = calculation;
    this.operation = undefined;
    this.previousOperand = "";
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split(".")[0]);
    const decimalDigits = stringNumber.split(".")[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = "";
    } else {
      integerDisplay = integerDigits.toLocaleString("en", {
        maximumFractionDigits: 0,
      });
    }
    if (decimalDigits != null) {
      return `${integerDisplay}. ${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  //this function update the values inside the calculator screen
  updateDisplay() {
    this.currentOperandTextEl.innerText = this.getDisplayNumber(
      this.currentOperand
    );
    //the current operand becomes previous operand after operation been clicked
    if (this.operation != null) {
      this.previousOperandTextEl.innerText =
        //concatenation of both our previous operand here
        //string that has the operation appended tp the end of it
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      //clears preveious operant at the top of the calculator screen
      this.previousOperandTextEl.innerText = "";
    }
  }
}

//calculator elements
const calculatorScreen = calculatorHeaderScreenElement;
const previousOperandTextEl = document.querySelector("[data-previous-operand]");
const currentOperandTextEl = document.querySelector("[data-current-operand]");
const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButtons = document.querySelectorAll("[data-all-clear]");
const powerButton = calculatorBodySwitchSpanElement;
const powerSwitch = calculatorBodySwitchInputElement;

console.log();

//calculator object
const calculator = new Calculator(previousOperandTextEl, currentOperandTextEl);

powerSwitch.addEventListener("click", () => {
  calculatorScreen.classList.toggle("screen-bg-color");
});

/*selecting all the buttons and adding event listener 'on' click 
, when when the button is clicked it will display the number that is inside 
the button, then it will update the calculator display screen user click on the number button*/
numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
  });
});

//All the operation buttons to work on click, and display the calculator screen
operationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    calculator.chooseOperation(button.innerText);
    calculator.updateDisplay();
  });
});

// = button calculate the numbers total value and displays the screen
equalButton.addEventListener("click", (button) => {
  calculator.calculate();
  calculator.updateDisplay();
});

// CE and AC buttons clear the calculator screen
clearButtons.forEach((button) => {
  button.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
  });
});

// delete button deletes the last digit value of the sum
deleteButton.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});

//calcultor ref https://www.youtube.com/watch?v=j59qQ7YWLxw&t=1291s
