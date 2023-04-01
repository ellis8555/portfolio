import {
  appendSingleElement,
  loadResponseSpinner,
  sanitizeComment,
  login,
} from "../allUtilities";
import { homeElement } from "../../components/allElements";

const getSignupFormDetails = async (e) => {
  e.preventDefault();

  // get spinner div container
  const spinnerDiv = document.getElementById("signupResponseIndicator");
  loadResponseSpinner(spinnerDiv);

  // get the signup form
  const form = document.forms.signupForm;

  // get submitted details
  const userInput = {
    username: sanitizeComment(form.elements.signupName.value),
    password: sanitizeComment(form.elements.signupPassword.value),
  };

  const SIGNUP_ENDPOINT = "https://angry-slug-peplum.cyclic.app";

  const response = await fetch(SIGNUP_ENDPOINT, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userInput),
  });

  const result = await response.json();

  if (response.ok) {
    // remove loading spinner
    spinnerDiv.innerHTML = "";
    const responseMessage = result.message;
    const responseName = result.username;
    form.reset();
    appendSingleElement(root, homeElement, responseMessage, responseName);
    // removes login and signup links from navbar and displays logout
    login();
  } else {
    if (result.hasOwnProperty("field")) {
      const fieldName = result.field;
      switch (fieldName) {
        case "username":
          setVisualValidationOnError(
            "signupName",
            "signupName-invalid",
            result.message,
            false
          );
          break;
        case "password":
          setVisualValidationOnError(
            "signupPassword",
            "signupPassword-invalid",
            result.message,
            false
          );
          break;
        case "duplicate":
          setVisualValidationOnError(
            "signupName",
            "signup-invalid",
            result.message,
            true
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
          case "username":
            setVisualValidationOnError(
              "signupName",
              "signupName-invalid",
              errorObject.username.message
            );
            break;
          case "password":
            setVisualValidationOnError(
              "signupPassword",
              "signupPassword-invalid",
              errorObject.password.message
            );
            break;
        }
      });
    }
  }
};

// this method is exported and used in ./validation/validate-signup-form.js
const submitSignupForm = () => {
  const form = document.forms.signupForm;
  const submitButton = form.elements.submit;
  submitButton.addEventListener("click", getSignupFormDetails);
};

// local method used above
const setVisualValidationOnError = (
  inputID,
  errorID,
  errorMessage,
  isUserDuplicate
) => {
  // remove loading indicator
  const spinnerDiv = document.getElementById("signupResponseIndicator");
  spinnerDiv.innerHTML = "";
  // get username input
  const inputField = document.getElementById(inputID);
  inputField.classList.add("is-invalid");
  // get error output div
  const errorDiv = document.getElementById(errorID);
  // check to see if the error is duplicate username
  if (isUserDuplicate) {
    errorDiv.classList.remove("invalid-feedback");
  }
  errorDiv.innerHTML = errorMessage;
};

export { getSignupFormDetails, submitSignupForm };
