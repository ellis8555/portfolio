import { contactFormElement } from "./contact-me-form-FRAG";

const contactFRAG = `<p class="display-5 text-center">Contact Me</p>
<div class="rounded text-center d-md-inline-flex w-100 justify-content-md-around my-5 py-3 card-opacity">
  <p id="gmail-icon" class="text-info h5 font-weight-bold">
    ellis8555@gmail.com
  </p>
  <a
    href="https://www.linkedin.com/in/lonnie-smith-4b0583208/"
    class="text-info h5 font-weight-bold"
    id="linkedin-link"
    >My linkedin</a>
</div>
<h4 class="text-center">Leave a comment or feedback</h4>
<div class="text-center mt-5" id="responseIndicator">
</div>
<div class="rounded d-flex justify-content-center mt-5">
  ${contactFormElement.outerHTML}
</div>`;

export { contactFRAG };
