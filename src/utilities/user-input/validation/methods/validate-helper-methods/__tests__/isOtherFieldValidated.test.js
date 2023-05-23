import { toBeBoolean } from "jest-extended";
import { isOtherFieldValidated } from "../isOtherFieldValidated";
expect.extend({ toBeBoolean });

const isOtherFieldValidatedMock = jest.fn(isOtherFieldValidated);

test("should have 2 args", () => {
  expect(isOtherFieldValidated.length).toBe(2);
});

it("should return a boolean", () => {
  const mockValidator = jest.fn().mockReturnValue(true);
  const shouldBeBoolean = isOtherFieldValidatedMock(
    "filler arg",
    mockValidator
  );
  expect(shouldBeBoolean).toBeBoolean();
});
