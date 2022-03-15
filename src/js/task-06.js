

const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', textLengh);


function textLengh(event){
    if(event.currentTarget.value.length !== 6){
        inputEl.classList.add('invalid');
    } else if(event.currentTarget.value.length === 6) {
        inputEl.classList.replace('invalid', 'valid');
    }
}