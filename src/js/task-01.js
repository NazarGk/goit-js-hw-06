


// Sorry, but i cant do that task with your navigation of DOM =/ Make my best.




const categoriesEl = document.querySelectorAll('.item');
console.log('Number of categories: ', categoriesEl.length);



const args = [...categoriesEl];



const argsOfFirstList = args[0];

const categoriesTitleElFirst = argsOfFirstList.querySelector('h2');
console.log('Category: ', categoriesTitleElFirst.textContent);

const elementsOfCategoriesFirst = argsOfFirstList.querySelectorAll('li');
console.log('Elements: ', elementsOfCategoriesFirst.length);




const argsOfSecondList = args[1];

const categoriesTitleElSecond = argsOfSecondList.querySelector('h2');
console.log('Category: ', categoriesTitleElSecond.textContent);

const elementsOfCategoriesSecond = argsOfSecondList.querySelectorAll('li');
console.log('Elements: ', elementsOfCategoriesSecond.length);




const argsOfThirdList = args[2];

const categoriesTitleElThird = argsOfThirdList.querySelector('h2');
console.log('Category: ', categoriesTitleElThird.textContent);

const elementsOfCategoriesThird = argsOfThirdList.querySelectorAll('li');
console.log('Elements: ', elementsOfCategoriesThird.length);

