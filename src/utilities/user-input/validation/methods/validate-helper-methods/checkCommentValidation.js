import {
  userNameValidator,
  applyValidityClass,
  userCommentValidator,
  isOtherFieldValidated,
} from "../../../../allUtilities";
import { submitContactMe } from "../../../submit-contact-form";

const checkCommentValidation = (input, otherInput, submitButton, helper) => {
  const enteredComment = input.value;
  const isValid = userCommentValidator(enteredComment);
  applyValidityClass(isValid, input, enteredComment, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherFieldValidated(
    otherInput,
    userNameValidator
  );
  // determine to enable submit button
  if (isValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitContactMe();
  } else {
    submitButton.disabled = true;
  }
};

export { checkCommentValidation };
