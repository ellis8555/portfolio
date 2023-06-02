import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { signup } from "../signup";

jest.mock("../../../../utilities/allUtilities", () => ({
  createRouteContainer: jest.fn(),
}));
jest.mock("../signupFRAGS/signup-form-FRAG", () => ({
  signupFormElement: "signupFormElement",
}));

jsdomGlobal();
document.body.innerHTML = signup;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain these ids", () => {
  it("should have the id of signupResponseIndicator", () => {
    const element = document.getElementById("signupResponseIndicator");
    expect(element).toBeInTheDocument();
  });
});
