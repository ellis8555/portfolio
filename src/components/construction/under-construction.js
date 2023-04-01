import { createRouteContainer } from "../../utilities/allUtilities";
import { underConstructionFRAG } from "./under-construction-FRAG";

const underConstruction = `
<div class="mx-md-5">
  <div class="under-construction rounded text-center py-3 overflow-hidden">
    <p class="display-6 under-construction-text-color">
      Site is under construction
    </p>
    <div class="row">
    <div class="bg-success rounded fs-5 mb-3 mx-auto col-md-8">Login, Logout, Sign up and contact form all functional.</div>
    </div>
    <div class="row">
    <div class="bg-primary rounded fs-5 mb-3 mx-auto col-md-8">Accounts only created for the time being. Setting up authorized endpoints will come in the future</div>
    </div>
    <div id="construction-message">${underConstructionFRAG}</div>
  </div>
</div>`;

const underConstructionElement = createRouteContainer(
  underConstruction,
  "construction-message"
);
export { underConstructionElement };
