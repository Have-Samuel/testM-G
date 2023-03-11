/* eslint-disable prefer-destructuring */
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
  const yOffset = height / 25;
  const fontSize = Math.floor(height / 10);

  // Update canvas background
  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);

  // Update top text
  ctx.font = `${fontSize}px Impact`;
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'black';
  ctx.lineJoin = 'round';
  ctx.lineWidth = Math.floor(fontSize / 4);

  // Update top text
  ctx.textBaseline = 'top';
  ctx.strokeText(topText, width / 2, yOffset);
  ctx.fillText(topText, width / 2, yOffset);

  // Update bottom text
  ctx.textBaseline = 'bottom';
  ctx.strokeText(bottomText, width / 2, height - yOffset);
  ctx.fillText(bottomText, width / 2, height - yOffset);
};

imageUrlInput.addEventListener('change', () => {
  const imageDataUrl = URL.createObjectURL(imageUrlInput.files[0]);

  image = new Image();
  image.src = imageDataUrl;

  image.addEventListener('load', () => {
    updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
  }, { once: true });
});

topTextInput.addEventListener('change', () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

bottomTextInput.addEventListener('change', () => {
  updateMemeCanvas(canvas, image, topTextInput.value, bottomTextInput.value);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
});
