import jsdomGlobal from "jsdom-global";
import cleanup from "jsdom-global";
import { toBeInTheDocument } from "@testing-library/jest-dom";

import { certificates } from "../certificates";

jest.mock("../../../utilities/allUtilities", () => ({
  createRouteContainer: jest.fn(),
}));
jest.mock("../certificatesFRAG", () => ({
  certificatesFRAG: "certificatesFRAG",
}));
jest.mock("../certificates-methods/carousel-button-injector", () => ({
  carouselButtons: "carouselButtons",
}));

jsdomGlobal();
document.body.innerHTML = certificates;

afterAll(() => {
  cleanup();
  window.close();
});

describe("body should contain these ids", () => {
  it("should have the id of carouselContainer", () => {
    const element = document.getElementById("carouselContainer");
    expect(element).toBeInTheDocument();
  });
  it("should have the id of carouselExampleIndicators", () => {
    const element = document.getElementById("carouselExampleIndicators");
    expect(element).toBeInTheDocument();
  });
});
