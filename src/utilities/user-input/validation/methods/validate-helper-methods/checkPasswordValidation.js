import {
  applyValidityClass,
  singupPasswordValidator,
  isOtherFieldValidated,
  singupUsernameValidator,
  submitSignupForm,
} from "../../../../allUtilities";

const checkPasswordValidation = (input, otherInput, submitButton, helper) => {
  const enteredComment = input.value;
  const isValid = singupPasswordValidator(enteredComment);
  applyValidityClass(isValid, input, enteredComment, helper);
  // see if the other field is validated
  const isOtherFieldValid = isOtherFieldValidated(
    otherInput,
    singupUsernameValidator
  );
  // determine to enable submit button
  if (isValid && isOtherFieldValid) {
    submitButton.disabled = false;
    submitSignupForm();
  } else {
    submitButton.disabled = true;
  }
};

export { checkPasswordValidation };
