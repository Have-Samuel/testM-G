const form = document.querySelector('#form-js');
const imageUrlInput = document.querySelector('#imageUrlInput');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
const canvas = document.querySelector('#meme');

let image;

const updateMemeCanvas = (canvas, image, topText, bottomText) => {
  console.log(canvas);
  console.log(image);
  console.log(topText);
  console.log(bottomText);
};

imageUrlInput.addEventListener('change', () => {
  const imageDataUrl = URL.createObjectURL(imageUrlInput[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener('load', () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
