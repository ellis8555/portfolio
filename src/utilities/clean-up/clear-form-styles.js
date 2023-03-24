const clearContactFormStyles = () => {
  const form = document.forms.contactForm;
  form.reset();

  const nameInput = form.elements.name;
  const commentInput = form.elements.comment;
  const nameErrorDiv = document.getElementById("name-invalid");
  const commentErrorDiv = document.getElementById("comment-invalid");

  nameInput.classList.remove("is-invalid");
  nameErrorDiv.innerHTML = "";
  commentInput.classList.remove("is-invalid");
  commentErrorDiv.innerHTML = "";
};

export { clearContactFormStyles };
