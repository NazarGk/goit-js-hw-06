
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

textLengh()

inputEl.addEventListener('input', textLengh)

function textLengh(){
    spanEl.style.fontSize = inputEl.value + 'px';
    }


