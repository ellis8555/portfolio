import { createRouteContainer } from "../../utilities/allUtilities";
import { personalFRAG } from "./project-FRAGS/personal-FRAG";
import { wywmProjectsFrag } from "./project-FRAGS/wywm-FRAG";

const projects = `
<div class="px-sm-5 py-5  mt-5">
  <div id="projectSnippets">
    <p class="display-5 text-center">Projects</p>
    <div id="personal">${personalFRAG}</div>
    <div id="wywm">${wywmProjectsFrag}</div>
  </div>
</div>`;

const projectsElement = createRouteContainer(projects, "projects");
export { projectsElement };
