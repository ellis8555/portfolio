import { contactFormElement } from "./contact-me-form-FRAG";

const contactFRAG = `<p class="display-5 text-center">Contact Me</p>
<div class="rounded text-center d-md-inline-flex w-100 justify-content-md-around my-5 py-3 card-opacity">
  <p class="text-info h5 font-weight-bold">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="email-icon"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
    lsp1@hotmail.com
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
