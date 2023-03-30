import { getContactMessage, getSignupFormDetails } from "../allUtilities";

const cleanUp = () => {
  const contactForm = document.forms.contactForm;
  const signupForm = document.forms.signupForm;
  if (contactForm) {
    contactForm.removeEventListener("submit", getContactMessage);
    return true;
  }
  if (signupForm) {
    signupForm.removeEventListener("submit", getSignupFormDetails);
    return true;
  }
  return false;
};

export { cleanUp };
