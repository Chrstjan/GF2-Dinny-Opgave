const bookTableBtn = document.getElementById("book-table-btn");
const bookTableContainer = document.getElementById("book-table");
let isBookingOpen = false;

const bookTableForm = () => {
    if (isBookingOpen) {
        return;
    }
    isBookingOpen = true;

    const bookingFormElement = document.createElement("form");
    bookingFormElement.classList.add("booking-form");
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

    const emailLabel = createBookingLabelElement("Email", "email");
    const email = createBookingInputElement("email", "email", "John@doe.com");

    const phoneLabel = createBookingLabelElement("Phonenumber", "phone");
    const phone = createBookingInputElement("tel", "phone", "## ## ## ##");


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

    const selectDateLabel = createBookingLabelElement("Select date", "select-date");
    const selectDate = createBookingInputElement("datetime-local", "select-date",);

    const validateInput = (input, regEx, errorMessage) => {
        const trimmedValue = input.value.trim();
        const isValid = regEx.test(trimmedValue);

        if (isValid) {
            input.classList.add("valid");
            input.classList.remove("invalid");
        }
        else {
            input.classList.add("invalid");
            input.classList.add("valid");
            displayErrorMessage(errorMessage);
        }

        return isValid;
    };

    const validateSelect = (select, errorMessage) => {
        const isValid = select.value !== "";

        if (isValid) {
            select.classList.add("valid");
            select.classList.remove("invalid");
        }
        else {
            select.classList.add("invalid");
            select.classList.remove("valid");
            displayErrorMessage(errorMessage);
        }

        return isValid;
    }

    const validateDateLocalTime = (dateLocalTime, errorMessage) => {
        const isValid = dateLocalTime.value !== "";

        if (isValid) {
            dateLocalTime.classList.add("valid");
            dateLocalTime.classList.remove("invalid");
        }
        else {
            dateLocalTime.classList.add("invalid");
            dateLocalTime.classList.remove("valid");
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
        const phoneRegExp = /^[0-9]{8,11}$/;

        const isFNameValid = validateInput(fName, nameRegExp, "First Name must be at least 2 characters");
        const isLNameValid = validateInput(lName, nameRegExp, "Last Name must be at least 2 characters");
        const isEmailValid = validateInput(email, emailRegExp, "Email must be a valid email");
        const isPhoneValid = validateInput(phone, phoneRegExp, "Phonenumber must be a valid phonenumber");

        const isPeopleAmountValid = validateSelect(peopleAmount, "Must enter a valid amount of people");
        const isDateValid = validateDateLocalTime(selectDate, "Please select a valid date");

        if (isFNameValid && isLNameValid && isEmailValid && isPhoneValid && isPeopleAmountValid && isDateValid) {
            bookingFieldset.innerHTML = "";
            const tableBookedMessageHeader = document.createElement("h2");
            tableBookedMessageHeader.textContent = "Thank you for your reservation.";
            const tableBookedMessage = document.createElement("p");
            tableBookedMessage.textContent = " You will recive an email shortly with your table number";

            bookingFieldset.appendChild(closeBookingBtn);
            appendChildren(bookingFieldset, [
                closeBookingBtn,
                tableBookedMessageHeader,
                tableBookedMessage,
            ]);
        }
        else {
            e.preventDefault();
        }
    };

    const resetBtn = createBookingInputButtonElement("reset", "reset-btn", "Reset");
    resetBtn.classList.add("resetBtn");
    const submitBtn = createBookingInputButtonElement("submit", "submit-btn", "Send");
    submitBtn.classList.add("submitBtn");
    const bookingBtnContainer = document.createElement("div");
    bookingBtnContainer.classList.add("btn-container");
    bookingBtnContainer.appendChild(resetBtn);
    bookingBtnContainer.appendChild(submitBtn);

    submitBtn.addEventListener("click", formValidation);

    const errorTextContainer = document.createElement("div");
    errorTextContainer.classList.add("errorContainer");

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
        emailLabel,
        email,
        phoneLabel,
        phone,
        peopleAmountLabel,
        peopleAmount,
        selectDateLabel,
        selectDate,
        bookingBtnContainer,
        errorTextContainer,
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