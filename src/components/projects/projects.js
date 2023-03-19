import { createRouteContainer } from "../../utilities/allUtilities";
import { personalFRAG } from "./project-FRAGS/personal-FRAG";
import { wywmProjectsFrag } from "./project-FRAGS/wywm-FRAG";

const projects = `
<div class="container px-5 py-3 mt-5" id="projectsContainer">
  <div id="projectSnippets">
    <p class="display-5 text-center">Projects</p>
    <div id="personal">${personalFRAG}</div>
    <div id="wywm">${wywmProjectsFrag}</div>
  </div>
</div>`;

const projectsElement = createRouteContainer(projects, "projects");
export { projectsElement };
