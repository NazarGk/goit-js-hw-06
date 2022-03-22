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


const a = images.map(image =>{
  const b = document.createElement('img');
  b.src = image.url;
  b.alt = image.alt;
  b.width = 320;

  const c = document.createElement('li');
  console.log(c);
  c.append(b);
  c.classList = 'image_list';

const galleryPhotos = document.querySelector('.gallery');
galleryPhotos.append(c);
})

