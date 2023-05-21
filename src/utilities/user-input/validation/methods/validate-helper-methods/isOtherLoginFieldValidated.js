// method checks to see if the other field is validated
const isOtherLoginFieldValidated = (otherInput) => {
  switch (otherInput.name) {
    case "loginName":
      if (otherInput.value.length > 1) {
        return true;
      }
      break;
    case "loginPassword":
      if (otherInput.value.length > 0) {
        return true;
      }
      break;
    default:
      return false;
  }
};

export { isOtherLoginFieldValidated };
