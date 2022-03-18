const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


console.log(ingredients);

const firstListEl = document.createElement('li');
firstListEl.textContent = ingredients[0];
firstListEl.classList = 'item';

console.log(firstListEl);


const secondListEl = document.createElement('li');
secondListEl.textContent = ingredients[1];
secondListEl.classList = 'item';

console.log(secondListEl);


const thirdListEl = document.createElement('li');
thirdListEl.textContent = ingredients[2];
thirdListEl.classList = 'item';

console.log(thirdListEl);


const fourthListEl = document.createElement('li');
fourthListEl.textContent = ingredients[3];
fourthListEl.classList = 'item';

console.log(fourthListEl);


const fifthListEl = document.createElement('li');
fifthListEl.textContent = ingredients[4];
fifthListEl.classList = 'item';

console.log(fifthListEl);


const sixthListEl = document.createElement('li');
sixthListEl.textContent = ingredients[5];
sixthListEl.classList = 'item';

console.log(sixthListEl);


const ingredientsUlEl = document.querySelector('#ingredients');
ingredientsUlEl.append(firstListEl, secondListEl, thirdListEl, fourthListEl, fifthListEl, sixthListEl);

console.log(ingredientsUlEl);