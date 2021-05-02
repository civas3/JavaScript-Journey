const cards = [
{  symbol: '1', number: true},
{  symbol: '2', number: true},
{  symbol: '3', number: true},
{  symbol: '4', number: true},
{  symbol: '5', number: true},
{  symbol: '6', number: true},
{  symbol: '7', number: true},
{  symbol: '8', number: true},
{  symbol: '9', number: true},
{  symbol: '+', number: false},   
{  symbol: '-', number: false},   
{  symbol: '*', number: false} 
];


//.MAP METHOD -- creates a new array 
const cardsContainerOriginal = document.querySelector('#original');
const originalCards = cards.map(card => {
  return '<div class="card">' + '<span>' + card.symbol + '<span>' + '</div>';
})
cardsContainerOriginal.innerHTML = originalCards.join('\n');


//.FILTER METHOD + .MAP
const cardsContainerFilter = document.querySelector('#filter-method');
const filteredCards = cards.filter(card => card.number).map(card => {
    return '<div class="card">' + '<span>' + card.symbol + '<span>' + '</div>';
})
cardsContainerFilter.innerHTML = filteredCards.join('\n');


//.FIND METHOD
const cardsContainerFind = document.querySelector('#find-method');
const findCards = cards.find(card => card.symbol ==='7' ).map(card => {
  return '<div class="card">' + '<span>' + card.symbol + '<span>' + '</div>';
})
cardsContainerFind.innerHTML = findCards.join('\n');


// //.FOREACH METHOD == DO not creates a new array -> simply calls a provided function on each element in your array.

// const cardsContainerforEach = document.querySelector('#forEach-method');
// const forEachCards = cards.forEach(card).map(card => {
//   return '<div class="card">' + '<span>' + card.symbol + '<span>' + '</div>';
// })
// cardsContainerforEach.innerHTML = forEachCards.join('\n');




// let cards = cardsContainer.children;
// for (i = 0; i < cards.length; i++) {
//   if (cards[i].innerText.trim() === "color: red") {
//     console.log("Found it")
//     cards[i].classList.add("red");
//   }
// }

// .children Property gets a collection of the node (element)
// .trim() method used to remove whitespace from both sides of a string:

