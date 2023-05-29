import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import {
  isLoggedIn,
  appendSingleElement,
  appendTemporaryMessageReceived,
} from "../../allUtilities";
import { homeElement } from "../../../components/allElements";
import { logout, appendTheseElements } from "../logout";

jest.mock("../logout", () => {
  const originalModule = jest.requireActual("../logout");

  //Mock the default export and named export 'foo'
  return {
    ...originalModule,
    appendTheseElements: jest.fn(),
  };
});
jest.mock("../../allUtilities", () => ({
  isLoggedIn: jest.fn().mockReturnValue({
    isSignedIn: true,
    user: { username: "John" },
  }),
  appendSingleElement: jest.fn(),
  appendTemporaryMessageReceived: jest.fn(),
}));
jest.mock("../../../components/allElements", () => ({
  homeElement: "homeElement",
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

logout();

describe("variables should be", () => {
  test("username should be ", () => {
    const user = isLoggedIn().user.username;
    expect(user).toBe("John");
  });
});

describe("these methods are called", () => {
  test("should have called appendSingleElement", () => {
    expect(appendSingleElement).toHaveBeenCalled();
  });

  test("should have called appendTemporaryMessageReceived", () => {
    expect(appendTemporaryMessageReceived).toHaveBeenCalled();
  });
});
