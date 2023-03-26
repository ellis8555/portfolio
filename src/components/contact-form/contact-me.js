import { createRouteContainer } from "../../utilities/allUtilities";
import { contactFRAG } from "./contact-me-FRAGs/contact-me-FRAG";

const contactMe = `
<div class=" px-sm-5 py-3 mt-5">
  <div id="contactMe">${contactFRAG}</div>
</div>`;

const contactElement = createRouteContainer(contactMe, "contact-me");

export { contactElement };
