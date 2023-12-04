import { baseUrl } from "./app.js";

const orderContainer = document.getElementById("order-gallery");
const openOrderBtn = document.getElementById("order-btn");

const chooseImagesArray = [
  "Choose-01.jpg",
  "Choose-02.jpg",
  "Choose-03.jpg",
  "Choose-04.jpg",
];

export let isOpen = false;

baseUrl;

const createOrderGallery = () => {
  if (isOpen) {
    return;
  }

  isOpen = true;

  const orderGalleryHeader = document.createElement("header");
  orderGalleryHeader.classList.add("order-header");
  orderGalleryHeader.innerHTML = "<h2>Dinny order ToGo</h2>";
  orderContainer.appendChild(orderGalleryHeader);

  const closeOrderBtn = document.createElement("span");
  closeOrderBtn.innerHTML = "<a>&times;</a>";
  orderContainer.appendChild(closeOrderBtn);

  closeOrderBtn.addEventListener("click", () => {
    orderContainer.innerHTML = "";
    isOpen = false;
  });

  chooseImagesArray.forEach((img, index) => {
    const buyOrder = () => {

    }

    //Helper Function
    const createFigCaption = (headerText, text, price, footerText, link) => {
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
      const figCaptionPrice = document.createElement("p");
      figCaptionPrice.textContent = price;
      figCaptionTextContainer.appendChild(figCaptionText);
      figCaptionTextContainer.appendChild(figCaptionPrice);

      const figCaptionFooterContainer = document.createElement("footer");
      const figCaptionFooterText = document.createElement("a");
      figCaptionFooterText.textContent = footerText;
      figCaptionFooterText.setAttribute("href", link);
      figCaptionFooterText.addEventListener("click", buyOrder);
      figCaptionFooterContainer.appendChild(figCaptionFooterText);
      figCaptionTextContainer.appendChild(figCaptionFooterContainer);
      figCaption.appendChild(figCaptionTextContainer);

      orderFigure.appendChild(figCaption);
      return figCaption;
    };

    const orderFigure = document.createElement("figure");
    orderFigure.classList.add("order-figure");
    const orderImage = document.createElement("img");
    const orderImageSrc = baseUrl + img;
    orderImage.src = orderImageSrc;
    orderFigure.appendChild(orderImage);
    orderContainer.appendChild(orderFigure);

    orderFigure.id = `item-${index + 1}`;

    const orderHeaderTexts = [
      "Item One",
      "Item Two",
      "Item Three",
      "Item Four",
    ];

    const orderPrices = ["$9.75", "$11.25", "$12,19", "$21.50"];

    const figureCaption = createFigCaption(
      orderHeaderTexts[index],
      "Hic alias laborum nesciunt ipsa, quidem aut fugit similique beatae",
      orderPrices[index],
      "Order:",
      `#item-${index + 1}`
    );
    orderFigure.appendChild(figureCaption);
  });
};

openOrderBtn.addEventListener("click", createOrderGallery);
