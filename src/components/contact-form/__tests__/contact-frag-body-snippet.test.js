import { contactFragBodySnippet } from "../contact-me-FRAGs/contact-me-snippets/contact-frag-body-snippet";

import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toHaveTextContent } from "@testing-library/jest-dom";

jsdomGlobal();

beforeEach(() => {
  document.body.innerHTML = contactFragBodySnippet;
});

afterEach(() => {
  cleanup();
});

afterAll(() => {
  window.close();
});

it("should display correct email", () => {
  const email = document.getElementById("gmail-icon");
  expect(email).toHaveTextContent(/ellis8555@gmail.com/);
});
