import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import "@testing-library/jest-dom";
import { createRouteContainer } from "../createRouteContainer";

jsdomGlobal();

afterAll(() => {
  cleanup();
  window.close();
});

const HTMLcontent = "<p>for testing</p>";

describe("tests related to createRouteContainer method", () => {
  const HTMLresult = createRouteContainer(HTMLcontent, "testID");
  document.body.append(HTMLresult);
  const id = document.getElementById("testID");
  test("should show method has 2 arguments", () => {
    const argsLength = createRouteContainer.length;
    expect(argsLength).toBe(2);
  });
  test("should contain correct id", () => {
    expect(id).toBeInTheDocument();
  });
  test("should contain this HTML", () => {
    expect(HTMLresult).toContainHTML(
      "<div id='testID'><p>for testing</p></div>"
    );
  });
});
