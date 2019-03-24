const UNSPLASH_COLLECTION_URL =
  "https://source.unsplash.com/collection/1127163/";

const totalImagesCount = 4

let canvas;
let ctx;
let saveButton;
let quoteText
let quoteIsLoaded = false
let imagesAreLoaded = false
let loadedImagesCount = 0

const images = []

function addCanvas() {
  canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  
  document.body.appendChild(canvas);

  ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillText("Loading...", 10, 50)
}

function addSaveButton() {
  saveButton = document.createElement("button");
  saveButton.innerHTML = "Save image";

  document.body.appendChild(saveButton);
}

function generateBasicHTML() {
  addCanvas();
  addSaveButton();
}

function downloadImage() {
  console.log("downloadImage");
}

function displayImages() {
  images.forEach(({image,left,top})=>ctx.drawImage(image, left, top))
}

function displayContent() {
  displayImages()
}

function generateImage(width, height, left, top) {
  const image = new Image();

  image.src = `${UNSPLASH_COLLECTION_URL}${width}x${height}`;
  
  image.onload = () => {
    images.push({ image, left, top })
    loadedImagesCount++

    imagesAreLoaded = loadedImagesCount === totalImagesCount
    
    if (imagesAreLoaded && quoteIsLoaded) {
      displayContent()
    }
  };
}

function generateImageCollage() {
  generateImage(300, 200, 0, 0);
  generateImage(200, 200, 300, 0);
  generateImage(200, 300, 0, 200);
  generateImage(300, 300, 200, 200);
}

async function generateText() {
  const response = await fetch(
    'https://thesimpsonsquoteapi.glitch.me/quotes'
  )

  const [{quote}] = await response.json()
  quoteText = quote
  quoteIsLoaded = true 

  if (imagesAreLoaded) {
    displayContent()
  }
}

function generateCanvasContent() {
  generateImageCollage();
  generateText();
}

window.onload = () => {
  generateBasicHTML();
  generateCanvasContent();

  saveButton.addEventListener("click", downloadImage);
}
