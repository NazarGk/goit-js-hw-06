const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const firstListEl = document.createElement('li');
firstListEl.textContent = ingredients[0];
firstListEl.classList = 'item';


const secondListEl = document.createElement('li');
secondListEl.textContent = ingredients[1];
secondListEl.classList = 'item';



const thirdListEl = document.createElement('li');
thirdListEl.textContent = ingredients[2];
thirdListEl.classList = 'item';



const fourthListEl = document.createElement('li');
fourthListEl.textContent = ingredients[3];
fourthListEl.classList = 'item';



const fifthListEl = document.createElement('li');
fifthListEl.textContent = ingredients[4];
fifthListEl.classList = 'item';



const sixthListEl = document.createElement('li');
sixthListEl.textContent = ingredients[5];
sixthListEl.classList = 'item';


const ingredientsUlEl = document.querySelector('#ingredients');
ingredientsUlEl.append(firstListEl, secondListEl, thirdListEl, fourthListEl, fifthListEl, sixthListEl);

console.log(ingredientsUlEl);