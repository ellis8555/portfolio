import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import "@testing-library/jest-dom";
import { loadResponseSpinner } from "../../load-response-spinner";

jsdomGlobal();

afterAll(() => {
  window.close();
  cleanup();
});

loadResponseSpinner(document.body);

describe("spinner parent container tests", () => {
  test("element with proper id exists", () => {
    const element = document.getElementById("contactFormSpinner");
    expect(element).toBeInTheDocument();
  });

  test("should have proper class", () => {
    const spanElement = document.querySelector("span");
    expect(spanElement).toHaveClass("visually-hidden");
  });
});
