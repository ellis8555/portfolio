import {
  checkPasswordValidation,
  checkSignupNameValidation,
} from "../../../allUtilities";

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
    checkSignupNameValidation(
      nameInput,
      passwordInput,
      submitButton,
      nameHelper
    );
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

export { signupFormValidationTest };
