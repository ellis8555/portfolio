import { underConstructionElement } from "../../allElements";

const homeFRAG = `
<div class="py-5">
${underConstructionElement.outerHTML}
<div class="mx-3 mx-md-5 mt-5 px-3">
<div class="d-md-flex justify-content-center">
<ul class="list-unstyled mt-3 border border-success rounded p-3">
<li>
<p>This is a vanilla single page app that uses DOM injecting into a root div</p>
</li>
<li>
<p>Custom webpack configuration used to bundle this version</p>
</li>
<li>
<p>Bootstrap is used for styling and animations in this project</p>
</li>
<li>
<p>Jest for testing</p>
</li>
</ul>
</div>
</div>
`;

export { homeFRAG };
