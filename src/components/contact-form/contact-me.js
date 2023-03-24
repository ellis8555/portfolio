import { createRouteContainer } from "../../utilities/allUtilities";
import { contactFRAG } from "./contact-me-FRAGs/contact-me-FRAG";

const contactMe = `
<div class="container px-5 py-3 mt-5">
  <div id="todoSnippets">${contactFRAG}</div>
</div>`;

const contactElement = createRouteContainer(contactMe, "contact-me");

export { contactElement };
