import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { projects } from "../projects";

jest.mock("../../../utilities/allUtilities", () => ({
  createRouteContainer: jest.fn(),
}));
jest.mock("../project-FRAGS/personal-FRAG", () => ({
  personalFRAG: "personal-FRAG",
}));
jest.mock("../project-FRAGS/wywm-FRAG", () => ({
  wywmProjectsFrag: "wywmProjectsFrag",
}));

jsdomGlobal();
document.body.innerHTML = projects;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain these ids", () => {
  it("should first have element with id of projectSnippets", () => {
    const element = document.getElementById("projectSnippets");
    expect(element).toBeInTheDocument();
  });
  it("should first have element with id of personal", () => {
    const element = document.getElementById("personal");
    expect(element).toBeInTheDocument();
  });
  it("should first have element with id of wywm", () => {
    const element = document.getElementById("wywm");
    expect(element).toBeInTheDocument();
  });
});
