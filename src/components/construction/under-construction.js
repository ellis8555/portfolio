import { createRouteContainer } from "../../utilities/allUtilities";
import { underConstructionFRAG } from "./under-construction-FRAG";

const underConstruction = `
<div class="mx-md-5">
  <div class="under-construction rounded text-center py-3 overflow-hidden">
    <a href="https://dreamy-cocada-3ca0d7.netlify.app" class="btn btn-info text-light my-3">React version</a>
    <div id="construction-message">${underConstructionFRAG}</div>
  </div>
</div>`;

const underConstructionElement = createRouteContainer(
  underConstruction,
  "construction-message"
);
export { underConstruction, underConstructionElement };
