import { submitLoginForm } from "../../submit-login-form";

const loginFormValidationTest = () => {
  const form = document.forms.loginForm;
  // get name input field
  const nameInput = form.elements.loginName;
  // get passworld field
  const passwordInput = form.elements.loginPassword;
  // get submit button ref
  const submitButton = form.elements.submit;
  // get error div ref
  const errorDisplayDiv = document.getElementById("login-invalid");
  // apply listener for user input on name field
  nameInput.addEventListener("input", () => {
    checkValidation(nameInput, passwordInput, submitButton, errorDisplayDiv, 1);
  });
  // apply listener for user input on password field
  passwordInput.addEventListener("input", () => {
    checkValidation(passwordInput, nameInput, submitButton, errorDisplayDiv, 0);
  });
};

const checkValidation = (
  input,
  otherInput,
  submitButton,
  helper,
  lengthCheck
) => {
  const enteredName = input.value;
  const isNameValid = enteredName.length > lengthCheck;
  applyValidityClass(isNameValid, input, enteredName, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherFieldValidated(otherInput);
  // determine to enable submit button
  if (isNameValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitLoginForm();
  } else {
    submitButton.disabled = true;
  }
};

// method applies correct styles to the input element
const applyValidityClass = (boolTest, input, value, helper) => {
  if (boolTest) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    helper.classList.remove("text-danger");
  } else if (value.length === 0) {
    input.classList.remove("is-invalid", "is-valid");
    helper.classList.remove("text-success", "text-danger");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    helper.classList.add("text-danger");
  }
};

// method checks to see if the other field is validated
const isOtherFieldValidated = (otherInput) => {
  switch (otherInput.name) {
    case "loginName":
      if (otherInput.value.length > 1) {
        return true;
      }
      break;
    case "loginPassword":
      if (otherInput.value.length > 0) {
        return true;
      }
      break;
    default:
      return false;
  }
};

export { loginFormValidationTest };
