let colorCard = [
{  color: 'color: none'},
{  color: 'color: red'},
{  color: 'color: none'},
{  color: 'color: none'},
{  color: 'color: red'},
{  color: 'color: none'},
{  color: 'color: none'},
{  color: 'color: red'}
];

const allCards = document.querySelector('#all-cards');

let card = colorCard.map(function(cardData){
    return '<div class="card">'  +
    '<span>' + cardData.color  + '<span>' +
            '</div>';
});

allCards.innerHTML = card.join('\n');




// let cards = allCards.children;
// for (i = 0; i < cards.length; i++) {
//   if (cards[i].innerText.trim() === "color: red") {
//     console.log("Found it")
//     cards[i].classList.add("red");
//   }
// }

// .children Property gets a collection of the node (element)
// .trim() method used to remove whitespace from both sides of a string:

