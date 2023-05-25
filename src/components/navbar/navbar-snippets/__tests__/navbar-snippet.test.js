import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { navbar } from "../navbar-snippet";

jest.mock("../../navbar-methods/links-injector", () => ({
  navbarLinkItems: "Mocked navbarLinkItems value",
}));

jsdomGlobal();
document.body.innerHTML = navbar;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain these ids", () => {
  it("should have element with id of 'navbarNavAltMarkup'", () => {
    const element = document.getElementById("navbarNavAltMarkup");
    expect(element).toBeInTheDocument();
  });
  it("should have element with id of 'loggedInUsername'", () => {
    const element = document.getElementById("loggedInUsername");
    expect(element).toBeInTheDocument();
  });
  it("should have element with id of 'mobileLoggedIn'", () => {
    const element = document.getElementById("mobileLoggedIn");
    expect(element).toBeInTheDocument();
  });
});

describe("button should have these attribute values", () => {
  const element = document.querySelector(".navbar-toggler");
  it("should have data-bs-target of", () => {
    const dataBsTargetValue = element.getAttribute("data-bs-target");
    expect(dataBsTargetValue).toBe("#navbarNavAltMarkup");
  });
  it("should have aria-controls of", () => {
    const ariaControls = element.getAttribute("aria-controls");
    expect(ariaControls).toBe("navbarNavAltMarkup");
  });
});
