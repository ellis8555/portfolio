import { applyValidityClass } from "../applyValidityClass";
import { contactFormSnippet } from "../../../../../../components/contact-form/contact-me-FRAGs/contact-me-snippets/contact-form-snippet";
import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import "@testing-library/jest-dom";

jsdomGlobal();

describe("styles of contact form are correct on input for name and comment fields", () => {
  let nameInput;
  let nameHelper;
  document.body.innerHTML = contactFormSnippet;
  const form = document.forms.contactForm;
  //   get name input field
  nameInput = form.elements.name;
  // get name helper ref
  nameHelper = document.getElementById("nameHelp");

  afterEach(() => {
    cleanup();
  });

  afterAll(() => {
    window.close();
  });

  const applyValidityClassMock = jest.fn(applyValidityClass);

  test("that applyValidityClass() should have 4 args", () => {
    expect(applyValidityClassMock.length).toBe(4);
  });
  describe("if first arg is true proper classes are added and removed", () => {
    const name = "John Smith";
    test("input should have class is-valid", () => {
      applyValidityClassMock(true, nameInput, name, nameHelper);
      expect(nameInput).toHaveClass("is-valid");
    });
    test("input should not have class is-invalid", () => {
      applyValidityClassMock(true, nameInput, name, nameHelper);
      expect(nameInput).not.toHaveClass("is-invalid");
    });
    test("nameHelper should not have class text-danger", () => {
      applyValidityClassMock(true, nameInput, name, nameHelper);
      expect(nameHelper).not.toHaveClass("text-danger");
    });
  });
  describe("if first arg is false and value has a length of zero proper classes are added and removed", () => {
    const name = "";
    test("nameInput should not have is-valid", () => {
      applyValidityClassMock(false, nameInput, name, nameHelper);
      expect(nameInput).not.toHaveClass("is-valid");
    });
    test("nameInput should not have is-invalid", () => {
      applyValidityClassMock(false, nameInput, name, nameHelper);
      expect(nameInput).not.toHaveClass("is-invalid");
    });
    test("nameHelper should not have text-success", () => {
      applyValidityClassMock(false, nameInput, name, nameHelper);
      expect(nameHelper).not.toHaveClass("text-success");
    });
    test("nameHelper should not have text-danger", () => {
      applyValidityClassMock(false, nameInput, name, nameHelper);
      expect(nameHelper).not.toHaveClass("text-danger");
    });
  });
  describe("if first arg is false proper classes are added and removed", () => {
    const name = "J";
    test("input should not have class is-valid", () => {
      applyValidityClassMock(false, nameInput, name, nameHelper);
      expect(nameInput).not.toHaveClass("is-valid");
    });
    test("input should have class is-invalid", () => {
      applyValidityClassMock(false, nameInput, name, nameHelper);
      expect(nameInput).toHaveClass("is-invalid");
    });
    test("nameHelper should have class text-danger", () => {
      applyValidityClassMock(false, nameInput, name, nameHelper);
      expect(nameHelper).toHaveClass("text-danger");
    });
  });
});
