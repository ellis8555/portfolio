import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { todos } from "../todos";

jest.mock("../../../utilities/allUtilities", () => ({
  createRouteContainer: jest.fn(),
}));
jest.mock("../todos-FRAG", () => ({
  todosFRAG: "todosFRAG",
}));

jsdomGlobal();
document.body.innerHTML = todos;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain ids", () => {
  it("should have the id of todoSnippets", () => {
    const element = document.getElementById("todoSnippets");
    expect(element).toBeInTheDocument();
  });
});
