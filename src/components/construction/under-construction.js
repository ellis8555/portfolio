import { createRouteContainer } from "../../utilities/allUtilities";
import { underConstructionFRAG } from "./under-construction-FRAG";

const underConstruction = `
<div class=" mx-md-5">
  <div class="container under-construction rounded text-center py-3 px-lg-3">
    <p class="display-6 under-construction-text-color">
      Site is under construction
    </p>
    <div id="construction-message">${underConstructionFRAG}</div>
  </div>
</div>`;

const underConstructionElement = createRouteContainer(
  underConstruction,
  "construction-message"
);
export { underConstructionElement };
