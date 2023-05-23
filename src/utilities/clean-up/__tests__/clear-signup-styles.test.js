import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import "@testing-library/jest-dom";
import { signupForm } from "../../../components/auth/signup/signupFRAGS/signupSnippet";
import { clearsignupFormStyles } from "../clear-signup-styles";

jsdomGlobal();

afterAll(() => {
  cleanup();
  window.close();
});

document.body.innerHTML = signupForm;
const form = document.forms.signupForm;

const clearsignupFormStylesMock = jest.fn(clearsignupFormStyles);

describe("nameInput related clearing tests", () => {
  const nameInput = form.elements.signupName;
  const nameHelper = document.getElementById("signupNameHelp");

  describe("nameInput input element tests", () => {
    test("is-valid class is removed", () => {
      nameInput.classList.add("is-valid");
      clearsignupFormStylesMock();
      expect(nameInput).not.toHaveClass("is-valid");
    });
    test("is-invalid class is removed", () => {
      nameInput.classList.add("is-invalid");
      clearsignupFormStylesMock();
      expect(nameInput).not.toHaveClass("is-invalid");
    });
  });
  describe("nameInput helper tests", () => {
    test("text-success class is removed", () => {
      nameHelper.classList.add("text-success");
      clearsignupFormStylesMock();
      expect(nameHelper).not.toHaveClass("text-success");
    });
    test("text-danger class is removed", () => {
      nameHelper.classList.add("text-danger");
      clearsignupFormStylesMock();
      expect(nameHelper).not.toHaveClass("text-danger");
    });
  });
});
describe("error div tests", () => {
  const nameErrorDiv = document.getElementById("signupName-invalid");
  const passwordErrorDiv = document.getElementById("signupPassword-invalid");
  // pass in mock data which should be removed during tests
  nameErrorDiv.innerHTML = "test error content";
  passwordErrorDiv.innerHTML = "test error content";
  clearsignupFormStylesMock();
  test("nameErrorDiv should be blank", () => {
    expect(nameErrorDiv.innerHTML).toBe("");
  });
  test("passwordErrorDiv should be blank", () => {
    expect(passwordErrorDiv.innerHTML).toBe("");
  });
});

test("submit button to be disabled", () => {
  const submitBtn = form.elements.submit;
  clearsignupFormStylesMock();
  expect(submitBtn).toHaveAttribute("disabled");
});
