// method applies correct styles to the input element
const applyValidityClass = (boolTest, input, value, helper) => {
  if (boolTest) {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
    helper.classList.remove("text-danger");
  } else if (value.length === 0) {
    input.classList.remove("is-invalid", "is-valid");
    helper.classList.remove("text-success", "text-danger");
  } else {
    input.classList.remove("is-valid");
    input.classList.add("is-invalid");
    helper.classList.add("text-danger");
  }
};

export { applyValidityClass };
