// method checks to see if the other field is valided
const isOtherFieldValidated = (otherInput, validator) => {
  const isOtherFieldValidated = validator(otherInput.value);
  return isOtherFieldValidated;
};

export { isOtherFieldValidated };
