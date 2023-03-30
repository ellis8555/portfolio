import { signupFormPassword } from "../regex/regex-patterns";

const singupPasswordValidator = (value) => {
  if (signupFormPassword.test(value)) {
    return true;
  }
  return false;
};

export { singupPasswordValidator };
