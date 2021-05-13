//3. JavaScript function that counts the number of vowels within a string


//REGULAR FUNCTION
function vowel_counter(vowels){
    const vowel_list = 'aeiouAEIOU';
    let countFromZero = 0;
    for(let i = 0; i < vowels.length; i++){
        if (vowel_list.indexOf(vowels[i]) !== -1){
            countFromZero += 1;
        }
    }
    return countFromZero;
}


let textAreaEl = document.querySelector('#text-area');
let submitButtonEl = document.querySelector('#output-button');
let outputAreaEl = document.querySelector('#output');

submitButtonEl.addEventListener('click', () =>{
    textAreaValue = vowel_counter(textAreaEl.value)
    outputAreaEl.textContent = textAreaValue;
})



