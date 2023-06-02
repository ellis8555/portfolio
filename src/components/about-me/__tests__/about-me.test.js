import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { aboutMe } from "../about-me";

jest.mock("../../../utilities/allUtilities", () => ({
  createRouteContainer: jest.fn(),
}));
jest.mock("../about-me-FRAG", () => ({
  aboutMeFRAG: "aboutMeFRAG",
}));
jest.mock("../../hobbies/hobbies", () => ({
  hobbiesElement: "hobbiesElement",
}));
jest.mock("../../projects/project-FRAGS/github/github", () => ({
  gitHubAccount: "gitHubAccount",
}));

jsdomGlobal();
document.body.innerHTML = aboutMe;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain these ids", () => {
  it("should have the id of aboutMe", () => {
    const element = document.getElementById("aboutMe");
    expect(element).toBeInTheDocument();
  });
});
