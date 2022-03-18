
const buttonChangeEl = document.querySelector('.change-color');
const inSpanColorEl = document.querySelector('.color');

buttonChangeEl.addEventListener('click', changeBodyColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBodyColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  inSpanColorEl.textContent = document.body.style.backgroundColor;
}