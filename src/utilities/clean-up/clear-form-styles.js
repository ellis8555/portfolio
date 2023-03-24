const clearContactFormStyles = () => {
  const nameInput = document.getElementById("name");
  const commentInput = document.getElementById("comment");
  const nameErrorDiv = document.getElementById("name-invalid");
  const commentErrorDiv = document.getElementById("comment-invalid");

  nameInput.classList.remove("is-invalid");
  nameErrorDiv.innerHTML = "";
  commentInput.classList.remove("is-invalid");
  commentErrorDiv.innerHTML = "";
};

export { clearContactFormStyles };
