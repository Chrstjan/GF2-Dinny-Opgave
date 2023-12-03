import { baseUrl } from "./app.js";

const orderContainer = document.getElementById("order-gallery");
const openOrderBtn = document.getElementById("order-btn");

const chooseImagesArray = [
  "Choose-01.jpg",
  "Choose-02.jpg",
  "Choose-03.jpg",
  "Choose-04.jpg",
];

baseUrl;

const createOrderGallery = () => {
  chooseImagesArray.forEach((img, index) => {
    //Helper Function
    const createFigCaption = (headerText, text, footerText) => {
      const figCaption = document.createElement("figcaption");
      figCaption.classList.add("order-figcaption");
      const figcaptionHeader = document.createElement("header");
      const figcaptionHeaderText = document.createElement("h3");
      figcaptionHeaderText.textContent = headerText;
      figcaptionHeader.appendChild(figcaptionHeaderText);
      figCaption.appendChild(figcaptionHeader);

      const figCaptionTextContainer = document.createElement("div");
      const figCaptionText = document.createElement("p");
      figCaptionText.textContent = text;
      figCaptionTextContainer.appendChild(figCaptionText);

      const figCaptionFooterContainer = document.createElement("footer");
      const figCaptionFooterText = document.createElement("a");
      figCaptionFooterText.textContent = footerText;
      figCaptionFooterContainer.appendChild(figCaptionFooterText);
      figCaptionTextContainer.appendChild(figCaptionFooterContainer);
      figCaption.appendChild(figCaptionTextContainer);

      orderFigure.appendChild(figCaption);
      return figCaption;
    };

    const orderFigure = document.createElement("figure");
    orderFigure.classList.add("order-gallery");
    const orderImage = document.createElement("img");
    const orderImageSrc = baseUrl + img;
    orderImage.src = orderImageSrc;
    orderFigure.appendChild(orderImage);

    orderContainer.appendChild(orderFigure);

    const orderHeaderTexts = [
      "Item One",
      "Item Two",
      "Item Three",
      "Item Four",
    ];

    const figureCaption = createFigCaption(
      orderHeaderTexts[index],
      "Hic alias laborum nesciunt ipsa, quidem aut fugit similique beatae",
      "Order:"
    );
    orderFigure.appendChild(figureCaption);
  });
};

openOrderBtn.addEventListener("click", createOrderGallery);
