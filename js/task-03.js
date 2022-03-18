const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const imagesWay = images.map(image => image.url);
const imagesAlts = images.map(alt => alt.alt);


const listFirstEl = document.createElement('li');
const imageFirstEl = document.createElement('img');
listFirstEl.append(imageFirstEl);

listFirstEl.classList = 'image_list';
imageFirstEl.alt = imagesAlts[0];
imageFirstEl.src = imagesWay[0];
imageFirstEl.width = 320;


const listSecondEl = document.createElement('li');
const imageSecondEl = document.createElement('img');
listSecondEl.append(imageSecondEl);

listSecondEl.classList = 'image_list';
imageSecondEl.alt = imagesAlts[1];
imageSecondEl.src = imagesWay[1];
imageSecondEl.width = 320;


const listThirdEl = document.createElement('li');
const imageThirdEl = document.createElement('img');
listThirdEl.append(imageThirdEl);

listThirdEl.classList = 'image_list';
imageThirdEl.alt = imagesAlts[2];
imageThirdEl.src = imagesWay[2];
imageThirdEl.width = 320;


const galleryPhotos = document.querySelector('.gallery');
galleryPhotos.append(listFirstEl, listSecondEl, listThirdEl);
console.log(galleryPhotos);

