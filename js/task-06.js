

const inputEl = document.querySelector('#validation-input');
const inputElLengh = inputEl.dataset.length;

inputEl.addEventListener('blur', textLengh);


function textLengh(event){
    if(event.currentTarget.value.length === 6){      // <----------- Я не розумію, чому 
                                                    // коли я замість 6 ставлю inputElLengh 
                                                    // воно не працює, а внизу де є !== працює????

        inputEl.classList.replace('invalid', 'valid');
    } else if(event.currentTarget.value.length !== inputElLengh) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
}


