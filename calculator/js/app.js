let bodyElement = document.body;
//header
let headerElement = document.createElement('div');
headerElement.className = "header";
let headerHeading = document.createElement('h1');

//section calculator
let sectionElement = document.createElement('section');
sectionElement.id = "calculator";

//div container
let containerElement = document.createElement('div')
containerElement.className = "container";

//div calculator
let calculatorElement= document.createElement('div')
calculatorElement.className = "calculator";

//div calculator-header
let calculatorHeaderElement = document.createElement('div');
calculatorHeaderElement.className = "calculator-header";

//div calculator-header__screen
let calculatorHeaderScreenElement = document.createElement('div');
calculatorHeaderScreenElement.className = "calculator-header__screen";

//div calculator-body
let calculatorBodyElement = document.createElement('div');
calculatorBodyElement.className = "calculator-body";

//div calculator-body__brand
let calculatorBodyBrandElement = document.createElement('div');
calculatorBodyBrandElement.className = "calculator-body__brand";
let calculatorBodyBrandSpanElement = document.createElement('span');

//div calculator-body__switch
let calculatorBodySwitchElement = document.createElement('div');
calculatorBodySwitchElement.className = "calculator-body__switch";

//div calculator-body__swithc label .switch
let calculatorBodySwitchElementSwitch = document.createElement('label');
calculatorBodySwitchElementSwitch.className = "switch";

//div calculator-body__switch input
let calculatorBodySwitchInputElement = document.createElement('input');
calculatorBodySwitchInputElement.setAttribute("type", "checkbox");
//div calculator-body__switch span.slider
let calculatorBodySwitchSpanElement = document.createElement('span');
calculatorBodySwitchSpanElement.className = "slider";

//div calculator-footer
let calculatorFooterElement = document.createElement('div');
calculatorFooterElement.className = "calculator-footer";


     bodyElement.append(headerElement, sectionElement);
     headerElement.appendChild(headerHeading);
     headerHeading.innerHTML = "Cals<span>c</span><span>o</span><span>o</span><span>l</span>ator";
     sectionElement.appendChild(containerElement);
     containerElement.appendChild(calculatorElement);
     calculatorElement.append(calculatorHeaderElement, calculatorBodyElement, calculatorFooterElement);
     calculatorHeaderElement.appendChild(calculatorHeaderScreenElement);
     calculatorBodyElement.append(calculatorBodyBrandElement, calculatorBodySwitchElement);
     calculatorBodyBrandElement.appendChild(calculatorBodyBrandSpanElement);
     calculatorBodyBrandSpanElement.textContent = "CASIO";
     calculatorBodySwitchElement.appendChild(calculatorBodySwitchElementSwitch);
     calculatorBodySwitchElementSwitch.append(calculatorBodySwitchInputElement, calculatorBodySwitchSpanElement);
 

//let calculator-footer__button data array
let calculatorButtonData = [
    {symbol: '7'},
    {symbol: '8'},
    {symbol: '9'},
    {symbol: '/'},
    {symbol: '4'},
    {symbol: '5'},
    {symbol: '6'},
    {symbol: 'X'},
    {symbol: '1'},
    {symbol: '2'},
    {symbol: '3'},
    {symbol: '+'},
    {symbol: '0'},
    {symbol: '.'},
    {symbol: 'DEL'},
    {symbol: '-'},
    {symbol: 'AC'},
    {symbol: 'CE'},
    {symbol: '='}
];

//all calculator-footer__button data will be stored inside .calculator-footer__button div element
const calculatorFooter = document.querySelector('.calculator-footer');
//map function that will scan let calculatorButtonData array
let calculatorButtonsInfo = calculatorButtonData.map(function(buttonData){
    return   '<div class="calculator-footer__button">' + '<button>' + buttonData.symbol + '</button>' + '</div>';
});
calculatorFooter.innerHTML = calculatorButtonsInfo.join('\n');



// add CSS class to a button with the value '='    
let  buttonClass = calculatorFooter.children;
for (i = 0; i < buttonClass.length; i++) {
  if (buttonClass[i].innerText.trim() === "=") {
    buttonClass[i].classList.add("calculator-footer__button--double");
  }
}


// add attribute 'data-number' to all buttons that contain a number    
let buttonNumber = calculatorFooter.querySelectorAll('.calculator-footer__button');

const numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
buttonNumber.forEach((el) => {
  let button = el.querySelector('button');
  if (numberArray.includes(button.innerText.trim())) {
    button.setAttribute('data-number', '');
  }
});

// add attribute 'data-operation' to all buttons that contain operation symbols   
const operationArray = ['/', 'X', '+', '-'];
buttonNumber.forEach((el) => {
  let button = el.querySelector('button');
  if (operationArray.includes(button.innerText.trim())) {
    button.setAttribute('data-operation', '');
  }
});

// add attribute 'data-equals' to a button that contain operation symbols =   
const equalsOperator = '=';
buttonNumber.forEach((el) => {
  let button = el.querySelector('button');
  if (equalsOperator.includes(button.innerText.trim())) {
    button.setAttribute('data-equals', '');
  }
});



