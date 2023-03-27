// method used in appendSingElement.js
// when a user submits a form they are redirected back to home element
// if the user navigates back to the contact element this method is run

const clearContactFormStyles = () => {
  const form = document.forms.contactForm;
  form.reset();
  const submitBtn = form.elements.submit;
  submitBtn.disabled = true;

  const nameInput = form.elements.name;
  const commentInput = form.elements.comment;
  const nameErrorDiv = document.getElementById("name-invalid");
  const commentErrorDiv = document.getElementById("comment-invalid");

  nameInput.classList.remove("is-invalid", "is-valid");
  nameErrorDiv.innerHTML = "";
  commentInput.classList.remove("is-invalid", "is-valid");
  commentErrorDiv.innerHTML = "";
};

export { clearContactFormStyles };
