import { createRouteContainer } from "../../utilities/allUtilities";
import { underConstructionFRAG } from "./under-construction-FRAG";

const underConstruction = `
<div class="mx-md-5">
  <div class="under-construction rounded text-center py-3 overflow-hidden">
  <p class="fs-3 under-construction-text-color">This Vanilla JS version - <span class="fs-6">100% functional</span></p>

    <a href="https://dreamy-cocada-3ca0d7.netlify.app" class="btn btn-info text-light mb-3">React version</a>
  <p>React version is under construction</p>
    <div id="construction-message">${underConstructionFRAG}</div>
  </div>
</div>`;

const underConstructionElement = createRouteContainer(
  underConstruction,
  "construction-message"
);
export { underConstructionElement };
