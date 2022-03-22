const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let a = ingredients.map(item => {
  const b = document.createElement('li');
  b.classList = 'item';
  b.textContent = item;
  console.log(b)

const ingredientsUlEl = document.querySelector('#ingredients');
ingredientsUlEl.append(b);
});

