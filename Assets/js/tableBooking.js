const bookTableBtn = document.getElementById("book-table-btn");
const bookTableContainer = document.getElementById("book-table");
let isBookingOpen = false;

const bookTableForm = () => {
    if (isBookingOpen) {
        return;
    }
    isBookingOpen = true;

    const bookingFormElement = document.createElement("form");
    const bookingFieldset = document.createElement("fieldset");

    const closeBookingBtn = document.createElement("span");
    closeBookingBtn.innerHTML = "<a>&times;</a>";

    //Helper Functions
    const createBookingLabelElement = (text, forInput) => {
        const label = document.createElement("label");
        label.setAttribute("for", forInput);
        label.textContent = text;

        return label;
    };

    const createBookingInputElement = (type, className, placeholder) => {
        const input = document.createElement("input");
        input.setAttribute("type", type);
        input.classList.add(className);
        input.setAttribute("placeholder", placeholder);

        return input;
    };

    const createBookingSelectOptionElement = (options, className, value) => {
        const select = document.createElement("select");

        options.forEach((option) => {
            const optionElement = document.createElement("option");
            optionElement.textContent = option.text;
            optionElement.setAttribute("value", option.value);
            optionElement.classList.add(className);
            select.appendChild(optionElement);
        });
        return select;
    }

    const createBookingInputButtonElement = (type, className, value) => {
        const inputBtn = document.createElement("input");
        inputBtn.setAttribute("type", type);
        inputBtn.classList.add(className);
        inputBtn.setAttribute("value", value);

        return inputBtn;
    };

    const fNameLabel = createBookingLabelElement("First Name", "fName");
    const fName = createBookingInputElement("text", "fName", "John");

    const lNameLabel = createBookingLabelElement("Last Name", "lName");
    const lName = createBookingInputElement("text", "lName", "Doe");

    const peopleAmountLabel = createBookingLabelElement("How many people will you be?", "peopleAmount");
    const peopleAmountOptions = [
         {text: "1", value: "one"},
         {text: "2", value: "two"},
         {text: "3", value: "three"},
         {text: "4", value: "four"},
         {text: "5", value: "five"},
         {text: "6", value: "six"},
         {text: "7", value: "seven"},
    ];
    const peopleAmount = createBookingSelectOptionElement(peopleAmountOptions, "peopleAmount");

    const resetBtn = createBookingInputButtonElement("reset", "reset-btn", "Reset");
    const submitBtn = createBookingInputButtonElement("submit", "submit-btn", "Send");
    const bookingBtnContainer = document.createElement("div");
    bookingBtnContainer.appendChild(resetBtn);
    bookingBtnContainer.appendChild(submitBtn);
    const appendChildren = (parent, elements) => {
        elements.forEach((element) => {
            parent.appendChild(element);
        });
    };

    appendChildren(bookingFieldset, [
        closeBookingBtn,
        fNameLabel,
        fName,
        lNameLabel,
        lName,
        peopleAmountLabel,
        peopleAmount,
        bookingBtnContainer,
    ]);

    bookingFormElement.appendChild(bookingFieldset);
    bookTableContainer.appendChild(bookingFormElement);
    bookingBtnContainer.classList.add("booking-btns-container");
    closeBookingBtn.addEventListener("click", () => {
        bookTableContainer.innerHTML = "";
        isBookingOpen = false;
    });
};

bookTableBtn.addEventListener("click", bookTableForm);