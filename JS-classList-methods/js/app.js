let circleEl = document.querySelector('.circle');
let addClass = document.querySelector('#add');
let removeClass = document.querySelector('#remove');
let toggleClass = document.querySelector('#toggle');
let checkClass = document.querySelector('#check');
let addAllClasses = document.querySelector('#addAll');
let removeAllClasses = document.querySelector('#removeAll');


addClass.addEventListener('click', () =>{
    circleEl.classList.add('background-color');
})

removeClass.addEventListener('click', () =>{
    circleEl.classList.remove('background-color');
})

toggleClass.addEventListener('click', () =>{
    circleEl.classList.toggle('background-color');
})

checkClass.addEventListener('click', () =>{
    circleEl.innerText = circleEl.classList.contains('background-color');
})

addAllClasses.addEventListener('click', () => {
    circleEl.classList.add('background-color', 'border-color');
})

removeAllClasses.addEventListener('click', () => {
    circleEl.classList.remove('background-color', 'border-color');
})