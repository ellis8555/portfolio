import { createRouteContainer } from "../../utilities/allUtilities";
import { homeFRAG } from "./home-FRAG/homeFRAG";

const index = `<div class="container px-5">
<p class="display-5 text-center pb-5">My portfolio</p>
<div class="rounded card-opacity">
    <div id="homeContent">${homeFRAG}</div>
</div>
</div>`;

const homeElement = createRouteContainer(index, "home");
export { homeElement };
