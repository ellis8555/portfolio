import { underConstructionElement } from "../../construction/under-construction";
const underConstructionElementContents = underConstructionElement.innerHTML;

const homeFRAG = `  <div class="py-5">
${underConstructionElementContents}
<div class="border border-success rounded mx-5 mt-5 px-5 py-3">
<p>
  Currently working on incorporating various web development technologies
  into this portfolio project
</p>
<p>First version - HTML, javascript, CSS & bootstrap</p>
<p class="m-0">Second version - React & Tailwind</p>
</div>
</div>`;

export { homeFRAG };
