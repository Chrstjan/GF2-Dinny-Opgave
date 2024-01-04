//New Gallery
const dinnyArray = [
  "Dinny-01.jpg",
  "Dinny-02.jpg",
  "Dinny-03.jpg",
  "Dinny-04.jpg",
  "Dinny-05.jpg",
  "Dinny-06.jpg",
  "Dinny-07.jpg",
  "Dinny-08.jpg",
];

let galleryImageCount = 0;

let galleryImageElement = document.getElementById("gallery-image");

forwardsBtn.addEventListnener("click", (e) => {
  galleryImageCount++;

  if (galleryImageCount >= dinnyArray.length) {
    galleryImageCount = 0;
  }

  showGalleryImage();
});

backwardsBtn.addEventListnener("click", (e) => {
  galleryImageCount--;

  if (galleryImageCount < 0) {
    galleryImageCount = dinnyArray.length - 1;
  }

  showGalleryImage();
});

const showGalleryImage = () => {
  let imageUrl = "Assets/images/GFX" + dinnyArray[galleryImageCount];

  galleryImageElement.src = imageUrl;
};

window.addEventListener("load", showGalleryImage);
