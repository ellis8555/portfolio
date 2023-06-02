import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { login } from "../login";

jest.mock("../../../../utilities/allUtilities", () => ({
  createRouteContainer: jest.fn(),
}));
jest.mock("../loginFRAGS/login-form-FRAG", () => ({
  loginFormElement: "loginFormElement",
}));

jsdomGlobal();
document.body.innerHTML = login;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain these ids", () => {
  it("should have the id of loginResponseIndicator", () => {
    const element = document.getElementById("loginResponseIndicator");
    expect(element).toBeInTheDocument();
  });
});
