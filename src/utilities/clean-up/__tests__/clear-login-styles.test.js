import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import "@testing-library/jest-dom";
import { loginForm } from "../../../components/auth/login/loginFRAGS/login-form-snippet";
import { clearLoginFormStyles } from "../clear-login-styles";

jsdomGlobal();

afterAll(() => {
  window.close();
  cleanup();
});

document.body.innerHTML = loginForm;
const form = document.forms.loginForm;
const submitBtn = form.elements.submit;
const clearLoginFormStylesMock = jest.fn(clearLoginFormStyles);

test("submit button to be disabled", () => {
  clearLoginFormStylesMock();
  expect(submitBtn).toHaveAttribute("disabled");
});

describe("nameInput related clearing tests", () => {
  const nameInput = form.elements.loginName;
  test("is-valid class is removed", () => {
    nameInput.classList.add("is-valid");
    clearLoginFormStylesMock();
    expect(nameInput).not.toHaveClass("is-valid");
  });
  test("is-invalid class is removed", () => {
    nameInput.classList.add("is-invalid");
    clearLoginFormStylesMock();
    expect(nameInput).not.toHaveClass("is-invalid");
  });
});
describe("passwordInput related clearing tests", () => {
  const passwordInput = form.elements.loginPassword;
  test("is-valid class is removed", () => {
    passwordInput.classList.add("is-valid");
    clearLoginFormStylesMock();
    expect(passwordInput).not.toHaveClass("is-valid");
  });
  test("is-invalid class is removed", () => {
    passwordInput.classList.add("is-invalid");
    clearLoginFormStylesMock();
    expect(passwordInput).not.toHaveClass("is-invalid");
  });
});
describe("errorDisplay should not have invalid-feedback", () => {
  const errorDisplayDiv = document.getElementById("login-invalid");
  expect(errorDisplayDiv).toHaveClass("invalid-feedback");
});
