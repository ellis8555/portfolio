import { appendSingleElement, loadResponseSpinner } from "../allUtilities";
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
    userMessage: form.elements.comment.value,
  };

  const MONGO_URI = "https://angry-slug-peplum.cyclic.app/contact";

  const response = await fetch(MONGO_URI, {
    method: "POST",
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
