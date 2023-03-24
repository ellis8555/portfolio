import { cleanUp } from "../clean-up/clean-up";
import { appendTemporaryMessageReceived } from "../user-input/responseMessage";
import { homeElement, contactElement } from "../../components/allElements";
import { clearContactFormStyles } from "../allUtilities";

const appendSingleElement = (root, elementToAppend, ...otherArgs) => {
  // if moving away from contact form then remove listener on submit button
  const wasFormSubmitted = cleanUp();
  const navbarElement = root.firstElementChild;
  const elementToRemove = navbarElement.nextElementSibling;
  elementToRemove.remove();
  root.append(elementToAppend);
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
  if (elementToAppend === contactElement) {
    clearContactFormStyles();
  }
  if (wasFormSubmitted) {
    if (elementToAppend === homeElement) {
      if (otherArgs.length > 0) {
        const [responseMessage, name] = otherArgs;
        appendTemporaryMessageReceived(responseMessage, name);
      }
    }
  }
};

export { appendSingleElement };
