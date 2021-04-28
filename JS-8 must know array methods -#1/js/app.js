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


