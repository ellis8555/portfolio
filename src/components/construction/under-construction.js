import { createRouteContainer } from "../../utilities/allUtilities";
import { underConstructionFRAG } from "./under-construction-FRAG";

const underConstruction = `
<div class="mx-md-5">
  <div class="under-construction rounded text-center py-3 overflow-hidden">
  <p class="fs-3 under-construction-text-color">This Vanilla JS version - <span class="fs-6">100% functional</span></p>
    <p class="fs-4 under-construction-text-color text-decoration-underline">
    <a href="https://dreamy-cocada-3ca0d7.netlify.app" class="text-info">React version of this project<span class="fs-6 under-construction-text-color"> - under construction</span></a>
    </p>
    <div id="construction-message">${underConstructionFRAG}</div>
  </div>
</div>`;

const underConstructionElement = createRouteContainer(
  underConstruction,
  "construction-message"
);
export { underConstructionElement };
