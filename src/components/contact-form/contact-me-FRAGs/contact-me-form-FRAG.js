import { createRouteContainer } from "../../../utilities/allUtilities";
import { contactFormSnippet } from "./contact-me-snippets/contact-form-snippet";

const contactFormElement = createRouteContainer(
  contactFormSnippet,
  "contactForm"
);
export { contactFormElement };
