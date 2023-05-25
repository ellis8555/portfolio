import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { login } from "../login";
import {
  toBeInTheDocument,
  toHaveClass,
  toHaveTextContent,
} from "@testing-library/jest-dom";
jest.mock("../../allUtilities", () => ({
  isLoggedIn: jest.fn().mockReturnValue({
    isSignedIn: true,
    user: { username: "John" },
  }),
}));

jsdomGlobal();

afterAll(() => {
  cleanup();
  window.close();
});

const userNameDisplay = document.createElement("div");
userNameDisplay.id = "loggedInUsername";
const mobileUserNameDisplay = document.createElement("div");
mobileUserNameDisplay.id = "mobileLoggedIn";
const logoutLink = document.createElement("div");
logoutLink.setAttribute("data-name", "logoutElement");
const loginLink = document.createElement("div");
loginLink.setAttribute("data-name", "loginElement");
const signupLink = document.createElement("div");
signupLink.setAttribute("data-name", "signupElement");

document.body.append(
  userNameDisplay,
  mobileUserNameDisplay,
  logoutLink,
  loginLink,
  signupLink
);

login();

describe("username displays in correct divs", () => {
  test("should display in loggedInUsername id", () => {
    const id = document.getElementById("loggedInUsername");
    expect(id).toHaveTextContent("John");
  });
  test("should display in mobileLoggedIn id", () => {
    const id = document.getElementById("mobileLoggedIn");
    expect(id).toHaveTextContent("John");
  });
});

describe("class d-none should be removed or added to these classes", () => {
  test("should not be in logoutLink", () => {
    expect(logoutLink).not.toHaveClass("d-none");
  });
  test("should be in loginLink", () => {
    expect(loginLink).toHaveClass("d-none");
  });
  test("should be in signupLink", () => {
    expect(signupLink).toHaveClass("d-none");
  });
});
