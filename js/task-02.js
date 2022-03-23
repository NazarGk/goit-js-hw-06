const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let listEl = ingredients.map(item => {
  const createListEl = document.createElement('li');
  createListEl.classList = 'item';
  createListEl.textContent = item;
  console.log(createListEl);
return createListEl;
});

const ingredientsUlEl = document.querySelector('#ingredients');
ingredientsUlEl.append(...listEl);