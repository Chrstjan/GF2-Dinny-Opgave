//Contact Form
export const contactForm = () => {
  const contactContainer = document.getElementById("contact-form");
  const openContactBtn = document.getElementById("contact-btn");
  const contactFormElement = document.createElement("form");
  const contactFieldset = document.createElement("fieldset");

  const closeContactBtn = document.createElement("span");
  closeContactBtn.innerHTML = "&times;";

  const appendChildren = (parent, elements) => {
    elements.forEach((element) => {
      parent.appendChild(element);
    });
  };

  appendChildren(contactFieldset, [closeContactBtn]);

  contactFormElement.appendChild(contactFieldset);
  contactContainer.appendChild(contactFormElement);
};
