// method used in appendSingElement.js
// when a user submits a form they are redirected back to home element
// if the user navigates back to the contact element this method is run

const clearsignupFormStyles = () => {
  const form = document.forms.signupForm;
  form.reset();
  const submitBtn = form.elements.submit;
  submitBtn.disabled = true;

  // the actual input fields
  const nameInput = form.elements.signupName;
  const passwordInput = form.elements.signupPassword;
  const nameErrorDiv = document.getElementById("signupName-invalid");
  const passwordErrorDiv = document.getElementById("signupPassword-invalid");

  nameInput.classList.remove("is-invalid", "is-valid");
  nameErrorDiv.innerHTML = "";
  passwordInput.classList.remove("is-invalid", "is-valid");
  passwordErrorDiv.innerHTML = "";

  // the input fields validation message helper text
  const nameHelper = document.getElementById("signupNameHelp");
  const passwordHelper = document.getElementById("signupPasswordHelp");

  nameHelper.classList.remove("text-success", "text-danger");
  passwordHelper.classList.remove("text-success", "text-danger");

  // if duplicate user occured clean up that message
  const duplicateError = document.getElementById("signup-invalid");
  if (duplicateError.classList.contains("invalid-feedback")) {
    return;
  } else {
    duplicateError.classList.add("invalid-feedback");
  }
};

export { clearsignupFormStyles };
