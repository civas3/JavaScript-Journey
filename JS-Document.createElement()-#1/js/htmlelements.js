let bodyElement = document.body;

//The document.createElement() method create html elements specified by tagName
let cardElement = document.createElement('div');
let imageContainer = document.createElement('div');
let imageElement = document.createElement('img');
let infoContainer = document.createElement('div');
let cardHeadingElement = document.createElement('h3');
let paragraphElement = document.createElement('p');
let btnElement = document.createElement('btn');

//The className property gets and sets the value of the class attribute of the specified
cardElement.className = "card";
imageContainer.className = "image-container";
imageElement.className = "image";
infoContainer.className = "info-container";
cardHeadingElement.className = "card-heading";
paragraphElement.className = "card-paragraph";
btnElement.className = "card-button";

//Works the same way as the className property except it sets the source of the imageElement
imageElement.src = "https://source.unsplash.com/random";

/*This sets the value od an attribute specified element. 
If exists then will be updated, otherwise the new attribute is added with the specidied name and value */
btnElement.setAttribute("onClick", "window.location.reload()");
imageElement.setAttribute("alt", "Image from Unsplash");

// 1. The innerText property returns just the text, without spacing and inner element tags
// 2. The innerHTML property returns the text, including all spacing and inner element tags
// 3. TextContent property returns the text with spacing, but without inner element tags
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_node_textcontent_innerhtml_innertext
cardHeadingElement.textContent = "Random Image";
paragraphElement.textContent = "Every time you refresh the page it will automaticly generates new image.";
btnElement.textContent = "Refresh page..";

// 1. append() can append several nodes and strings. 
// 2. appendChild() can only append one node.

bodyElement.appendChild(cardElement);
cardElement.append(imageContainer, infoContainer);

imageContainer.appendChild(imageElement);
infoContainer.append(cardHeadingElement, paragraphElement, btnElement);




console.log(cardElement, imageContainer, infoContainer, imageElement, cardHeadingElement, paragraphElement, btnElement);