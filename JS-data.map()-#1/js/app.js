//all the data being stored in contactCardData array
let contactCardData = [
    {
        name: 'Paul',
        age: '28',
        contact: '075123123123'
    },
    {
        name: 'Eva',
        age: '28',
        contact: '075123123123'
    },
    {
        name: 'Ted',
        age: '29',
        contact: '073323122123'
    },
    {
        name: 'Pash',
        age: '18',
        contact: '075969122123'
    },
    {
        name: 'John',
        age: '47',
        contact: '07599992123'
    },
    {
        name: 'Dave',
        age: '32',
        contact: '07522222123'
    },
    {
        name: 'Steve',
        age: '61',
        contact: '075777722123'
    },
    {
        name: 'Jack',
        age: '22',
        contact: '075190909013'
    },
    {
        name: 'Oleg',
        age: '19',
        contact: '075123122123'
    }
];

//storing #contact-card div element inside cardBody variable
const cardBody = document.querySelector('#contact-card');

//map function, that goes trought contactCardData array
let contactCardDetails = contactCardData.map(function(itemData){ //itemData can be any name
    return '<div class="shadow">' + 
    '<h1>' + 'Name: ' + itemData.name + '</h1>' +  
    '<h2>' + 'Age: '  + itemData.age + '</h2>' + 
    '<h3>' + 'Number: ' + itemData.contact + '</h3>' +
    '</div>';
    
});

//displaying array data on the html page
cardBody.innerHTML = contactCardDetails.join('\n');