

const counterValue = document.querySelector('#value');

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');


buttonIncrement.addEventListener('click', onTargetButtonClickIncrement);
buttonDecrement.addEventListener('click', onTargetButtonClickDecrement);


let number = 0;

function onTargetButtonClickIncrement(){
   number =+ number + 1;
   counterValue.textContent = number;
}

function onTargetButtonClickDecrement(){
    number =+ number - 1;
    counterValue.textContent = number;
}