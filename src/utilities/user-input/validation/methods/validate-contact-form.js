import {
  checkNameValidation,
  checkCommentValidation,
} from "../../../allUtilities";

const contactFormValidationTest = () => {
  const form = document.forms.contactForm;
  //   get name input field
  const nameInput = form.elements.name;
  //   get comment textarea
  const commentInput = form.elements.comment;
  // get submit button ref
  const submitButton = form.elements.submit;
  // get name helper ref
  const nameHelper = document.getElementById("nameHelp");
  // get comment helper ref
  const commentHelper = document.getElementById("commentHelp");
  //  apply listener for user input on name field
  nameInput.addEventListener("input", () => {
    checkNameValidation(nameInput, commentInput, submitButton, nameHelper);
  });
  // apply listener for user input on comment field
  commentInput.addEventListener("input", () => {
    checkCommentValidation(
      commentInput,
      nameInput,
      submitButton,
      commentHelper
    );
  });
};

export { contactFormValidationTest };
