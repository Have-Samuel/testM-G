const form = document.querySelector('#form-js');
const imageUrlInput = document.querySelector('#imageUrlInput');
const topTextInput = document.querySelector('#topTextInput');
const bottomTextInput = document.querySelector('#bottomTextInput');
const canvas = document.querySelector('#meme');

let image;

const updateMemeCanvas = (canvas, image, topText, bottomText) => {
  const ctx = canvas.getContext('2d');
  const width = image.width;
  const height = image.height;

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
};

imageUrlInput.addEventListener('change', () => {
  const imageDataUrl = URL.createObjectURL(imageUrlInput.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener('load', () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
  }, { once: true });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
