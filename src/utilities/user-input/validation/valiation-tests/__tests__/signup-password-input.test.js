import { singupPasswordValidator } from "../signup-password-input";

// tests that should are valid input

describe("valid password tests", () => {
  test("includes list of special characters", () => {
    const specialCharacters = [
      "@",
      "$",
      "!",
      "%",
      "*",
      "?",
      "&",
      "-",
      "+",
      "^",
      "(",
      ")",
      "[",
      "]",
      "{",
      "}",
      "|",
      "~",
    ];
    specialCharacters.forEach((char) => {
      expect(singupPasswordValidator(`${char}Aa12345`)).toBe(true);
    });
  });
  test("includes single numeric char", () => {
    expect(singupPasswordValidator("!Aabcde5")).toBe(true);
  });
});

// tests that are invalid input

describe("invalid password tests", () => {
  test("no special char", () => {
    expect(singupPasswordValidator("Aa12345")).toBe(false);
  });
  test("no uppercase char", () => {
    expect(singupPasswordValidator("aa12345")).toBe(false);
  });
  test("no numeric char", () => {
    expect(singupPasswordValidator("!Aaaaaaa")).toBe(false);
  });
  test("no alpha char", () => {
    expect(singupPasswordValidator("!1234567")).toBe(false);
  });
  test("no lowercase char", () => {
    expect(singupPasswordValidator("!AA12345")).toBe(false);
  });
  test("less than min length allowed", () => {
    expect(singupPasswordValidator("!Aa1234")).toBe(false);
  });
});
