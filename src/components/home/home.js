import { createRouteContainer } from "../../utilities/allUtilities";
import { homeFRAG } from "./home-FRAG/homeFRAG";

const index = `<div class="mt-5 px-sm-5">
<p class="display-5 text-center mb-5">My portfolio</p>
<div class="rounded card-opacity">
<div>
<p class="bg-primary text-center rounded">Update: <a class="text-white" href="https://hub.docker.com/r/ellis8555/docker-realms">Docker image</a> created for my java project</p>
</div>
<div id="homeContent">${homeFRAG}</div>
</div>
</div>`;

const homeElement = createRouteContainer(index, "home");
export { index, homeElement };
