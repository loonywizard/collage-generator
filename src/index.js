const UNSPLASH_COLLECTION_URL =
  "https://source.unsplash.com/collection/1127163/";

let canvas;
let ctx;
let saveButton;
console.log("begin");
function addCanvas() {
  canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  document.body.appendChild(canvas);

  ctx = canvas.getContext("2d");
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

function generateImage(width, height, left, top) {
  const image = new Image();

  image.src = `${UNSPLASH_COLLECTION_URL}${width}x${height}`;
  console.log(image.src);
  image.onload = () => {
    console.log("onload");
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

generateBasicHTML();
generateCanvasContent();

saveButton.addEventListener("click", downloadImage);
