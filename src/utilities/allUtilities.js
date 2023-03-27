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
import { cleanUp } from "./clean-up/clean-up";
import { clearContactFormStyles } from "./clean-up/clear-form-styles";
import { userNameValidator } from "./user-input/validation/contact-comment-input";
import { userCommentValidator } from "./user-input/validation/contact-name-input";
export {
  createRouteContainer,
  appendAllElements,
  appendSingleElement,
  setNavBarScrollFade,
  pageStartup,
  routeChange,
  getContactMessage,
  submitContactMe,
  cleanUp,
  clearContactFormStyles,
  userNameValidator,
  userCommentValidator,
};
