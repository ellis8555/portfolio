import { checkLoginValidation } from "../../../allUtilities";

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
    checkLoginValidation(
      nameInput,
      passwordInput,
      submitButton,
      errorDisplayDiv,
      1
    );
  });
  // apply listener for user input on password field
  passwordInput.addEventListener("input", () => {
    checkLoginValidation(
      passwordInput,
      nameInput,
      submitButton,
      errorDisplayDiv,
      0
    );
  });
};

export { loginFormValidationTest };
