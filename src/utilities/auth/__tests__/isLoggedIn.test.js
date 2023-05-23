import { toBeTrue, toBeFalse } from "jest-extended";
jest.mock("../isLoggedIn");
expect.extend({ toBeTrue, toBeFalse });

describe("isSignedIn is false tests", () => {
  const isLoggedInMock = jest.fn(() => {
    const userDetails = {
      isSignedIn: false,
      user: undefined,
    };
    return userDetails;
  });
  afterAll(() => {
    isLoggedInMock.mockClear();
  });
  const userDetails = isLoggedInMock();
  test("should return userDetails with isSignedIn as false when localStorage does not contain user", () => {
    expect(userDetails.isSignedIn).toBeFalse();
  });
  test("should return user as undefined", () => {
    const userDetails = isLoggedInMock();
    expect(userDetails.user).toBeUndefined();
  });
});

describe("isSignedIn is true tests", () => {
  const isLoggedInMock = jest.fn(() => {
    const userDetails = {
      isSignedIn: true,
      user: "John",
    };
    return userDetails;
  });
  afterAll(() => {
    isLoggedInMock.mockClear();
  });
  const userDetails = isLoggedInMock();
  test("should return userDetails with isSignedIn as true", () => {
    expect(userDetails.isSignedIn).toBeTrue();
  });
  test("should return defined for user", () => {
    const userDetails = isLoggedInMock();
    expect(userDetails.user).not.toBeUndefined();
  });
});
