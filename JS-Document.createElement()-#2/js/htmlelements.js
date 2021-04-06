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

//div calculator-footer__button
let calculatorFooterButtonElement = document.createElement('div');
calculatorFooterButtonElement.className = "calculator-footer__button";
let calculatorFooterButtonElement1 = document.createElement('div');
calculatorFooterButtonElement1.className = "calculator-footer__button";
let calculatorFooterButtonElement2 = document.createElement('div');
calculatorFooterButtonElement2.className = "calculator-footer__button";
let calculatorFooterButtonElement3 = document.createElement('div');
calculatorFooterButtonElement3.className = "calculator-footer__button";
let calculatorFooterButtonElement4 = document.createElement('div');
calculatorFooterButtonElement4.className = "calculator-footer__button";
let calculatorFooterButtonElement5 = document.createElement('div');
calculatorFooterButtonElement5.className = "calculator-footer__button";
let calculatorFooterButtonElement6 = document.createElement('div');
calculatorFooterButtonElement6.className = "calculator-footer__button";
let calculatorFooterButtonElement7 = document.createElement('div');
calculatorFooterButtonElement7.className = "calculator-footer__button";
let calculatorFooterButtonElement8 = document.createElement('div');
calculatorFooterButtonElement8.className = "calculator-footer__button";
let calculatorFooterButtonElement9 = document.createElement('div');
calculatorFooterButtonElement9.className = "calculator-footer__button";
let calculatorFooterButtonElement10 = document.createElement('div');
calculatorFooterButtonElement10.className = "calculator-footer__button";
let calculatorFooterButtonElement11 = document.createElement('div');
calculatorFooterButtonElement11.className = "calculator-footer__button";
let calculatorFooterButtonElement12 = document.createElement('div');
calculatorFooterButtonElement12.className = "calculator-footer__button";
let calculatorFooterButtonElement13 = document.createElement('div');
calculatorFooterButtonElement13.className = "calculator-footer__button";
let calculatorFooterButtonElement14 = document.createElement('div');
calculatorFooterButtonElement14.className = "calculator-footer__button";
let calculatorFooterButtonElement15 = document.createElement('div');
calculatorFooterButtonElement15.className = "calculator-footer__button";

//div calculator-footer__button button
let calculatorFooterActualButtonElement = document.createElement('button');
let calculatorFooterActualButtonElement1 = document.createElement('button');
let calculatorFooterActualButtonElement2 = document.createElement('button');
let calculatorFooterActualButtonElement3 = document.createElement('button');
let calculatorFooterActualButtonElement4 = document.createElement('button');
let calculatorFooterActualButtonElement5 = document.createElement('button');
let calculatorFooterActualButtonElement6 = document.createElement('button');
let calculatorFooterActualButtonElement7 = document.createElement('button');
let calculatorFooterActualButtonElement8 = document.createElement('button');
let calculatorFooterActualButtonElement9 = document.createElement('button');
let calculatorFooterActualButtonElement10 = document.createElement('button');
let calculatorFooterActualButtonElement11 = document.createElement('button');
let calculatorFooterActualButtonElement12 = document.createElement('button');
let calculatorFooterActualButtonElement13 = document.createElement('button');
let calculatorFooterActualButtonElement14 = document.createElement('button');
let calculatorFooterActualButtonElement15 = document.createElement('button');




console.log(headerElement, headerHeading, sectionElement, containerElement, calculatorElement, calculatorHeaderElement,
    calculatorHeaderScreenElement, calculatorBodyElement, calculatorBodyBrandElement, calculatorBodyBrandSpanElement,
    calculatorBodySwitchElement, calculatorBodySwitchElementSwitch, calculatorBodySwitchInputElement,calculatorBodySwitchSpanElement, calculatorFooterElement,
    calculatorFooterButtonElement, calculatorFooterActualButtonElement, calculatorFooterActualButtonElement1, calculatorFooterActualButtonElement2, calculatorFooterActualButtonElement3, 
    calculatorFooterActualButtonElement4, calculatorFooterActualButtonElement5, calculatorFooterActualButtonElement6, calculatorFooterActualButtonElement7, calculatorFooterActualButtonElement8,
    calculatorFooterActualButtonElement9, calculatorFooterActualButtonElement10, calculatorFooterActualButtonElement11, calculatorFooterActualButtonElement12,
    calculatorFooterActualButtonElement13, calculatorFooterActualButtonElement14, calculatorFooterActualButtonElement15 );


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
    calculatorFooterElement.append(calculatorFooterButtonElement, calculatorFooterButtonElement1, calculatorFooterButtonElement2,
        calculatorFooterButtonElement3, calculatorFooterButtonElement4, calculatorFooterButtonElement5, calculatorFooterButtonElement6,
        calculatorFooterButtonElement7, calculatorFooterButtonElement8, calculatorFooterButtonElement9, calculatorFooterButtonElement10,
        calculatorFooterButtonElement11, calculatorFooterButtonElement12, calculatorFooterButtonElement13, calculatorFooterButtonElement14,
        calculatorFooterButtonElement15);
    calculatorFooterButtonElement.appendChild(calculatorFooterActualButtonElement);
    calculatorFooterButtonElement1.appendChild(calculatorFooterActualButtonElement1);
    calculatorFooterButtonElement2.appendChild(calculatorFooterActualButtonElement2);
    calculatorFooterButtonElement3.appendChild(calculatorFooterActualButtonElement3);
    calculatorFooterButtonElement4.appendChild(calculatorFooterActualButtonElement4);
    calculatorFooterButtonElement5.appendChild(calculatorFooterActualButtonElement5);
    calculatorFooterButtonElement6.appendChild(calculatorFooterActualButtonElement6);
    calculatorFooterButtonElement7.appendChild(calculatorFooterActualButtonElement7);
    calculatorFooterButtonElement8.appendChild(calculatorFooterActualButtonElement8);
    calculatorFooterButtonElement9.appendChild(calculatorFooterActualButtonElement9);
    calculatorFooterButtonElement10.appendChild(calculatorFooterActualButtonElement10);
    calculatorFooterButtonElement11.appendChild(calculatorFooterActualButtonElement11);
    calculatorFooterButtonElement12.appendChild(calculatorFooterActualButtonElement12);
    calculatorFooterButtonElement13.appendChild(calculatorFooterActualButtonElement13);
    calculatorFooterButtonElement14.appendChild(calculatorFooterActualButtonElement14);
    calculatorFooterButtonElement15.appendChild(calculatorFooterActualButtonElement15);
    calculatorFooterActualButtonElement.textContent="7";
    calculatorFooterActualButtonElement1.textContent="8";
    calculatorFooterActualButtonElement2.textContent="9";
    calculatorFooterActualButtonElement3.textContent="/";
    calculatorFooterActualButtonElement4.textContent="4";
    calculatorFooterActualButtonElement5.textContent="5";
    calculatorFooterActualButtonElement6.textContent="6";
    calculatorFooterActualButtonElement7.textContent="X";
    calculatorFooterActualButtonElement8.textContent="1";
    calculatorFooterActualButtonElement9.textContent="2";
    calculatorFooterActualButtonElement10.textContent="3";
    calculatorFooterActualButtonElement11.textContent="+";
    calculatorFooterActualButtonElement12.textContent="0";
    calculatorFooterActualButtonElement13.textContent=".";
    calculatorFooterActualButtonElement14.textContent="=";
    calculatorFooterActualButtonElement15.textContent="-";

