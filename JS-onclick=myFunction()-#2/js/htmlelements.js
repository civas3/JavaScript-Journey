//class for storing infomation inside this variable
class Calculator{
    constructor(getCalculatorScreenElement){
        this.getCalculatorScreenElement = getCalculatorScreenElement;
        this.clear()
    }

   
    clear() {
        this.currentOperand = ''
        this.operation = undefined
      }

    delete(){

    }

    appendNumber(number){
        this.currentOperand = number
    }

    chooseOperation(operation){
        
    }

    compute(){

    }

    updateDisplay(){
        this.getCalculatorScreenElement.innerText = this.currentOperand  
      }
}


//selecting the button element with the atrribute "data-operand"
const getCalculatorScreenElement = document.querySelector('data-operand');

//selecting all the button elements with the atrribute "data-number"
const getNumberButtons = document.querySelectorAll('[data-number]');

//selecting all the button elements with the atrribute "data-operation"
const getOperationButtons = document.querySelectorAll('data-operation');

//selecting = button element with the atrribute "data-equals"
const getEqualsButton = document.querySelector('data-equals');

//selecting = button element with the atrribute "data-all-clear"
const getAllClearButton = document.querySelector('data-all-clear');

//selecting = button element with the atrribute "data-delete"
const getDeleteButton = document.querySelector('data-delete');


const calculator = new Calculator(getCalculatorScreenElement)

getNumberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
