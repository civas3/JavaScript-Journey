let bodyElement = document.body;

//section id="contact-form"
let sectionElement = document.createElement("section");
sectionElement.id = "contact-form";

//class="section-content"
let sectionContentElement = document.createElement("div");
sectionContentElement.className = "section-content";

//section-content__header
let sectionContentHeaderElement = document.createElement("div");
sectionContentHeaderElement.className = "section-content__header";
let sectionContentHedingElement = document.createElement("h1");
sectionContentHedingElement.textContent = "Contact form";

//section-content__body
let sectionContentBodyElement = document.createElement("div");
sectionContentBodyElement.className = "section-content__body";

//form
let contactFormElement = document.createElement("form");
contactFormElement.setAttribute("action", "#");
contactFormElement.setAttribute("method", "post");

//form label name
let contactFormNameLabelElement = document.createElement("label");
contactFormNameLabelElement.setAttribute("for", "name");
contactFormNameLabelElement.textContent = "Full name";

//form label email
let contactFormEmailLabelElement = document.createElement("label");
contactFormEmailLabelElement.setAttribute("for", "email");
contactFormEmailLabelElement.textContent = "Email";

//form label country
let contactFormCountryLabelElement = document.createElement("label");
contactFormCountryLabelElement.setAttribute("for", "country");
contactFormCountryLabelElement.textContent = "Country";

//form label subject
let contactFormSubjectLabelElement = document.createElement("label");
contactFormSubjectLabelElement.setAttribute("for", "subject");
contactFormSubjectLabelElement.textContent = "Subject";

//form label message
let contactFormMessageLabelElement = document.createElement("label");
contactFormMessageLabelElement.setAttribute("for", "message");
contactFormMessageLabelElement.textContent = "Message";

//form name input
let contactFormTextInputElement = document.createElement("input");
contactFormTextInputElement.id = "name";
contactFormTextInputElement.setAttribute("type", "text");
contactFormTextInputElement.setAttribute("name", "name");
contactFormTextInputElement.setAttribute("placeholder", "Your full name..");
contactFormTextInputElement.setAttribute("required", "required");

//form email input
let contactFormEmailInputElement = document.createElement("input");
contactFormEmailInputElement.id = "email";
contactFormEmailInputElement.setAttribute("name", "email");
contactFormEmailInputElement.setAttribute("placeholder", "Your e-mail..");
contactFormEmailInputElement.setAttribute("required", "required");

//form btn-send-message input
let contactFormSendMessageInputElement = document.createElement("input");
contactFormSendMessageInputElement.className = "btn-send-message";
contactFormSendMessageInputElement.setAttribute("name", "submit");
contactFormSendMessageInputElement.setAttribute("type", "submit");
contactFormSendMessageInputElement.setAttribute("value", "send");

//form country select
let contactFormCountrySelectElement = document.createElement("select");
contactFormCountrySelectElement.id = "country";
contactFormCountrySelectElement.setAttribute("name", "country");
contactFormCountrySelectElement.setAttribute("required", "required");

//form subject select
let contactFormSubjectSelectElement = document.createElement("select");
contactFormSubjectSelectElement.id = "Subject";
contactFormSubjectSelectElement.setAttribute("name", "Subject");
contactFormSubjectSelectElement.setAttribute("required", "required");

//form country select options
let contactFormCountrySelectOptionElement = document.createElement("option");
contactFormCountrySelectOptionElement.setAttribute("value", "choose");
contactFormCountrySelectOptionElement.textContent = "Click here to select..";

let contactFormCountrySelectOption1Element = document.createElement("option");
contactFormCountrySelectOption1Element.setAttribute("value", "United Kingdom");
contactFormCountrySelectOption1Element.textContent = "United Kingdom";

let contactFormCountrySelectOption2Element = document.createElement("option");
contactFormCountrySelectOption2Element.setAttribute("value", "USA");
contactFormCountrySelectOption2Element.textContent = "USA";

//form subject select options
let contactFormSubjectSelectOptionElement = document.createElement("option");
contactFormSubjectSelectOptionElement.setAttribute("value", "Choose");
contactFormSubjectSelectOptionElement.textContent = "Click here to select..";

let contactFormSubjectSelectOption1Element = document.createElement("option");
contactFormSubjectSelectOption1Element.setAttribute("value", "Media Enquiries");
contactFormSubjectSelectOption1Element.textContent = "Media Enquiries";

let contactFormSubjectSelectOption2Element = document.createElement("option");
contactFormSubjectSelectOption2Element.setAttribute("value", "Other");
contactFormSubjectSelectOption2Element.textContent = "Other";

//textarea
let contactFormTextareaElement = document.createElement("textarea");
contactFormTextareaElement.id = "message";
contactFormTextareaElement.setAttribute("name", "message");
contactFormTextareaElement.setAttribute(
  "placeholder",
  "Write your message here.."
);
contactFormTextareaElement.setAttribute("style", "height:80px");

bodyElement.appendChild(sectionElement);
sectionElement.appendChild(sectionContentElement);
sectionContentElement.append(
  sectionContentHeaderElement,
  sectionContentBodyElement
);
sectionContentHeaderElement.appendChild(sectionContentHedingElement);
sectionContentBodyElement.appendChild(contactFormElement);
contactFormElement.append(
  contactFormNameLabelElement,
  contactFormTextInputElement,
  contactFormEmailLabelElement,
  contactFormEmailInputElement,
  contactFormCountryLabelElement,
  contactFormCountrySelectElement,
  contactFormSubjectLabelElement,
  contactFormSubjectSelectElement,
  contactFormMessageLabelElement,
  contactFormTextareaElement,
  contactFormSendMessageInputElement
);
contactFormCountrySelectElement.append(
  contactFormCountrySelectOptionElement,
  contactFormCountrySelectOption1Element,
  contactFormCountrySelectOption2Element
  );

contactFormSubjectSelectElement.append(
  contactFormSubjectSelectOptionElement,
  contactFormSubjectSelectOption1Element,
  contactFormSubjectSelectOption2Element
  );

// 1. append() can append several nodes and strings.
// 2. appendChild() can only append one node.

//bodyElement.appendChild(cardElement);
//cardElement.append(imageContainer, infoContainer);

//imageContainer.appendChild(imageElement);
//infoContainer.append(cardHeadingElement, paragraphElement, btnElement);
/*
console.log(
  sectionElement,
  sectionContentElement,
  sectionContentHeaderElement,
  sectionContentHedingElement,
  sectionContentBodyElement,
  contactFormElement,
  contactFormNameLabelElement,
  contactFormEmailLabelElement,
  contactFormCountryLabelElement,
  contactFormSubjectLabelElement,
  contactFormMessageLabelElement,
  contactFormTextInputElement,
  contactFormEmailInputElement,
  contactFormSendMessageInputElement,
  contactFormCountrySelectElement,
  contactFormSubjectSelectElement,
  contactFormCountrySelectOptionElement,
  contactFormCountrySelectOption1Element,
  contactFormCountrySelectOption2Element,
  contactFormSubjectSelectOptionElement,
  contactFormSubjectSelectOption1Element,
  contactFormSubjectSelectOption2Element,
  contactFormTextareaElement
);
*/
