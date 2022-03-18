

const counterValue = document.querySelector('#value');

const buttonIncrement = document.querySelector('button[data-action="increment"]');
const buttonDecrement = document.querySelector('button[data-action="decrement"]');


buttonIncrement.addEventListener('click', onTargetButtonClickIncrement);
buttonDecrement.addEventListener('click', onTargetButtonClickDecrement);


let number = 0;

function onTargetButtonClickIncrement(){
   number ++;
   counterValue.textContent = number;
}

function onTargetButtonClickDecrement(){
    number --;
    counterValue.textContent = number;
}