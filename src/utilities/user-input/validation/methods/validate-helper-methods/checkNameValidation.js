import {
  userNameValidator,
  applyValidityClass,
  userCommentValidator,
  isOtherFieldValidated,
} from "../../../../allUtilities";
import { submitContactMe } from "../../../submit-contact-form";

const checkNameValidation = (input, otherInput, submitButton, helper) => {
  const enteredName = input.value;
  const isValid = userNameValidator(enteredName);
  applyValidityClass(isValid, input, enteredName, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherFieldValidated(
    otherInput,
    userCommentValidator
  );
  // determine to enable submit button
  if (isValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitContactMe();
  } else {
    submitButton.disabled = true;
  }
};

export { checkNameValidation };
