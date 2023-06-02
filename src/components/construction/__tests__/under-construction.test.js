import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { underConstruction } from "../under-construction";

jest.mock("../../../utilities/allUtilities", () => ({
  createRouteContainer: jest.fn(),
}));
jest.mock("../under-construction-FRAG", () => ({
  underConstructionFRAG: "underConstructionFRAG",
}));

jsdomGlobal();
document.body.innerHTML = underConstruction;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain these ids", () => {
  it("should have the id of construction-message", () => {
    const element = document.getElementById("construction-message");
    expect(element).toBeInTheDocument();
  });
});
