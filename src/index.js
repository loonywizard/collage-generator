const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const saveButton = document.getElementById("save");

function downloadImage() {
  console.log("downloadImage");
}

async function generateImageCollage() {
  const image = await fetch(
    "https://source.unsplash.com/collection/1127163/300x200"
  );
  const blob = await image.blob();
  console.log(blob);
}

function generateText() {}

function generateCanvasContent() {
  generateImageCollage();
  generateText;
}

saveButton.addEventListener("click", downloadImage);

generateCanvasContent();
