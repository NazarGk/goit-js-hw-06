

const inputEl = document.querySelector('#validation-input');
const inputElLengh = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', textLengh);


function textLengh(event){
    if(event.currentTarget.value.length === inputElLengh){     
        inputEl.classList.replace('invalid', 'valid');
    } else if(event.currentTarget.value.length !== inputElLengh) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}


