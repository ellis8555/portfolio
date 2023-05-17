import {
  contactFormName,
  contactFormComment,
  signupFormPassword,
} from "../regex-patterns";

describe("patterns for user input should match these", () => {
  test("contactFormName", () => {
    expect(contactFormName).toStrictEqual(
      /^(?=[a-zA-Z ]{2,30}$)[a-zA-Z]* ?[a-zA-Z]+$/
    );
  });
  test("contactFormComment", () => {
    expect(contactFormComment).toStrictEqual(/^.{8,250}$/);
  });
  test("signupFormPassword", () => {
    expect(signupFormPassword).toStrictEqual(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&\-+^()[\]{}|~])[A-Za-z\d@$!%*?&\-+^()[\]{}|~]{8,}$/
    );
  });
});
