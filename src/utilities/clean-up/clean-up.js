import { getContactMessage } from "../allUtilities";

const cleanUp = () => {
  const contactForm = document.forms.contactForm;
  if (contactForm) {
    contactForm.removeEventListener("submit", getContactMessage);
  }
  return;
};

export { cleanUp };
