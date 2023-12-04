//Hamburger menu
const hamburgerMenu = document.getElementById("hamburger-container");
const hamBurgerMenuContentMainList = document.querySelectorAll(".main-list li");
const hamBurgerMenuContentSecondaryList = document.querySelectorAll(".secondary-list li");

hamburgerMenu.addEventListener("click", () => {

  hamBurgerMenuContentMainList.forEach((li) => {
    li.classList.toggle("hamburger-content");
  });

  hamBurgerMenuContentSecondaryList.forEach((li) => {
    li.classList.toggle("hamburger-content");
  });
  
});

//Creating gallery
const gallery = document.getElementById("gallery");
const galleryHeader = document.createElement("header");
galleryHeader.classList.add("gallery-header");
galleryHeader.innerHTML = "<h2>Dinny Gallery</h2>";
gallery.appendChild(galleryHeader);

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

export const baseUrl = "./Assets/images/GFX/";

const createGallery = () => {
  dinnyArray.forEach((img, index) => {
    //Helper function
    const createHoverElement = (headerText, text, footerText) => {
      const figCaption = document.createElement("figcaption");
      figCaption.classList.add("dinny-figcaption");
      const figureHeader = document.createElement("header");
      const figureHeaderText = document.createElement("h3");
      figureHeaderText.textContent = headerText;
      figureHeader.appendChild(figureHeaderText);
      figCaption.appendChild(figureHeader);

      const figureTextContainer = document.createElement("div");
      const figureText = document.createElement("p");
      const figureTextTwo = document.createElement("p");
      figureText.textContent = text;
      figureTextTwo.textContent = text;
      figureTextContainer.appendChild(figureText);
      figureTextContainer.appendChild(figureTextTwo);

      const figureFooterContainer = document.createElement("footer");
      const figureFooterText = document.createElement("a");
      figureFooterText.textContent = footerText;
      figureFooterContainer.appendChild(figureFooterText);
      figureTextContainer.appendChild(figureFooterContainer);

      figCaption.appendChild(figureTextContainer);
      dinnyFigure.appendChild(figCaption);
      return figCaption;
    };

    const dinnyFigure = document.createElement("figure");
    dinnyFigure.classList.add("dinny-figure");
    const dinnyImages = document.createElement("img");
    const dinnyImagesSrc = baseUrl + img;
    dinnyImages.src = dinnyImagesSrc;

    dinnyFigure.appendChild(dinnyImages);
    gallery.appendChild(dinnyFigure);

    const headerTexts = [
      "Gallery One",
      "Gallery Two",
      "Gallery Three",
      "Gallery Four",
      "Gallery Five",
      "Gallery Six",
      "Gallery Seven",
      "Gallery Eight",
    ];

    const figureCaption = createHoverElement(
      headerTexts[index],
      "Hic alias laborum nesciunt ipsa, quidem aut fugit similique beatae, vero ullam eum suscipit assumenda fugiat pariatur optio repudiandae laboriosam eos expedita.",
      "More:"
    );
    dinnyFigure.appendChild(figureCaption);

    const createImageModal = (e) => {
      const imageModalFigure = document.createElement("figure");
      imageModalFigure.classList.add("modal-figure");
      const modalImage = dinnyImages.cloneNode(true);
      imageModalFigure.appendChild(modalImage);
      gallery.appendChild(imageModalFigure);

      imageModalFigure.addEventListener("click", () => {
        imageModalFigure.remove();
      })
    }

    dinnyFigure.addEventListener("click", createImageModal);
  });
};

createGallery();
