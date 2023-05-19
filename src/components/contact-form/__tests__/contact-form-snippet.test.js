import { contactFormSnippet } from "../contact-me-FRAGs/contact-me-snippets/contact-form-snippet";

import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import "@testing-library/jest-dom";

jsdomGlobal();

describe("entire form", () => {
  beforeEach(() => {
    document.body.innerHTML = contactFormSnippet;
  });

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    window.close();
  });

  describe("contact form", () => {
    it("has proper name", () => {
      const contactForm = document.querySelector("[name='contactForm']");
      expect(contactForm).toBeInTheDocument();
    });
  });

  describe("name input", () => {
    it("confirms id of the name input", () => {
      const nameInputId = document.getElementById("name");
      expect(nameInputId).toBeInTheDocument();
    });
    it("confirms the name of the name input", () => {
      const nameInputName = document.querySelector("[name='name']");
      expect(nameInputName).toBeInTheDocument();
    });
    it("should display 2-30 length in helper", () => {
      const nameInputHelper = document.getElementById("nameHelp");
      expect(nameInputHelper).toHaveTextContent(/2-30/);
    });
  });

  describe("comment input", () => {
    it("confirms the id of the comment input", () => {
      const commentInputId = document.getElementById("comment");
      expect(commentInputId).toBeInTheDocument();
    });
    it("confirms the name of the comment input", () => {
      const commentInputName = document.querySelector("[name='comment']");
      expect(commentInputName).toBeInTheDocument();
    });
    it("should display 8 - 250 length in helper", () => {
      const commentHelper = document.getElementById("commentHelp");
      expect(commentHelper).toHaveTextContent(/8-250/);
    });
  });

  describe("submit button", () => {
    it("should be disabled by default", () => {
      const submitBtn = document.querySelector("[name='submit']");
      expect(submitBtn).toBeDisabled();
    });
  });
});
