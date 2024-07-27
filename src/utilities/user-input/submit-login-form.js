import {
  appendSingleElement,
  loadResponseSpinner,
  sanitizeComment,
  login,
} from "../allUtilities";
import { homeElement } from "../../components/allElements";

const getLoginFormDetails = async (e) => {
  e.preventDefault();

  // get spinner div container
  const spinnerDiv = document.getElementById("loginResponseIndicator");
  loadResponseSpinner(spinnerDiv);

  // get the login form
  const form = document.forms.loginForm;

  // get submitted details
  const userInput = {
    username: sanitizeComment(form.elements.loginName.value),
    password: sanitizeComment(form.elements.loginPassword.value),
  };

  const LOGIN_ENDPOINT = "https://bejewelled-bienenstitch-cc5929.netlify.app/user/login";

  const response = await fetch(LOGIN_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userInput),
  });

  const result = await response.json();

  if (response.ok) {
    // remove loading spinner
    spinnerDiv.innerHTML = "";
    const results = {
      accessToken: result.accessToken,
      message: result.message,
      username: result.username,
    };
    localStorage.setItem("user", JSON.stringify(results));
    form.reset();
    appendSingleElement(root, homeElement, results.message, results.username);
    login();
  } else {
    if (result.hasOwnProperty("field")) {
      const fieldName = result.field;
      switch (fieldName) {
        case "notFound":
          setVisualValidationOnError("login-invalid", result.message);
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
              "login-invalid",
              errorObject.username.message
            );
            break;
          case "password":
            setVisualValidationOnError(
              "login-invalid",
              errorObject.password.message
            );
            break;
        }
      });
    }
  }
};

// this method is exported and used in ./validation/validate-login-form.js
const submitLoginForm = () => {
  const form = document.forms.loginForm;
  const submitButton = form.elements.submit;
  submitButton.addEventListener("click", getLoginFormDetails);
};

// local method used above
const setVisualValidationOnError = (errorID, errorMessage) => {
  // remove loading indicator
  const spinnerDiv = document.getElementById("loginResponseIndicator");
  spinnerDiv.innerHTML = "";
  // get error output div
  const errorDiv = document.getElementById(errorID);
  // check to see if the error is duplicate username
  errorDiv.classList.remove("invalid-feedback");
  errorDiv.classList.add("text-danger");
  errorDiv.innerHTML = errorMessage;
};

export { getLoginFormDetails, submitLoginForm };
