const gallery = document.getElementById("gallery");

const dinnyArray = ['Dinny-01.jpg', 'Dinny-02.jpg', 'Dinny-03.jpg', 'Dinny-04.jpg', 'Dinny-05.jpg', 'Dinny-06.jpg', 'Dinny-07.jpg', 'Dinny-08.jpg',];

const chooseImagesArray = ['Choose-01.jpg', 'Choose-02.jpg', 'Choose-03.jpg', 'Choose-04.jpg',];

const baseUrl = './Assets/images/GFX/';

const createGallery = () => {
    dinnyArray.forEach((img) => {
        //Helper function
        const createHoverElement = (headerText, text, footerText) => {
            const figCaption = document.createElement("figcaption");
            const figureHeader = document.createElement("header");
            const figureHeaderText = document.createElement("h3");
            figureHeaderText.textContent = headerText;
            figureHeader.appendChild(figureHeaderText);
            figCaption.appendChild(figureHeader);

            const figureTextContainer = document.createElement("div");
            const figureText = document.createElement("p");
            figureText.textContent = text;
            figureTextContainer.appendChild(figureText);
            
            const figureFooterContainer = document.createElement("footer");
            const figureFooterText = document.createElement("a");
            figureFooterText.textContent = footerText;
            figureFooterContainer.appendChild(figureFooterText);
            figureTextContainer.appendChild(figureFooterContainer);

            figCaption.appendChild(figureTextContainer);
            dinnyFigure.appendChild(figCaption);
            return figCaption;
        }

        const dinnyFigure =  document.createElement("figure");
        dinnyFigure.classList.add("dinny-figure");
        const dinnyImages = document.createElement("img");
        const dinnyImagesSrc = baseUrl + img;
        dinnyImages.src = dinnyImagesSrc;

        dinnyFigure.appendChild(dinnyImages);
        gallery.appendChild(dinnyFigure);

        //This might need to be changed to an array that loops through instead
        const figureCaption = createHoverElement('Gallery One', 'Lorem Ipsum', 'Read more:');
        dinnyFigure.appendChild(figureCaption);
    }); 
}

createGallery();