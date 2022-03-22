
const inputEl = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', function textLengh(){
    spanEl.style.fontSize = inputEl.value + 'pt';
    }
)


