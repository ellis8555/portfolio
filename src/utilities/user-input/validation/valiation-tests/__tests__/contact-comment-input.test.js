import { userCommentValidator } from "../contact-comment-input";

// invalid comment tests

describe("valid comment input", () => {
  test("less than min char length required", () => {
    expect(userCommentValidator("1234567")).toBe(false);
  });
  test("over max character allowed", () => {
    const twoHundredFiftyOneChars =
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium q";
    expect(userCommentValidator(twoHundredFiftyOneChars)).toBe(false);
  });
});
