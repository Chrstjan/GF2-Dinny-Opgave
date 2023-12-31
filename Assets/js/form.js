
//Contact Form
const contactContainer = document.getElementById("contact-form");
const openContactBtn = document.getElementById("contact-btn");

let isFormOpen = false;
const contactForm = () => {
  if (isFormOpen) {
    return;
  }

  isFormOpen = true;

  const contactFormElement = document.createElement("form");
  contactFormElement.classList.add("contact-form");
  const contactFieldset = document.createElement("fieldset");

  const closeContactBtn = document.createElement("span");
  closeContactBtn.innerHTML = "<a>&times;</a>";

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

  const createContactInputButtonElement = (type, className, value) => {
    const inputBtn = document.createElement("input");
    inputBtn.setAttribute("type", type);
    inputBtn.classList.add(className);
    inputBtn.setAttribute("value", value);
    return inputBtn;
  };

  const fNameLabel = createContactLabelElement("First Name", "fName");
  const fName = createContactInputElement("text", "fName", "John");

  const lNameLabel = createContactLabelElement("Last Name", "lName");
  const lName = createContactInputElement("text", "lName", "Doe");

  const emailLabel = createContactLabelElement("Email", "email");
  const email = createContactInputElement("email", "email", "none@fake.com");

  const messageLabel = createContactLabelElement("Message", "messageArea");
  const message = document.createElement("textarea");
  message.classList.add("messageArea");
  message.setAttribute("rows", 7);
  message.setAttribute("placeholder", "Message");

  const validateInput = (input, regEx, errorMessage) => {
    const trimmedValue = input.value.trim();
    const isValid = regEx.test(trimmedValue);

    if (isValid) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
      displayErrorMessage(errorMessage);
    }

    return isValid;
  };

  const displayErrorMessage = (message) => {
    errorTextContainer.textContent = message;
  };

  const formValidation = (e) => {
    const nameRegExp = /^[a-zA-Z]{2,17}$/;
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

    const isFNameValid = validateInput(
      fName,
      nameRegExp,
      "First Name must be at least 2 characters"
    );
    const isLNameValid = validateInput(
      lName,
      nameRegExp,
      "Last Name must be at least 2 characters"
    );
    const isEmailValid = validateInput(
      email,
      emailRegExp,
      "Email must be a valid email"
    );

    if (isFNameValid && isLNameValid && isEmailValid) {
      contactFieldset.innerHTML = "";
      const recivedMessage = document.createElement("h2");
      recivedMessage.textContent =
        "Message recived. Thank you for your message";
      contactFieldset.appendChild(closeContactBtn);
      contactFieldset.appendChild(recivedMessage);
    } else {
      e.preventDefault();
    }
  };

  const resetBtn = createContactInputButtonElement(
    "reset",
    "resetBtn",
    "Reset"
  );

  const submitBtn = createContactInputButtonElement(
    "submit",
    "submitBtn",
    "Send"
  );

  const contactBtnContainer = document.createElement("span");
  contactBtnContainer.classList.add("btn-container");
  contactBtnContainer.appendChild(resetBtn);
  contactBtnContainer.appendChild(submitBtn);

  submitBtn.addEventListener("click", formValidation);

  const errorTextContainer = document.createElement("div");
  errorTextContainer.classList.add("errorContainer");

  //Append children function
  const appendChildren = (parent, elements) => {
    elements.forEach((element) => {
      parent.appendChild(element);
    });
  };

  appendChildren(contactFieldset, [
    closeContactBtn,
    fNameLabel,
    fName,
    lNameLabel,
    lName,
    emailLabel,
    email,
    messageLabel,
    message,
    contactBtnContainer,
    errorTextContainer,
  ]);

  contactFormElement.appendChild(contactFieldset);
  contactContainer.appendChild(contactFormElement);

  closeContactBtn.addEventListener("click", () => {
    contactContainer.innerHTML = "";
    isFormOpen = false;
  });
};

openContactBtn.addEventListener("click", contactForm);
