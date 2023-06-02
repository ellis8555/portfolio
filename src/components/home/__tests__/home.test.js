import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { index } from "../home";

jest.mock("../../../utilities/allUtilities", () => ({
  createRouteContainer: jest.fn(),
}));
jest.mock("../home-FRAG/homeFRAG", () => ({
  homeFRAG: "homeFRAG",
}));

jsdomGlobal();
document.body.innerHTML = index;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain these ids", () => {
  it("should have the id of homeContent", () => {
    const element = document.getElementById("homeContent");
    expect(element).toBeInTheDocument();
  });
});
