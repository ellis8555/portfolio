import { createRouteContainer } from "../../utilities/routes/createDivRoutes";
import { underConstructionFRAG } from "./under-construction-FRAG";

const underConstruction = `
<div class="ms-5 me-5">
  <div class="container under-construction rounded text-center px-5 pt-3">
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
