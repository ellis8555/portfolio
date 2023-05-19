import { contactFormElement } from "./contact-me-form-FRAG";
import { contactFragBodySnippet } from "./contact-me-snippets/contact-frag-body-snippet";

const contactFormContainer = `
<div class="rounded d-flex justify-content-center mt-5">
${contactFormElement.outerHTML}
</div>
`;

const contactFRAG = contactFragBodySnippet + contactFormContainer;

export { contactFRAG };
