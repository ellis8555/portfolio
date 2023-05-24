import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toHaveClass, toHaveAttribute } from "@testing-library/jest-dom";
import { contactFormSnippet } from "../../../components/contact-form/contact-me-FRAGs/contact-me-snippets/contact-form-snippet";
import { clearContactFormStyles } from "../clear-form-styles";

jsdomGlobal();

afterAll(() => {
  window.close();
  cleanup();
});

document.body.innerHTML = contactFormSnippet;
const form = document.forms.contactForm;
const submitBtn = form.elements.submit;
const clearContactFormStylesMock = jest.fn(clearContactFormStyles);

describe("nameInput related clearing tests", () => {
  const nameInput = form.elements.name;
  const nameErrorDiv = document.getElementById("name-invalid");
  const nameHelper = document.getElementById("nameHelp");

  describe("nameInput related classes are properly removed", () => {
    test("is-valid class is removed", () => {
      nameInput.classList.add("is-valid");
      clearContactFormStylesMock();
      expect(nameInput).not.toHaveClass("is-valid");
    });
    test("is-invalid class is removed", () => {
      nameInput.classList.add("is-invalid");
      clearContactFormStylesMock();
      expect(nameInput).not.toHaveClass("is-invalid");
    });
    test("is-valid class is removed", () => {
      nameHelper.classList.add("text-success");
      clearContactFormStylesMock();
      expect(nameHelper).not.toHaveClass("text-success");
    });
    test("is-invalid class is removed", () => {
      nameHelper.classList.add("text-danger");
      clearContactFormStylesMock();
      expect(nameHelper).not.toHaveClass("text-danger");
    });
  });
  describe("nameError div test", () => {
    test("should remove text from error div", () => {
      nameErrorDiv.innerHTML = "mock data";
      clearContactFormStylesMock();
      expect(nameErrorDiv.innerHTML).toBe("");
    });
  });
});

describe("commentInput related clearing tests", () => {
  const commentInput = form.elements.comment;
  const commentErrorDiv = document.getElementById("comment-invalid");
  const commentHelper = document.getElementById("commentHelp");

  describe("commentInput related classes are properly removed", () => {
    test("is-valid class is removed", () => {
      commentInput.classList.add("is-valid");
      clearContactFormStylesMock();
      expect(commentInput).not.toHaveClass("is-valid");
    });
    test("is-invalid class is removed", () => {
      commentInput.classList.add("is-invalid");
      clearContactFormStylesMock();
      expect(commentInput).not.toHaveClass("is-invalid");
    });
    test("is-valid class is removed", () => {
      commentHelper.classList.add("text-success");
      clearContactFormStylesMock();
      expect(commentHelper).not.toHaveClass("text-success");
    });
    test("is-invalid class is removed", () => {
      commentHelper.classList.add("text-danger");
      clearContactFormStylesMock();
      expect(commentHelper).not.toHaveClass("text-danger");
    });
  });
  describe("commentError div test", () => {
    test("should remove text from error div", () => {
      commentErrorDiv.innerHTML = "mock data";
      clearContactFormStylesMock();
      expect(commentErrorDiv.innerHTML).toBe("");
    });
  });
});

test("submit button to be disabled", () => {
  clearContactFormStylesMock();
  expect(submitBtn).toHaveAttribute("disabled");
});
