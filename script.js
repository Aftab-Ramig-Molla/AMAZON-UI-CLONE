
const images = [
  'images/slide1.jpg',
  'images/slide2.jpg',
  'images/slide3.jpg',
  'images/slide4.jpg',
];

const colors = [
    '#e7d8c3',
    '#e3effb',
    '#89dce4',
    '#aa985c'
];
let currentIndex = 0;

const sliderImage = document.querySelector('#slider-image');
const cardSection=document.querySelector('#card-section');
const gt=document.querySelector('.gt');
const lt=document.querySelector('.lt');

function updateImage(index){
    sliderImage.style.background=`url(${images[index]})`;
    sliderImage.style.backgroundSize ='cover';
    cardSection.style.backgroundColor = colors[index];
}

gt.addEventListener('click',() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage(currentIndex);
});

lt.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(currentIndex);
});
