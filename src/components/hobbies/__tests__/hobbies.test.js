import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { hobbies } from "../hobbies";

jest.mock("../../../utilities/allUtilities", () => ({
  createRouteContainer: jest.fn(),
}));
jest.mock("../hobbie-FRAGS/games-FRAG", () => ({
  hobbiesGamesFRAG: "hobbiesGamesFRAG",
}));
jest.mock("../hobbie-FRAGS/webDev-FRAG/webDev-FRAG", () => ({
  hobbiesWebDevFRAG: "hobbiesWebDevFRAG",
}));

jsdomGlobal();
document.body.innerHTML = hobbies;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain these ids", () => {
  it("should have the id of hobbiesSection", () => {
    const element = document.getElementById("hobbiesSection");
    expect(element).toBeInTheDocument();
  });
  it("should have the id of webDev", () => {
    const element = document.getElementById("webDev");
    expect(element).toBeInTheDocument();
  });
  it("should have the id of games", () => {
    const element = document.getElementById("games");
    expect(element).toBeInTheDocument();
  });
});
