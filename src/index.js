const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const saveButton = document.getElementById("save");

const UNSPLASH_COLLECTION_URL =
  "https://source.unsplash.com/collection/1127163/";

function downloadImage() {
  console.log("downloadImage");
}

function generateImage(width, height, left, top) {
  const image = new Image();

  image.src = `${UNSPLASH_COLLECTION_URL}${width}x${height}`;

  image.onload = () => {
    ctx.drawImage(image, left, top);
  };
}

function generateImageCollage() {
  generateImage(300, 200, 0, 0);
  generateImage(200, 200, 300, 0);
  generateImage(200, 300, 0, 200);
  generateImage(300, 300, 200, 200);
}

function generateText() {}

function generateCanvasContent() {
  generateImageCollage();
  generateText();
}

saveButton.addEventListener("click", downloadImage);

generateCanvasContent();
