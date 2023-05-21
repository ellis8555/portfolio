import {
  applyValidityClass,
  isOtherLoginFieldValidated,
} from "../../../../allUtilities";
import { submitLoginForm } from "../../../../allUtilities";

const checkLoginValidation = (
  input,
  otherInput,
  submitButton,
  helper,
  lengthCheck
) => {
  const enteredName = input.value;
  const isNameValid = enteredName.length > lengthCheck;
  applyValidityClass(isNameValid, input, enteredName, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherLoginFieldValidated(otherInput);
  // determine to enable submit button
  if (isNameValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitLoginForm();
  } else {
    submitButton.disabled = true;
  }
};

export { checkLoginValidation };
