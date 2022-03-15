

const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', textInput);


function textInput(event){
    event.preventDefault();

    if(event.currentTarget.value === ''){
        outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = event.currentTarget.value;
    }
}





