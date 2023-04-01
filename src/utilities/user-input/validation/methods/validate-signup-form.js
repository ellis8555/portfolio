import { submitSignupForm } from "../../submit-signup-form";
import { singupUsernameValidator } from "../valiation-tests/signup-name-input";
import { singupPasswordValidator } from "../valiation-tests/signup-password-input";

const signupFormValidationTest = () => {
  const form = document.forms.signupForm;
  // get name input field
  const nameInput = form.elements.signupName;
  // get passworld field
  const passwordInput = form.elements.signupPassword;
  // get submit button ref
  const submitButton = form.elements.submit;
  // get name helper ref
  const nameHelper = document.getElementById("signupNameHelp");
  // get password helper ref
  const passwordHelper = document.getElementById("signupPasswordHelp");
  // apply listener for user input on name field
  nameInput.addEventListener("input", () => {
    checkNameValidation(nameInput, passwordInput, submitButton, nameHelper);
  });
  // apply listener for user input on password field
  passwordInput.addEventListener("input", () => {
    checkPasswordValidation(
      passwordInput,
      nameInput,
      submitButton,
      passwordHelper
    );
  });
};

const checkNameValidation = (input, otherInput, submitButton, helper) => {
  const enteredName = input.value;
  const isValid = singupUsernameValidator(enteredName);
  applyValidityClass(isValid, input, enteredName, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherFieldValidated(
    otherInput,
    singupPasswordValidator
  );
  // determine to enable submit button
  if (isValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitSignupForm();
  } else {
    submitButton.disabled = true;
  }
};

const checkPasswordValidation = (input, otherInput, submitButton, helper) => {
  const enteredComment = input.value;
  const isValid = singupPasswordValidator(enteredComment);
  applyValidityClass(isValid, input, enteredComment, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherFieldValidated(
    otherInput,
    singupUsernameValidator
  );
  // determine to enable submit button
  if (isValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitSignupForm();
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
const isOtherFieldValidated = (otherInput, validator) => {
  const isOtherFieldValidated = validator(otherInput.value);
  return isOtherFieldValidated;
};

export { signupFormValidationTest };
