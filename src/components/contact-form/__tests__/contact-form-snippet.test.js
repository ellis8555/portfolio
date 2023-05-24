import { contactFormSnippet } from "../contact-me-FRAGs/contact-me-snippets/contact-form-snippet";
import { userCommentValidator } from "../../../utilities/user-input/validation/valiation-tests/contact-comment-input";
import { userNameValidator } from "../../../utilities/user-input/validation/valiation-tests/contact-name-input";
import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import {
  toBeInTheDocument,
  toHaveTextContent,
  toBeDisabled,
} from "@testing-library/jest-dom";

jsdomGlobal();

describe("All contact form tests", () => {
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
    it("should run a validation check whenever a user presses a key in the name input", () => {
      const mockUserInput = jest.fn();

      const nameInputId = document.getElementById("name");
      nameInputId.value = "Ellis";
      for (let i = 0; i < nameInputId.value.length; i++) {
        mockUserInput();
      }
      expect(mockUserInput).toBeCalledTimes(5);
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
    it("should run a validation check whenever a user presses a key in the comment input", () => {
      const mockUserInput = jest.fn();

      const commentInputId = document.getElementById("comment");

      commentInputId.value = "This is a test comment!";

      for (let i = 0; i < commentInputId.value.length; i++) {
        mockUserInput();
      }

      expect(mockUserInput).toHaveBeenCalledTimes(23);
    });
  });

  describe("submit button", () => {
    it("should be disabled by default", () => {
      const submitBtn = document.querySelector("[name='submit']");
      expect(submitBtn).toBeDisabled();
    });

    it("should enable when valid user inputs", () => {
      const validName = jest.fn(userCommentValidator).mockReturnValue(true);
      const validComment = jest.fn(userNameValidator).mockReturnValue(true);

      const submitBtn = document.querySelector("[name='submit']");

      if (validName() && validComment()) {
        submitBtn.disabled = false;
        expect(submitBtn.disabled).toBe(false);
      }
    });
  });
});
