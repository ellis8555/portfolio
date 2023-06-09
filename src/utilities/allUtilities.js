import { appendAllElements } from "./routes/appendAllElements";
import { appendSingleElement } from "./routes/appendSingleElement";
import { createRouteContainer } from "./routes/createRouteContainer";
import { setNavBarScrollFade } from "./effects/navbar/navbarScrollOpacityChange";
import { pageStartup } from "./routes/pageStartup";
import { routeChange } from "./routes/routeChange";
import {
  getContactMessage,
  submitContactMe,
} from "./user-input/submit-contact-form";
import {
  getSignupFormDetails,
  submitSignupForm,
} from "./user-input/submit-signup-form";
import {
  getLoginFormDetails,
  submitLoginForm,
} from "./user-input/submit-login-form";
import { cleanUp } from "./clean-up/clean-up";
import { clearContactFormStyles } from "./clean-up/clear-form-styles";
import { clearsignupFormStyles } from "./clean-up/clear-signup-styles";
import { clearLoginFormStyles } from "./clean-up/clear-login-styles";
import { userNameValidator } from "./user-input/validation/valiation-tests/contact-name-input";
import { userCommentValidator } from "./user-input/validation/valiation-tests/contact-comment-input";
import { singupUsernameValidator } from "./user-input/validation/valiation-tests/signup-name-input";
import { singupPasswordValidator } from "./user-input/validation/valiation-tests/signup-password-input";
import { contactFormValidationTest } from "./user-input/validation/methods/validate-contact-form";
import { signupFormValidationTest } from "./user-input/validation/methods/validate-signup-form";
import { loginFormValidationTest } from "./user-input/validation/methods/validate-login-form";
import { loadResponseSpinner } from "./user-input/validation/methods/load-response-spinner";
import { sanitizeComment } from "./clean-up/sanitize-text-input";
import { appendTemporaryMessageReceived } from "../utilities/user-input/responseMessage";
import { isLoggedIn } from "./auth/isLoggedIn";
import { login } from "./auth/login";
import { logout } from "./auth/logout";
import { sendMail, createEmail } from "./user-input/emailJs-response";
import { applyValidityClass } from "./user-input/validation/methods/validate-helper-methods/applyValidityClass";
import { checkNameValidation } from "./user-input/validation/methods/validate-helper-methods/checkNameValidation";
import { checkCommentValidation } from "./user-input/validation/methods/validate-helper-methods/checkCommentValidation";
import { isOtherFieldValidated } from "./user-input/validation/methods/validate-helper-methods/isOtherFieldValidated";
import { isOtherLoginFieldValidated } from "./user-input/validation/methods/validate-helper-methods/isOtherLoginFieldValidated";
import { checkLoginValidation } from "./user-input/validation/methods/validate-helper-methods/checkLoginValidation";
import { checkPasswordValidation } from "./user-input/validation/methods/validate-helper-methods/checkPasswordValidation";
import { checkSignupNameValidation } from "./user-input/validation/methods/validate-helper-methods/checkSignupNameValidation";
import { navbarLayoutOnResize } from "./effects/navbar/navbarLayoutOnResize";

export {
  createRouteContainer,
  appendAllElements,
  appendSingleElement,
  setNavBarScrollFade,
  pageStartup,
  routeChange,
  getContactMessage,
  submitContactMe,
  getSignupFormDetails,
  submitSignupForm,
  getLoginFormDetails,
  submitLoginForm,
  cleanUp,
  clearContactFormStyles,
  clearsignupFormStyles,
  clearLoginFormStyles,
  userNameValidator,
  userCommentValidator,
  singupUsernameValidator,
  singupPasswordValidator,
  contactFormValidationTest,
  signupFormValidationTest,
  loginFormValidationTest,
  loadResponseSpinner,
  sanitizeComment,
  appendTemporaryMessageReceived,
  isLoggedIn,
  login,
  logout,
  sendMail,
  createEmail,
  applyValidityClass,
  checkNameValidation,
  checkCommentValidation,
  isOtherFieldValidated,
  isOtherLoginFieldValidated,
  checkLoginValidation,
  checkPasswordValidation,
  checkSignupNameValidation,
  navbarLayoutOnResize,
};
