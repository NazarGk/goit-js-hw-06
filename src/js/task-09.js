
const buttonChangeEl = document.querySelector('.change-color');
const inSpanColorEl = document.querySelector('.color');

buttonChangeEl.addEventListener('click', changeBodyColor);


function changeBodyColor() {
  document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  inSpanColorEl.textContent = document.body.style.backgroundColor;
}