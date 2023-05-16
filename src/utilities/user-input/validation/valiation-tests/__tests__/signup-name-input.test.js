import { singupUsernameValidator } from "../signup-name-input";

// valid user names

describe("various signupUsernameValidator lengths of 2 or more", () => {
  test("returns true on 2 characters entered", () => {
    expect(singupUsernameValidator("ab")).toBe(true);
  });
  test("returns true on 3 characters entered", () => {
    expect(singupUsernameValidator("abc")).toBe(true);
  });
});

// invalid user names
describe("various signupUsernameValidator lengths of less than two", () => {
  test("returns true on 1 character entered", () => {
    expect(singupUsernameValidator("a")).toBe(false);
  });
  test("returns true on 0 characters entered", () => {
    expect(singupUsernameValidator("")).toBe(false);
  });
});
