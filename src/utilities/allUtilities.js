import { appendAllElements } from "./routes/appendAllElements";
import { appendSingleElement } from "./routes/appendSingleElement";
import { createRouteContainer } from "./routes/createRouteContainer";
import { setNavBarScrollFade } from "./effects/navbarScrollOpacityChange/navbarScrollOpacityChange";
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
import { cleanUp } from "./clean-up/clean-up";
import { clearContactFormStyles } from "./clean-up/clear-form-styles";
import { clearsignupFormStyles } from "./clean-up/clear-signup-styles";
import { userNameValidator } from "./user-input/validation/valiation-tests/contact-comment-input";
import { userCommentValidator } from "./user-input/validation/valiation-tests/contact-name-input";
import { singupUsernameValidator } from "./user-input/validation/valiation-tests/signup-name-input";
import { singupPasswordValidator } from "./user-input/validation/valiation-tests/signup-password-input";
import { contactFormValidationTest } from "./user-input/validation/methods/validate-contact-form";
import { signupFormValidationTest } from "./user-input/validation/methods/validate-signup-form";
import { loadResponseSpinner } from "./user-input/validation/methods/load-response-spinner";
import { sanitizeComment } from "./clean-up/sanitize-text-input";

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
  cleanUp,
  clearContactFormStyles,
  clearsignupFormStyles,
  userNameValidator,
  userCommentValidator,
  singupUsernameValidator,
  singupPasswordValidator,
  contactFormValidationTest,
  signupFormValidationTest,
  loadResponseSpinner,
  sanitizeComment,
};
