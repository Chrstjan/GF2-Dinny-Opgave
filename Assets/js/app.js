//Hamburger menu
const hamburgerMenu = document.getElementById("hamburger-container");
const hamBurgerMenuContentMainList = document.querySelectorAll(".main-list li");
const hamBurgerMenuContentSecondaryList =
  document.querySelectorAll(".secondary-list li");
let isOpen = false;

hamburgerMenu.addEventListener("click", () => {
  isOpen = !isOpen;

  hamBurgerMenuContentMainList.forEach((li) => {
    li.classList.toggle("hamburger-content");
  });

  hamBurgerMenuContentSecondaryList.forEach((li) => {
    li.classList.toggle("hamburger-content");
  });

  document.querySelectorAll(".bar").forEach((span, index) => {
    span.classList.remove(
      "burgerTop",
      "burgerMiddle",
      "burgerBottom",
      "burgerTopReverse",
      "burgerMiddleReverse",
      "burgerBottomReverse"
    );
    if (isOpen) {
      if (index === 0) {
        span.classList.add("burgerTop");
      } else if (index === 1) {
        span.classList.add("burgerMiddle");
      } else if (index === 2) {
        span.classList.add("burgerBottom");
      }
    } else {
      if (index === 0) {
        span.classList.add("burgerTopReverse");
      } else if (index === 1) {
        span.classList.add("burgerMiddleReverse");
      } else if (index === 2) {
        span.classList.add("burgerBottomReverse");
      }
    }
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
      });
    };

    dinnyFigure.addEventListener("click", createImageModal);
  });
};

createGallery();

//Cookie Popup
const createCookiePopUp = () => {
  const closeCookiePopUp = () => {
    cookieContainer.remove();
  };

  //Helper Function
  const createCookieElement = (
    cookieText,
    cookieAcBtnText,
    cookieDcBtnText
  ) => {
    const cookieContainer = document.createElement("article");

    const cookieHeader = document.createElement("header");
    cookieHeader.innerHTML = "<h2>Allow Cookies</h2>";
    cookieContainer.appendChild(cookieHeader);

    const cookieTextContainer = document.createElement("div");
    const cookieInfoText = document.createElement("p");
    cookieInfoText.textContent = cookieText;
    cookieTextContainer.appendChild(cookieInfoText);

    const cookieBtnContainer = document.createElement("footer");
    const cookieAccBtn = document.createElement("button");
    cookieAccBtn.textContent = cookieAcBtnText;
    cookieAccBtn.classList.add("accept-btn");
    const cookieDecBtn = document.createElement("button");
    cookieDecBtn.textContent = cookieDcBtnText;
    cookieDecBtn.classList.add("decline-btn");
    cookieAccBtn.addEventListener("click", closeCookiePopUp);
    cookieDecBtn.addEventListener("click", closeCookiePopUp);

    cookieBtnContainer.appendChild(cookieAccBtn);
    cookieBtnContainer.appendChild(cookieDecBtn);

    cookieTextContainer.appendChild(cookieBtnContainer);
    cookieContainer.appendChild(cookieTextContainer);

    return cookieContainer;
  };

  const cookieContainer = document.createElement("div");
  cookieContainer.classList.add("cookie-popup");

  const cookieContent = createCookieElement(
    "Du giver hermed samtykke til at vi må sælge alt dit private data til kinøserne og Facebook Marketplace",
    "Ja tak!",
    "Ja Tak men i rød!"
  );
  cookieContainer.appendChild(cookieContent);
  document.querySelector(".main-header").appendChild(cookieContainer);
};

window.addEventListener("load", () => {
  createCookiePopUp();
});
