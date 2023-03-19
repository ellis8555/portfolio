import { createRouteContainer } from "../../utilities/allUtilities";
import { hobbiesGamesFRAG } from "./hobbie-FRAGS/games-FRAG";
import { hobbiesWebDevFRAG } from "./hobbie-FRAGS/webDev-FRAG/webDev-FRAG";

const hobbies = `
<div class="container pt-3 pb-3 mt-5" id="enjoymentsContainer">
  <div id="hobbiesSection">
    <p class="display-5 text-center">Hobbies</p>
    <div id="webDev">${hobbiesWebDevFRAG}</div>
    <div id="games">${hobbiesGamesFRAG}</div>
  </div>
</div>;`;

const hobbiesElement = createRouteContainer(hobbies, "hobbies");
export { hobbiesElement };
