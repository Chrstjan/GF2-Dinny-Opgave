//Contact Form
const contactContainer = document.getElementById("contact-form");
const openContactBtn = document.getElementById("contact-btn");

const contactForm = () => {
  const contactFormElement = document.createElement("form");
  contactFormElement.classList.add("contact-form");
  const contactFieldset = document.createElement("fieldset");

  const closeContactBtn = document.createElement("span");
  closeContactBtn.innerHTML = "&times;";

  //Append children function
  const appendChildren = (parent, elements) => {
    elements.forEach((element) => {
      parent.appendChild(element);
    });
  };

  appendChildren(contactFieldset, [closeContactBtn]);

  contactFormElement.appendChild(contactFieldset);
  contactContainer.appendChild(contactFormElement);

  //Helper Functions
  const createContactLabelElement = (text, forInput) => {
    const label = document.createElement("label");
    label.setAttribute("for", forInput);
    label.textContent = text;
    return label;
  };

  const createContactInputElement = (type, className, placeholder) => {
    const input = document.createElement("input");
    input.setAttribute("type", type);
    input.classList.add(className);
    input.setAttribute("placeholder", placeholder);
    return input;
  };

  const createContactInputButtonElement = (type, className, text) => {
    const inputBtn = document.createElement("input");
    inputBtn.setAttribute("type", type);
    inputBtn.classList.add(className);
    inputBtn.textContent = text;
    return inputBtn;
  };

  closeContactBtn.addEventListener("click", () => {
    contactContainer.innerHTML = "";
  });
};

openContactBtn.addEventListener("click", contactForm);
