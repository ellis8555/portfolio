import { cleanUp } from "../clean-up/clean-up";
import { appendTemporaryMessageReceived } from "../user-input/responseMessage";
import {
  homeElement,
  contactElement,
  signupElement,
  loginElement,
} from "../../components/allElements";
import {
  clearContactFormStyles,
  clearsignupFormStyles,
  clearLoginFormStyles,
} from "../allUtilities";

const appendSingleElement = (root, elementToAppend, ...otherArgs) => {
  // if moving away from contact form then remove listener on submit button
  // also returns boolean used further down. see comments
  const wasFormSubmitted = cleanUp();
  const navbarElement = root.firstElementChild;
  // this grabs the div container holding the current element that has been navigated to
  // remove this element and then append the selected navigated element to append
  const elementToRemove = navbarElement.nextElementSibling;
  elementToRemove.remove();
  root.append(elementToAppend);
  // settimeout required for scroll to top of page to work properly
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 0);
  // when navigating to contact form clear values and styles
  if (elementToAppend === contactElement) {
    clearContactFormStyles();
  }
  // when navigating to signup form clear values and styles
  if (elementToAppend === signupElement) {
    clearsignupFormStyles();
  }
  // when navigating to signup form clear values and styles
  if (elementToAppend === loginElement) {
    clearLoginFormStyles();
  }

  // if navigating from contact form check to see if data was submitted
  // if data was submitted then apply message received on home element
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
