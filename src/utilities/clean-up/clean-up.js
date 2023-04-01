import {
  getContactMessage,
  getSignupFormDetails,
  getLoginFormDetails,
} from "../allUtilities";

const cleanUp = () => {
  const contactForm = document.forms.contactForm;
  const signupForm = document.forms.signupForm;
  const loginForm = document.forms.loginForm;
  if (contactForm) {
    contactForm.removeEventListener("submit", getContactMessage);
    return true;
  }
  if (signupForm) {
    signupForm.removeEventListener("submit", getSignupFormDetails);
    return true;
  }
  if (loginForm) {
    loginForm.removeEventListener("submit", getLoginFormDetails);
    return true;
  }
  return false;
};

export { cleanUp };
