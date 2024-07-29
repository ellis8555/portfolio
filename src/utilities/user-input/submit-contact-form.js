import {
  appendSingleElement,
  loadResponseSpinner,
  sanitizeComment,
  sendMail,
  createEmail,
} from "../allUtilities";
import { homeElement } from "../../components/allElements";

const getContactMessage = async (e) => {
  e.preventDefault();
  // get spinner div container
  const spinnerDiv = document.getElementById("responseIndicator");
  loadResponseSpinner(spinnerDiv);

  // get the contact form
  const form = document.forms.contactForm;

  // get submitted values
  const userInput = {
    name: form.elements.name.value,
    userMessage: sanitizeComment(form.elements.comment.value),
  };

  const CONTACT_ENDPOINT = "https://portfolio-backend-tawny.vercel.app/contact";

  const response = await fetch(CONTACT_ENDPOINT, {
    method: "POST",
    mode: 'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userInput),
  });

  const result = await response.json();

  if (response.ok) {
    // remove loading spinner
    spinnerDiv.innerHTML = "";
    const responseMessage = result.message;
    const responseName = result.name;
    // send contact form message to admins email
    sendMail(
      createEmail(userInput.name, form.elements.comment.value),
      userInput.name
    );
    form.reset();
    appendSingleElement(root, homeElement, responseMessage, responseName);
  } else {
    if (result.hasOwnProperty("field")) {
      const fieldName = result.field;
      switch (fieldName) {
        case "name":
          setVisualValidationOnError("name", "name-invalid", result.message);
          break;
        case "userMessage":
          setVisualValidationOnError(
            "comment",
            "comment-invalid",
            result.message
          );
          break;
        default:
          return;
      }
    } else {
      // remove loading spinner
      spinnerDiv.innerHTML = "";
      const errorObject = result.error;
      const fieldListErrors = Object.keys(errorObject);
      fieldListErrors.forEach((error) => {
        switch (error) {
          case "name":
            setVisualValidationOnError(
              "name",
              "name-invalid",
              errorObject.name.message
            );
            break;
          case "userMessage":
            setVisualValidationOnError(
              "comment",
              "comment-invalid",
              errorObject.userMessage.message
            );
            break;
        }
      });
    }
  }
};

// this method is used in ./validation/validate-contact-form.js
const submitContactMe = () => {
  const form = document.forms.contactForm;
  const submitButton = form.elements.submit;
  submitButton.addEventListener("click", getContactMessage);
};

const setVisualValidationOnError = (inputID, errorID, errorMessage) => {
  const inputField = document.getElementById(inputID);
  inputField.classList.add("is-invalid");
  const errorDiv = document.getElementById(errorID);
  errorDiv.innerHTML = errorMessage;
};

export { getContactMessage, submitContactMe };
