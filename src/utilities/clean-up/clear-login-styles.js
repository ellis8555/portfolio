// method used in appendSingElement.js
// when a user submits a form they are redirected back to home element
// if the user navigates back to the contact element this method is run

const clearLoginFormStyles = () => {
  const form = document.forms.loginForm;
  form.reset();
  const submitBtn = form.elements.submit;
  submitBtn.disabled = true;

  // the actual input fields
  const nameInput = form.elements.loginName;
  const passwordInput = form.elements.loginPassword;
  const errorDisplayDiv = document.getElementById("login-invalid");

  nameInput.classList.remove("is-invalid", "is-valid");
  errorDisplayDiv.innerHTML = "";
  passwordInput.classList.remove("is-invalid", "is-valid");

  // if duplicate user occured clean up that message
  if (errorDisplayDiv.classList.contains("invalid-feedback")) {
    return;
  } else {
    errorDisplayDiv.classList.add("invalid-feedback");
  }
};

export { clearLoginFormStyles };
