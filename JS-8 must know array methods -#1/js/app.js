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
const findCards = cards.filter(card => card.symbol ==='7' ).map(card => {
  return '<div class="card">' + '<span>' + card.symbol + '<span>' + '</div>';
})
cardsContainerFind.innerHTML = findCards.join('\n');
