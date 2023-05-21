import {
  applyValidityClass,
  singupPasswordValidator,
  isOtherFieldValidated,
  singupUsernameValidator,
  submitSignupForm,
} from "../../../../allUtilities";

const checkSignupNameValidation = (input, otherInput, submitButton, helper) => {
  const enteredName = input.value;
  const isValid = singupUsernameValidator(enteredName);
  applyValidityClass(isValid, input, enteredName, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherFieldValidated(
    otherInput,
    singupPasswordValidator
  );
  // determine to enable submit button
  if (isValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitSignupForm();
  } else {
    submitButton.disabled = true;
  }
};

export { checkSignupNameValidation };
